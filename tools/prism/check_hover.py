"""Verify decoded cinemagraphs and their image-only interaction, locally or live."""
from pathlib import Path
from urllib.parse import urlparse
import argparse
import hashlib
import json
import mimetypes
import re
from playwright.sync_api import sync_playwright
from check import BASE, DOCS, file_for, static_checks

PAGES={'/':['prism-hero','memory-reuse','ray-federation','development-cycle'],
       '/technique/':['agent-cooperation','spectral-memory','spectral-work']}


def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--artifacts',type=Path,required=True)
    parser.add_argument('--live',action='store_true')
    args=parser.parse_args();args.artifacts.mkdir(parents=True,exist_ok=True)
    static_checks()
    manifest=json.loads((DOCS/'assets/prism/motion/manifest.json').read_text())
    assert len(manifest['scenes'])==7
    for scene in manifest['scenes'].values():
        assert not scene['audio'] and scene['fps']==24 and scene['speed_vs_kit']==1.6
        assert scene['mean_pixel_change_first']==0 and scene['mean_pixel_change_last']<.03
        for entry in scene['files'].values():
            data=(DOCS/'assets/prism/motion'/entry['file']).read_bytes()
            assert hashlib.sha256(data).hexdigest()==entry['sha256']
            assert len(data)==entry['bytes']<2_000_000
    base='https://prismintelligence.ai' if args.live else BASE
    errors=[];unexpected=[];checks=[];requests=[]

    def serve(route):
        url=urlparse(route.request.url)
        if url.hostname!='prism.test' or route.request.method!='GET':
            unexpected.append(route.request.url);return route.abort()
        path=file_for(route.request.url)
        assert path.is_file(),path
        data=path.read_bytes();headers={'Accept-Ranges':'bytes'};status=200
        wanted=route.request.headers.get('range','')
        if wanted:
            match=re.fullmatch(r'bytes=(\d+)-(\d*)',wanted);assert match,wanted
            start=int(match[1]);end=min(int(match[2]) if match[2] else len(data)-1,len(data)-1)
            headers['Content-Range']=f'bytes {start}-{end}/{len(data)}';data=data[start:end+1];status=206
        route.fulfill(status=status,body=data,headers=headers,content_type=mimetypes.guess_type(path)[0] or 'application/octet-stream')

    def configure(context):
        if not args.live:context.route('**/*',serve)
        context.on('page',lambda page:page.on('pageerror',lambda e:errors.append(str(e))))
        context.on('request',lambda r:requests.append(r.url))
        if args.live:
            context.on('request',lambda r:unexpected.append(r.url) if urlparse(r.url).hostname!='prismintelligence.ai' else None)

    def load(page,path,scripts=True):
        page.mouse.move(1,1)
        page.goto(base+path,wait_until='networkidle')
        if scripts:
            page.evaluate('document.fonts.ready')
            page.add_style_tag(content='html{scroll-behavior:auto!important}')
            page.evaluate("document.querySelectorAll('img[src]').forEach(i=>i.loading='eager')")
            page.wait_for_function("[...document.querySelectorAll('img[src]')].every(i=>i.complete&&i.naturalWidth>0)")
        else:
            # Page-side promise callbacks do not run with scripting disabled.
            # Native image loading is eager in this mode; inspect synchronously.
            assert page.evaluate("[...document.querySelectorAll('img[src]')].every(i=>i.complete&&i.naturalWidth>0)")
        assert page.locator('.pm-ui,.pm-overlay,video[controls]').count()==0

    def host(page,scene):return page.locator(f'[data-prism-film="{scene}"]')
    def state(page,scene):return host(page,scene).evaluate('h=>h.__prismFilm.getState()')
    def wait_play(page,scene):
        page.wait_for_function("id=>{const h=document.querySelector('[data-prism-film=\"'+id+'\"]'),v=h.querySelector('video');return h.classList.contains('is-playing')&&!v.paused&&v.readyState>=2&&v.currentTime>.15&&v.getVideoPlaybackQuality().totalVideoFrames>1}",arg=scene)
    def wait_stop(page,scene):
        page.wait_for_function("id=>{const h=document.querySelector('[data-prism-film=\"'+id+'\"]');return h.querySelector('video').paused&&!h.classList.contains('is-playing')}",arg=scene)
    def show(page,scene):host(page,scene).locator('img').scroll_into_view_if_needed()
    def geometry(page,scene):
        result=host(page,scene).evaluate("""h=>{
          const i=h.querySelector('img'),v=h.querySelector('video'),a=i.getBoundingClientRect(),b=v.getBoundingClientRect(),s=getComputedStyle(i),t=getComputedStyle(v);
          return {box:[a.x-b.x,a.y-b.y,a.width-b.width,a.height-b.height],fit:s.objectFit===t.objectFit,position:s.objectPosition===t.objectPosition,mask:s.maskImage===t.maskImage,muted:v.muted,loop:v.loop,controls:v.controls,width:v.videoWidth,height:v.videoHeight};
        }""")
        assert max(abs(x) for x in result['box'])<.05,result
        assert all(result[k] for k in ('fit','position','mask','muted','loop')) and not result['controls'],result
        assert result['width']==manifest['scenes'][scene]['width'] and result['height']==manifest['scenes'][scene]['height'],result
        return result

    with sync_playwright() as p:
        browser=p.chromium.launch(headless=True)
        desktop=browser.new_context(viewport={'width':1440,'height':1000});configure(desktop)
        page=desktop.new_page()
        for path,scenes in PAGES.items():
            before=len(requests);load(page,path)
            assert not [u for u in requests[before:] if re.search(r'\.(webm|mp4)',u)],'video downloaded before intent'
            for scene in scenes:
                show(page,scene)
                target=page.locator('.hero') if scene=='prism-hero' else host(page,scene)
                target.hover(position={'x':target.bounding_box()['width']*.80,'y':target.bounding_box()['height']*.55})
                wait_play(page,scene);details=geometry(page,scene)
                assert page.evaluate("[...document.querySelectorAll('video')].filter(v=>!v.paused).length")==1
                if scene=='prism-hero':page.screenshot(path=str(args.artifacts/f'{scene}-desktop.png'))
                else:host(page,scene).screenshot(path=str(args.artifacts/f'{scene}-desktop.png'))
                # Real decoder traversal across the loop boundary.
                host(page,scene).locator('video').evaluate('v=>v.currentTime=v.duration-.12')
                page.wait_for_function("id=>{const v=document.querySelector('[data-prism-film=\"'+id+'\"] video');return !v.paused&&v.currentTime>.15&&v.currentTime<2}",arg=scene)
                page.mouse.move(1,1);wait_stop(page,scene)
                page.keyboard.press('Tab');host(page,scene).focus();wait_play(page,scene)
                host(page,scene).evaluate('h=>h.blur()');wait_stop(page,scene)
                checks.append({'scene':scene,'mode':'desktop hover/focus','decoded_geometry':details,'loop':'passed'})
                print('PASS desktop',scene,flush=True)
        desktop.close()
        for width,height in ((390,844),(320,740)):
            touch=browser.new_context(viewport={'width':width,'height':height},is_mobile=True,has_touch=True);configure(touch)
            page=touch.new_page()
            for path,scenes in PAGES.items():
                load(page,path)
                for scene in scenes:
                    show(page,scene);wait_play(page,scene);details=geometry(page,scene)
                    assert state(page,scene)['mode']=='visible'
                    assert page.evaluate("[...document.querySelectorAll('video')].filter(v=>!v.paused).length")==1
                    if width==390:
                        if scene=='prism-hero':page.screenshot(path=str(args.artifacts/f'{scene}-mobile.png'))
                        else:host(page,scene).screenshot(path=str(args.artifacts/f'{scene}-mobile.png'))
                    # The image itself is the discreet pause/restart target.
                    # Hero text overlays the art, so tap its unobstructed bottom.
                    if scene=='prism-hero':
                        image=host(page,scene).locator('img').bounding_box()
                        page.touchscreen.tap(min(width-25,image['x']+image['width']*.65),min(height-100,image['y']+image['height']*.65))
                    else:host(page,scene).tap()
                    wait_stop(page,scene)
                    if scene=='prism-hero':
                        page.touchscreen.tap(min(width-25,image['x']+image['width']*.65),min(height-100,image['y']+image['height']*.65))
                    else:host(page,scene).tap()
                    wait_play(page,scene)
                    page.evaluate('scrollTo(0,document.body.scrollHeight)');wait_stop(page,scene)
                    assert not page.evaluate('document.documentElement.scrollWidth>innerWidth')
                    checks.append({'scene':scene,'mode':f'touch {width}','decoded_geometry':details,'tap_pause_offscreen':'passed'})
                    print('PASS touch',width,scene,flush=True)
            touch.close()
        # Native lightboxes still work with a separate enlarge link.
        print('CHECK lightbox, reduced motion and hidden document',flush=True)
        context=browser.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True);configure(context)
        page=context.new_page();load(page,'/technique/');show(page,'agent-cooperation');wait_play(page,'agent-cooperation')
        link=page.locator('[data-lightbox]').first;link.click()
        page.wait_for_function("document.querySelector('.image-dialog').open&&[...document.querySelectorAll('video')].every(v=>v.paused)")
        page.keyboard.press('Escape');assert link.evaluate('e=>document.activeElement===e')
        # Reduced motion stays static until an explicit image activation.
        page.emulate_media(reduced_motion='reduce');load(page,'/technique/')
        for scene in PAGES['/technique/']:
            show(page,scene);page.wait_for_timeout(100);assert not state(page,scene)['playing']
        host(page,'spectral-work').tap();wait_play(page,'spectral-work')
        page.evaluate("Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'))")
        wait_stop(page,'spectral-work')
        context.close()
        for mode in ('no-js','script-unavailable','webm-fallback','media-unavailable'):
            print('CHECK fallback',mode,flush=True)
            context=browser.new_context(java_script_enabled=mode!='no-js',viewport={'width':1440,'height':1000});configure(context)
            if mode=='script-unavailable':context.route('**/prism-hover.js*',lambda r:r.abort())
            if mode in ('webm-fallback','media-unavailable'):context.route('**/*.webm',lambda r:r.fulfill(status=404,body=''))
            if mode=='media-unavailable':context.route('**/*.mp4',lambda r:r.fulfill(status=404,body=''))
            page=context.new_page();load(page,'/',scripts=mode!='no-js')
            print('LOADED fallback',mode,flush=True)
            if mode in ('no-js','script-unavailable'):
                assert page.locator('video').count()==0
                assert host(page,'memory-reuse').locator('img').is_visible()
            else:
                show(page,'memory-reuse');host(page,'memory-reuse').hover()
                if mode=='webm-fallback':
                    wait_play(page,'memory-reuse');assert state(page,'memory-reuse')['source'].endswith('.mp4')
                else:
                    page.wait_for_function("document.querySelector('[data-prism-film=\"memory-reuse\"]').__prismFilm.getState().failed")
                    assert host(page,'memory-reuse').locator('img').is_visible()
            context.close()
        browser.close()
    assert not errors,errors
    assert not unexpected,unexpected
    report={'status':'passed','mode':'public HTTPS' if args.live else 'exact local files with byte ranges','checks':checks,'no_player_panels':'passed','lazy_video_requests':'passed','single_decoder':'passed','reduced_motion':'passed','image_tap_pause':'passed','native_lightbox_focus':'passed','hidden_document':'synthetic event from active video passed','fallbacks':['no JS','script unavailable','WebM to MP4','media unavailable'],'errors':errors,'unexpected':unexpected,'video_bytes':sum(v['bytes'] for s in manifest['scenes'].values() for v in s['files'].values())}
    (args.artifacts/'hover-report.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({'status':'passed','checks':len(checks),'report':str(args.artifacts/'hover-report.json')}),flush=True)


if __name__=='__main__':main()
