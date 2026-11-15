"""Render subtle cinemagraphs from the existing illustration pixels.

No new objects are painted: authored light routes and core regions modulate
the original RGB values. Dark pixels stay dark, textures and silhouettes stay
fixed. The supplied timelines retain their ordering at 1.6x speed. A zero-gain
boundary makes every loop return to its unmodified source image.

Requires numpy, scipy, Pillow and PyAV with libx264/libvpx-vp9. Originals are
never overwritten. --scene renders a single scene for visual iteration.
"""
from pathlib import Path
import argparse
from fractions import Fraction
import hashlib
import json
import math
import re
import time
import av
import numpy as np
from PIL import Image
from scipy.ndimage import distance_transform_edt

HERE=Path(__file__).resolve().parent
ASSETS=HERE.parents[1]/'docs/assets/prism'
CONFIG=json.loads((HERE/'hover-scenes.json').read_text(encoding='utf-8'))


def sample_path(path):
    tokens=re.findall(r'[MLCQ]|[-+]?(?:\d*\.\d+|\d+)',path)
    points=[]; i=0; current=np.array([0.,0.])
    while i<len(tokens):
        command=tokens[i];i+=1
        count={'M':2,'L':2,'C':6,'Q':4}[command]
        values=np.array([float(x) for x in tokens[i:i+count]]).reshape(-1,2);i+=count
        if command=='M':
            current=values[0];points.append(current);continue
        polygon=np.vstack([current,values])
        length=np.linalg.norm(np.diff(polygon,axis=0),axis=1).sum()
        t=np.linspace(0,1,max(3,int(length*1.2)))[:,None]
        if command=='L':curve=(1-t)*current+t*values[0]
        elif command=='Q':curve=(1-t)**2*current+2*(1-t)*t*values[0]+t*t*values[1]
        else:curve=(1-t)**3*current+3*(1-t)**2*t*values[0]+3*(1-t)*t*t*values[1]+t**3*values[2]
        points.extend(curve[1:]);current=values[-1]
    points=np.array(points)
    lengths=np.r_[0,np.cumsum(np.linalg.norm(np.diff(points,axis=0),axis=1))]
    return points,lengths/lengths[-1]


def route_field(route,width,height):
    points,progress=sample_path(route['d']);padding=28
    x0=max(0,int(points[:,0].min())-padding);x1=min(width,int(points[:,0].max())+padding+1)
    y0=max(0,int(points[:,1].min())-padding);y1=min(height,int(points[:,1].max())+padding+1)
    seeds=np.zeros((y1-y0,x1-x0),bool);positions=np.zeros(seeds.shape,np.float32)
    x=np.clip(np.rint(points[:,0]-x0).astype(int),0,x1-x0-1)
    y=np.clip(np.rint(points[:,1]-y0).astype(int),0,y1-y0-1)
    seeds[y,x]=True;positions[y,x]=progress
    distance,indices=distance_transform_edt(~seeds,return_indices=True)
    # A soft optical shoulder modulates existing reflections, never adds a line.
    band=np.exp(-.5*(distance/4.8)**2)+.26*np.exp(-.5*(distance/15)**2)
    return (slice(y0,y1),slice(x0,x1)),positions[indices[0],indices[1]],band.astype(np.float32)


def node_field(node,width,height):
    rx=node['rx']*.85;ry=node['ry']*.85
    x0=max(0,int(node['x']-rx*1.65));x1=min(width,int(node['x']+rx*1.65)+1)
    y0=max(0,int(node['y']-ry*1.65));y1=min(height,int(node['y']+ry*1.65)+1)
    y,x=np.mgrid[y0:y1,x0:x1]
    field=np.exp(-1.8*(((x-node['x'])/rx)**2+((y-node['y'])/ry)**2))
    return (slice(y0,y1),slice(x0,x1)),field.astype(np.float32)


def smooth(x):
    x=np.clip(x,0,1);return x*x*(3-2*x)


