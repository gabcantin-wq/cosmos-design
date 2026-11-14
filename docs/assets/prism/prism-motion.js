/* Prism motion — e (evaluate) and U (mount). No dependencies, network or timers.
   One active scene per document; a single pass, with explicit replay. */
(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory(require('./prism-scenes.js'));
  else root.PrismMotion=factory(root.PrismScenes);
})(typeof globalThis!=='undefined'?globalThis:this,function(scenes){
  'use strict';
  if(!scenes)throw new Error('Load prism-scenes.js before prism-motion.js.');
  var serial=0, active=null, controllers=new Set(),autoplayFrame=0,autoplayWindow=null;
  var palette={request:'#ffb365',work:'#75d8f8',memory:'#b8a0ff',receipt:'#a5efd4'};
  var UI={
    fr:{play:'Lancer',pause:'Pause',resume:'Continuer',replay:'Rejouer',scenario:'Scénario',timeline:'Position dans la démonstration',steps:'Étapes de la démonstration',request:'Demande / résultat',work:'Contribution',memory:'Expérience',receipt:'Reçu / preuve',note:"Scénario illustratif, sans mesure de performance ni connexion à un système réel.",reduced:"Animation automatique désactivée selon votre préférence de mouvement.",imageError:"L'image n'est pas disponible. Le scénario textuel reste accessible.",geometryError:"La géométrie de cette image diffère de celle de la scène. Animation désactivée.",pending:'En attente de visibilité'},
    en:{play:'Play',pause:'Pause',resume:'Resume',replay:'Replay',scenario:'Scenario',timeline:'Position in the demonstration',steps:'Demonstration steps',request:'Request / result',work:'Contribution',memory:'Experience',receipt:'Receipt / evidence',note:'Illustrative scenario, without performance measurements or connection to a live system.',reduced:'Automatic animation is disabled according to your motion preference.',imageError:'The image is unavailable. The text scenario remains accessible.',geometryError:'The image geometry differs from this scene. Animation is disabled.',pending:'Waiting until visible'}
  };
  function clamp(x,a,b){return Math.max(a===undefined?0:a,Math.min(b===undefined?1:b,x));}
  function resolve(scene){var s=typeof scene==='string'?scenes[scene]:scene;if(!s)throw new TypeError('Unknown scene');return s;}
  function local(text,lang){return typeof text==='string'?text:text[lang]||text.en||text.fr||'';}
  function evaluate(scene,rawTime,variant){
    var s=resolve(scene);
    if(!Number.isFinite(rawTime))throw new TypeError('Time must be finite.');
    variant=variant||s.defaultVariant;
    if(!s.variants.some(function(v){return v.id===variant;}))throw new TypeError('Unknown scenario.');
    var time=clamp(rawTime,0,s.duration),index=0;
    for(var i=1;i<s.phases.length;i++)if(time>=s.phases[i].from)index=i;
    var base=s.phases[index],override=s.overrides&&s.overrides[variant]&&s.overrides[variant][index];
    var phase=Object.assign({},base,override||{});
    var tracks=s.routes.filter(function(r){return (!r.variants||r.variants.indexOf(variant)>=0)&&time>=r.start;}).map(function(r){
      var progress=clamp((time-r.start)/(r.end-r.start));
      return {id:r.id,progress:progress,distance:progress*progress*(3-2*progress),moving:time>=r.start&&time<r.end,kind:r.kind};
    });
    return {scene:s.id,time:time,variant:variant,phase:index,progress:clamp((time-base.from)/(base.to-base.from)),title:phase.title,copy:phase.copy,focus:(phase.focus||[]).slice(),tracks:tracks,complete:time>=s.duration};
  }
  // CSS object-fit/object-position geometry. Overlay uses the image element's
  // own box, including cover crops and the hero's off-centre 60% position.
  function fitTransform(boxWidth,boxHeight,sourceWidth,sourceHeight,fit,position){
    if(![boxWidth,boxHeight,sourceWidth,sourceHeight].every(function(x){return Number.isFinite(x)&&x>0;}))throw new TypeError('Positive geometry required.');
    fit=fit||'fill';position=(position||'50% 50%').trim().split(/\s+/);
    if(position.length===1){if(position[0]==='top'||position[0]==='bottom')position=['50%',position[0]];else position=[position[0],'50%'];}
    if(position.length!==2)throw new TypeError('Use a two-value object-position.');
    var sx=boxWidth/sourceWidth,sy=boxHeight/sourceHeight;
    if(fit!=='fill'){
      var scale=fit==='cover'?Math.max(sx,sy):fit==='none'?1:fit==='scale-down'?Math.min(1,sx,sy):Math.min(sx,sy);
      sx=scale;sy=scale;
    }
    function offset(token,space,axis){
      var named={left:0,top:0,center:.5,right:1,bottom:1};
      if(Object.prototype.hasOwnProperty.call(named,token))return space*named[token];
      if(/^-?[\d.]+%$/.test(token))return space*parseFloat(token)/100;
      if(/^-?[\d.]+px$/.test(token))return parseFloat(token);
      if(token==='0')return 0;
      throw new TypeError('Unsupported '+axis+' object-position: '+token);
    }
    return {sx:sx,sy:sy,x:offset(position[0],boxWidth-sourceWidth*sx,'horizontal'),y:offset(position[1],boxHeight-sourceHeight*sy,'vertical')};
  }
  function scheduleAutoplay(win){
    if(autoplayFrame)return;
    // Separate observers may report entry before the previous scene's exit.
    // Decide after all those callbacks; never resume a consumed scene.
    autoplayWindow=win;
    autoplayFrame=win.requestAnimationFrame(function(){
      autoplayFrame=0;autoplayWindow=null;
      if(active)return;
      var choices=Array.from(controllers).filter(function(c){return c.autoReady();});
      choices.sort(function(a,b){return b.visibility()-a.visibility();});
      if(choices.length)choices[0].play(false);
    });
  }
  function mount(host,scene,options){
    var s=resolve(scene);options=options||{};
    if(!host||!host.ownerDocument)throw new TypeError('A media host element is required.');
    if(host.__prismMotion)throw new Error('This media host is already mounted.');
    var doc=host.ownerDocument,win=doc.defaultView,image=options.image||host.querySelector('img');
    if(!image)throw new Error('Keep a static img inside the media host.');
    var lang=(options.lang||doc.documentElement.lang||'en').toLowerCase().slice(0,2)==='fr'?'fr':'en';
    var ui=UI[lang],controlHost=options.controls||null;
    if(options.autoplay!==false&&!controlHost)throw new Error('Autoplay requires a visible pause control container.');
    var uid='pm-'+(++serial),ns='http://www.w3.org/2000/svg',cleanups=[],observer=null,resizeObserver=null;
    var initialPosition=host.style.position;
    if(win.getComputedStyle(host).position==='static')host.style.position='relative';
    var hadClass=host.classList.contains('pm-mounted');host.classList.add('pm-mounted');
    function html(tag,cls,text){var e=doc.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;}
    function svg(tag,attrs){var e=doc.createElementNS(ns,tag);Object.keys(attrs||{}).forEach(function(k){e.setAttribute(k,String(attrs[k]));});return e;}
    function listen(target,event,fn,opts){target.addEventListener(event,fn,opts);cleanups.push(function(){target.removeEventListener(event,fn,opts);});}
    var overlay=svg('svg',{'class':'pm-overlay','aria-hidden':'true','focusable':'false',preserveAspectRatio:'none'});
    var definitions=svg('defs'),glow=svg('filter',{id:uid+'-glow',x:'-130%',y:'-130%',width:'360%',height:'360%'});
    glow.append(svg('feGaussianBlur',{stdDeviation:6}));definitions.append(glow);overlay.append(definitions);
    var layer=svg('g'),paths=svg('g'),beaconsLayer=svg('g'),particles=svg('g');layer.append(paths,beaconsLayer,particles);overlay.append(layer);host.append(overlay);
    var view={};
    s.routes.forEach(function(route){
      var path=svg('path',{d:route.d,'class':'pm-path',stroke:route.color});
      var tail=svg('path',{d:route.d,'class':'pm-tail',stroke:route.color});
      paths.append(path,tail);
      var packet=svg('g',{'class':'pm-packet'});
      packet.append(svg('circle',{r:15,fill:route.color,opacity:.32,filter:'url(#'+uid+'-glow)'}));
      if(route.kind==='request')packet.append(svg('circle',{r:6.5,fill:route.color}));
      else if(route.kind==='receipt')packet.append(svg('circle',{r:7,fill:'none',stroke:route.color,'stroke-width':2.5}));
      else packet.append(svg('rect',{x:-5.5,y:-5.5,width:11,height:11,rx:route.kind==='work'?2:0,fill:route.color,transform:route.kind==='memory'?'rotate(45)':'rotate(0)'}));
      particles.append(packet);
      view[route.id]={path:path,tail:tail,packet:packet,length:path.getTotalLength()};
    });
    var nodes={};
    Object.keys(s.nodes).forEach(function(id){
      var node=s.nodes[id],e=svg('ellipse',{cx:node.x,cy:node.y,rx:node.rx,ry:node.ry,stroke:node.color,'class':'pm-beacon'});
      beaconsLayer.append(e);nodes[id]=e;
    });
    var media=win.matchMedia('(prefers-reduced-motion: reduce)'),reduced=media.matches;
    var time=0,variant=options.variant||s.defaultVariant,running=false,destroyed=false,raf=0,lastStamp=null,ratio=0;
    var autoConsumed=false,imageReady=false,geometryOK=false,lastPhaseKey='',lastSecond=-1,reason='initial';
    var state=evaluate(s,time,variant),controls=null,playButton=null,range=null,steps=[],heading=null,copy=null,notice=null,variantButtons=[];
    if(controlHost){
      controls=html('div','pm-ui'+(options.compact?' pm-ui-compact':''));
      var toolbar=html('div','pm-toolbar'),playback=html('div','pm-playback');
      playButton=html('button','pm-button pm-button-primary',ui.play);playButton.type='button';
      var replay=html('button','pm-button',ui.replay);replay.type='button';playback.append(playButton,replay);toolbar.append(playback);
      if(s.variants.length>1&&!options.compact){
        var variants=html('div','pm-variants');variants.setAttribute('role','group');variants.setAttribute('aria-label',ui.scenario);
        s.variants.forEach(function(v){var button=html('button','pm-button',local(v.label,lang));button.type='button';button.setAttribute('aria-pressed',String(v.id===variant));listen(button,'click',function(){setVariant(v.id);});variants.append(button);variantButtons.push({id:v.id,button:button});});toolbar.append(variants);
      }
      controls.append(toolbar);
      if(!options.compact){
        var label=html('label','pm-sr-only',ui.timeline);label.htmlFor=uid+'-position';
        range=html('input','pm-range');range.id=uid+'-position';range.type='range';range.min='0';range.max=String(s.duration);range.step='.02';range.value='0';controls.append(label,range);
        var nav=html('nav','pm-steps');nav.setAttribute('aria-label',ui.steps);
        s.phases.forEach(function(p,index){var button=html('button','pm-step');button.type='button';var number=html('span','pm-step-number',String(index+1).padStart(2,'0'));var title=html('span','pm-step-title',local(p.title,lang));button.append(number,title);listen(button,'click',function(){seek((p.from+p.to)/2);});nav.append(button);steps.push({button:button,title:title});});controls.append(nav);
        var explanation=html('div','pm-explanation');explanation.setAttribute('aria-live','polite');explanation.setAttribute('aria-atomic','true');
        heading=html(options.headingTag==='h3'?'h3':'h2','pm-phase-title');copy=html('p','pm-phase-copy');explanation.append(heading,copy);controls.append(explanation);
        var legend=html('div','pm-legend'),kinds=Array.from(new Set(s.routes.map(function(r){return r.kind;})));
        kinds.forEach(function(kind){var item=html('span','pm-legend-item'),mark=html('i','pm-key pm-key-'+kind);mark.style.setProperty('--pm-key-color',palette[kind]);mark.setAttribute('aria-hidden','true');item.append(mark,doc.createTextNode(ui[kind]));legend.append(item);});controls.append(legend);
        controls.append(html('p','pm-note',ui.note));
      }
      notice=html('p','pm-notice');notice.setAttribute('role','status');notice.hidden=true;controls.append(notice);controlHost.append(controls);
      listen(playButton,'click',function(){if(running)pause('user');else play(true);});
      listen(replay,'click',function(){pause('user');time=0;paint();play(true);});
      if(range)listen(range,'input',function(){seek(Number(range.value));});
    }
    function setNotice(message){if(notice){notice.textContent=message;notice.hidden=!message;}}
    function syncGeometry(){
      if(destroyed)return;
      var ir=image.getBoundingClientRect(),hr=host.getBoundingClientRect();
      if(!ir.width||!ir.height||!hr.width||!hr.height){geometryOK=false;return;}
      // offsetWidth/Height round fractional CSS pixels. That rounding displaced
      // overlays even without a transform; retain the exact border-box size.
      var hostStyle=win.getComputedStyle(host);
      function px(style,key){return parseFloat(style[key])||0;}
      function borderBox(style,axis){
        var size=px(style,axis);
        if(style.boxSizing!=='border-box')size+=axis==='width'
          ?px(style,'paddingLeft')+px(style,'paddingRight')+px(style,'borderLeftWidth')+px(style,'borderRightWidth')
          :px(style,'paddingTop')+px(style,'paddingBottom')+px(style,'borderTopWidth')+px(style,'borderBottomWidth');
        return size;
      }
      var hostWidth=borderBox(hostStyle,'width'),hostHeight=borderBox(hostStyle,'height');
      var hostScaleX=hostWidth?hr.width/hostWidth:1,hostScaleY=hostHeight?hr.height/hostHeight:1;
      var imageStyle=win.getComputedStyle(image);
      var insetX=px(imageStyle,'borderLeftWidth')+px(imageStyle,'paddingLeft');
      var insetY=px(imageStyle,'borderTopWidth')+px(imageStyle,'paddingTop');
      // object-fit applies to the content box, excluding the figure's border.
      var width=ir.width/hostScaleX-insetX-px(imageStyle,'borderRightWidth')-px(imageStyle,'paddingRight');
      var height=ir.height/hostScaleY-insetY-px(imageStyle,'borderBottomWidth')-px(imageStyle,'paddingBottom');
      try{
        if(image.naturalWidth&&Math.abs((image.naturalWidth/image.naturalHeight)/(s.width/s.height)-1)>.003)throw new Error('Image aspect changed');
        var fit=fitTransform(width,height,s.width,s.height,imageStyle.objectFit,imageStyle.objectPosition);
        overlay.style.left=((ir.left-hr.left)/hostScaleX-px(hostStyle,'borderLeftWidth')+insetX)+'px';overlay.style.top=((ir.top-hr.top)/hostScaleY-px(hostStyle,'borderTopWidth')+insetY)+'px';
        overlay.style.width=width+'px';overlay.style.height=height+'px';overlay.setAttribute('viewBox','0 0 '+width+' '+height);
        layer.setAttribute('transform','translate('+fit.x+' '+fit.y+') scale('+fit.sx+' '+fit.sy+')');
        geometryOK=true;overlay.style.visibility='visible';
        if(imageReady)setNotice(reduced?ui.reduced:'');
      }catch(error){geometryOK=false;overlay.style.visibility='hidden';pause('geometry');setNotice(ui.geometryError);}
    }
    function measureVisibility(){
      var rect=image.getBoundingClientRect(),w=win.innerWidth||doc.documentElement.clientWidth,h=win.innerHeight||doc.documentElement.clientHeight;
      var width=Math.max(0,Math.min(rect.right,w)-Math.max(rect.left,0)),height=Math.max(0,Math.min(rect.bottom,h)-Math.max(rect.top,0));
      ratio=rect.width&&rect.height?width*height/(rect.width*rect.height):0;
    }
    function paint(){
      if(destroyed)return;
      state=evaluate(s,time,variant);
      Object.keys(view).forEach(function(id){view[id].path.style.opacity='0';view[id].tail.style.opacity='0';view[id].packet.style.opacity='0';});
      state.tracks.forEach(function(track){
        var v=view[track.id],distance=track.distance,l=v.length;
        v.path.style.strokeDasharray=String(l);v.path.style.strokeDashoffset=String(l*(1-distance));
        v.path.style.opacity=track.moving?'.38':'.09';
        if(track.moving){
          var fade=Math.min(1,track.progress/.1,(1-track.progress)/.12),tail=Math.min(39,l*.32);
          v.tail.style.strokeDasharray=tail+' '+(l+tail);v.tail.style.strokeDashoffset=String(-distance*l+tail);
          v.tail.style.opacity=String(.32*fade);
          var point=v.path.getPointAtLength(distance*l);v.packet.setAttribute('transform','translate('+point.x+' '+point.y+')');v.packet.style.opacity=String(.86*fade);
        }
      });
      Object.keys(nodes).forEach(function(id){nodes[id].style.opacity='0';});
      var envelope=Math.min(1,state.progress/.18,(1-state.progress)/.18);
      state.focus.forEach(function(id){if(nodes[id])nodes[id].style.opacity=String(.16+.27*clamp(envelope));});
      if(range)range.value=String(time);
      var key=variant+':'+state.phase;
      if(key!==lastPhaseKey){
        lastPhaseKey=key;
        if(heading)heading.textContent=local(state.title,lang);if(copy)copy.textContent=local(state.copy,lang);
        steps.forEach(function(entry,index){
          if(index===state.phase)entry.button.setAttribute('aria-current','step');else entry.button.removeAttribute('aria-current');
          entry.button.dataset.complete=String(index<state.phase);
          var override=s.overrides&&s.overrides[variant]&&s.overrides[variant][index];
          entry.title.textContent=local(override&&override.title||s.phases[index].title,lang);
        });
        variantButtons.forEach(function(entry){entry.button.setAttribute('aria-pressed',String(entry.id===variant));});
      }
      if(range&&Math.floor(time)!==lastSecond){lastSecond=Math.floor(time);range.setAttribute('aria-valuetext',(state.phase+1)+' / '+s.phases.length+' · '+local(state.title,lang));}
      if(playButton){playButton.textContent=running?ui.pause:state.complete?ui.replay:time===0?ui.play:ui.resume;playButton.disabled=!imageReady||!geometryOK;}
    }
    function pause(why){
      if(destroyed)return;
      running=false;lastStamp=null;reason=why||'user';
      if(reason==='user')autoConsumed=true;
      if(raf)win.cancelAnimationFrame(raf);raf=0;if(active===controller)active=null;paint();
      if(reason==='offscreen')scheduleAutoplay(win);
    }
    function tick(stamp){
      raf=0;if(destroyed||!running)return;
      if(lastStamp!==null)time=Math.min(s.duration,time+clamp((stamp-lastStamp)/1000,0,.12));
      lastStamp=stamp;
      if(time>=s.duration){running=false;lastStamp=null;reason='complete';if(active===controller)active=null;}
      paint();if(running)raf=win.requestAnimationFrame(tick);
      // Completion never starts another scene or repeats this one.
    }
    function play(manual){
      if(destroyed)return false;
      if(manual!==false)autoConsumed=true;
      if(running)return true;
      if(!imageReady||!geometryOK||ratio<.15||doc.hidden)return false;
      if(manual===false&&(reduced||!autoplayPermitted()))return false;
      if(active&&active!==controller)active.pause('another-scene');
      if(time>=s.duration)time=0;
      autoConsumed=true;active=controller;running=true;lastStamp=null;reason=manual===false?'autoplay':'user';paint();raf=win.requestAnimationFrame(tick);return true;
    }
    function seek(value){
      if(!Number.isFinite(value))throw new TypeError('Time must be finite.');
      pause('user');time=clamp(value,0,s.duration);paint();
    }
    function setVariant(next){
      if(!s.variants.some(function(v){return v.id===next;}))throw new TypeError('Unknown scenario.');
      var wasRunning=running;pause('user');variant=next;time=s.variantSeek===undefined?0:s.variantSeek;lastPhaseKey='';paint();if(wasRunning&&!reduced)play(true);
    }
    function onLoad(){imageReady=Boolean(image.complete&&image.naturalWidth);syncGeometry();paint();measureVisibility();scheduleAutoplay(win);}
    function onError(){imageReady=false;pause('image-error');overlay.style.visibility='hidden';setNotice(ui.imageError);}
    function onResize(){syncGeometry();measureVisibility();if(ratio<.15)pause('offscreen');scheduleAutoplay(win);}
    function onMotion(event){reduced=event.matches;if(reduced)pause('reduced-motion');setNotice(reduced?ui.reduced:'');}
    function autoplayPermitted(){return options.autoplay!==false&&(!options.canAutoplay||options.canAutoplay());}
    var controller={
      play:play,pause:pause,seek:seek,setVariant:setVariant,
      restart:function(){pause('user');time=0;paint();return play(true);},
      syncGeometry:syncGeometry,
      getState:function(){return Object.assign({},state,{running:running,reduced:reduced,visibility:ratio,reason:reason});},
      autoReady:function(){return !destroyed&&!autoConsumed&&autoplayPermitted()&&Boolean(controlHost)&&imageReady&&geometryOK&&!reduced&&!doc.hidden&&ratio>=.15;},
      visibility:function(){return ratio;},
      destroy:function(){
        if(destroyed)return;pause('destroy');destroyed=true;controllers.delete(controller);
        if(!controllers.size&&autoplayFrame){autoplayWindow.cancelAnimationFrame(autoplayFrame);autoplayFrame=0;autoplayWindow=null;}
        if(observer)observer.disconnect();if(resizeObserver)resizeObserver.disconnect();cleanups.forEach(function(f){f();});
        overlay.remove();if(controls)controls.remove();host.style.position=initialPosition;if(!hadClass)host.classList.remove('pm-mounted');delete host.__prismMotion;
      }
    };
    host.__prismMotion=controller;controllers.add(controller);
    listen(image,'load',onLoad);listen(image,'error',onError);
    listen(doc,'visibilitychange',function(){if(doc.hidden)pause('hidden');});
    if(media.addEventListener)listen(media,'change',onMotion);
    else if(media.addListener){media.addListener(onMotion);cleanups.push(function(){media.removeListener(onMotion);});}
    listen(win,'resize',onResize,{passive:true});
    if(win.ResizeObserver){resizeObserver=new win.ResizeObserver(function(){syncGeometry();});resizeObserver.observe(host);resizeObserver.observe(image);}
    if(win.IntersectionObserver){
      observer=new win.IntersectionObserver(function(entries){ratio=entries[entries.length-1].intersectionRatio;if(ratio<.15)pause('offscreen');else scheduleAutoplay(win);},{threshold:[0,.15,.3,.6,1]});observer.observe(image);
    }else listen(win,'scroll',function(){measureVisibility();if(ratio<.15)pause('offscreen');else scheduleAutoplay(win);},{passive:true});
    measureVisibility();imageReady=Boolean(image.complete&&image.naturalWidth);syncGeometry();paint();
    if(reduced)setNotice(ui.reduced);
    scheduleAutoplay(win);
    return controller;
  }
  return Object.freeze({version:'1.0.0',scenes:scenes,local:local,evaluate:evaluate,fitTransform:fitTransform,mount:mount,pauseAll:function(){controllers.forEach(function(c){c.pause('user');});}});
});