def render(name,output,frames_dir=None,formats=('mp4','webm')):
    start=time.monotonic();scene=CONFIG['scenes'][name]
    image=Image.open(ASSETS/scene['file']).convert('RGB')
    width,height=image.size
    # H.264 4:2:0 needs even dimensions; crop at most the final row/column.
    width-=width%2;height-=height%2
    original=np.array(image.crop((0,0,width,height)))
    base=original.astype(np.float32)/255
    light=np.max(base,axis=2);chroma=np.max(base,axis=2)-np.min(base,axis=2)
    material=(smooth((light-.12)/.40)*(.35+.65*smooth(chroma/.22))).astype(np.float32)
    routes=[(route,*route_field(route,width,height)) for route in scene['routes'] if not route['variants'] or scene['defaultVariant'] in route['variants']]
    nodes={key:node_field(node,width,height) for key,node in scene['nodes'].items()}
    fps=CONFIG['fps'];count=math.ceil(scene['duration']/CONFIG['speed']*fps)
    duration=count/fps
    output.mkdir(parents=True,exist_ok=True)
    encoders=[]
    for format in formats:
        path=output/(name+'.'+format)
        container=av.open(str(path),'w',options={'movflags':'+faststart'} if format=='mp4' else {})
        stream=container.add_stream('libx264' if format=='mp4' else 'libvpx-vp9',rate=fps)
        stream.width=width;stream.height=height;stream.pix_fmt='yuv420p'
        stream.codec_context.thread_count=4;stream.codec_context.gop_size=count
        stream.codec_context.color_primaries=1;stream.codec_context.color_trc=1;stream.codec_context.colorspace=1
        stream.codec_context.color_range=1
        stream.options={'crf':'18','preset':'medium','profile':'high'} if format=='mp4' else {'crf':'26','b':'0','deadline':'good','cpu-used':'4','row-mt':'1'}
        encoders.append((path,container,stream))
    snapshots={0,round(count*.12),round(count*.27),round(count*.48),round(count*.66),round(count*.90),count-1}
    difference=[]
    for index in range(count):
        time_in_scene=index/count*scene['duration']
        energy=np.zeros((height,width),np.float32)
        for route,region,position,band in routes:
            t=(time_in_scene-route['start'])/(route['end']-route['start'])
            if not 0<t<1:continue
            # An elongated highlight travelling INSIDE existing light/material.
            envelope=float(smooth(t/.12)*smooth((1-t)/.15))
            wave=np.exp(-.5*((position-t)/.15)**2).astype(np.float32)
            energy[region]+=band*(1.8*wave-.32)*envelope
        phase=next((p for p in scene['phases'] if p['from']<=time_in_scene<p['to']),scene['phases'][-1])
        fraction=(time_in_scene-phase['from'])/(phase['to']-phase['from'])
        breathe=math.sin(math.pi*fraction)**2
        for key in phase['focus']:
            region,field=nodes[key];energy[region]+=.40*breathe*field
        energy*=material
        # Source-dependent screen exposure preserves the native colours/textures.
        exposure=np.clip(energy,-.5,1.65)[...,None]
        rendered=(base+base*(1-base)*(.76*np.maximum(exposure,0)))*(1+.42*np.minimum(exposure,0))
        frame=np.rint(np.clip(rendered,0,1)*255).astype(np.uint8)
        difference.append(float(np.mean(np.abs(frame.astype(np.int16)-original))))
        if frames_dir and index in snapshots:
            frames_dir.mkdir(parents=True,exist_ok=True)
            Image.fromarray(frame).save(frames_dir/f'{name}-{index:04d}.png')
        av_frame=av.VideoFrame.from_ndarray(frame,format='rgb24').reformat(format='yuv420p',src_colorspace='ITU709',dst_colorspace='ITU709')
        av_frame.pts=index;av_frame.time_base=Fraction(1,fps)
        for path,container,stream in encoders:
            for packet in stream.encode(av_frame):container.mux(packet)
    files={}
    for path,container,stream in encoders:
        for packet in stream.encode():container.mux(packet)
        container.close();data=path.read_bytes()
        files[path.suffix[1:]]={'file':path.name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()}
    record={'scene':name,'source':scene['file'],'source_sha256':hashlib.sha256((ASSETS/scene['file']).read_bytes()).hexdigest(),'width':width,'height':height,'fps':fps,'frames':count,'duration_seconds':duration,'speed_vs_kit':CONFIG['speed'],'audio':False,'files':files,'mean_pixel_change_peak':max(difference),'mean_pixel_change_first':difference[0],'mean_pixel_change_last':difference[-1]}
    print(json.dumps({'scene':name,'seconds':round(time.monotonic()-start,1),'duration':duration,'bytes':{k:v['bytes'] for k,v in files.items()}}),flush=True)
    return record


def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--scene',choices=list(CONFIG['scenes']))
    parser.add_argument('--output',type=Path,default=ASSETS/'motion')
    parser.add_argument('--frames',type=Path)
    parser.add_argument('--mp4-only',action='store_true')
    args=parser.parse_args()
    manifest_path=args.output/'manifest.json'
    manifest=json.loads(manifest_path.read_text(encoding='utf-8')) if manifest_path.exists() else {'version':1,'method':'Source-pixel relighting; original camera, geometry, colours and text retained. No drawn overlays.','scenes':{}}
    for name in ([args.scene] if args.scene else CONFIG['scenes']):
        manifest['scenes'][name]=render(name,args.output,args.frames,('mp4',) if args.mp4_only else ('mp4','webm'))
        manifest_path.write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')


if __name__=='__main__':main()
