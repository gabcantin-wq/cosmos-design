/* Image-native cinemagraphs. Hover/focus on desktop; visible on touch screens.
   No player panels, no SVG overlays, no video request until playback is wanted. */
(function () {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const players = [];
  let active = null, scheduled = 0, intent = 0;
  const canRun = () => !document.hidden && !document.querySelector('dialog[open]');

  function refresh() {
    if (scheduled) return;
    scheduled = requestAnimationFrame(() => {
      scheduled = 0;
      const candidates = canRun() ? players.filter(p => p.wants()) : [];
      candidates.sort((a,b) => finePointer.matches ? b.intent()-a.intent() : b.visibility()-a.visibility());
      const next = candidates[0] || null;
      players.forEach(p => { if (p !== next) p.stop(); });
      active = next;
      if (next) next.start();
    });
  }

  document.querySelectorAll('[data-prism-film]').forEach(host => {
    const image = host.querySelector('img');
    if (!image) return;
    const scene = host.dataset.prismFilm;
    const label = host.getAttribute('aria-label').replace(/^Animate /, '');
    const video = document.createElement('video');
    video.muted = true; video.defaultMuted = true; video.loop = true;
    video.playsInline = true; video.preload = 'none'; video.controls = false;
    video.disablePictureInPicture = true;
    video.setAttribute('aria-hidden','true'); video.tabIndex = -1;
    host.append(video);
    host.disabled = false;
    let ratio=0, hovered=false, keyboard=false, manual=false, userPaused=false;
    let requested=false, generation=0, lastIntent=0, failed=false, fallback=false;
    const trigger = host.closest('.hero') || host;

    function syncGeometry() {
      const ir=image.getBoundingClientRect(), hr=host.getBoundingClientRect(), style=getComputedStyle(image);
      video.style.left=(ir.left-hr.left-host.clientLeft)+'px';
      video.style.top=(ir.top-hr.top-host.clientTop)+'px';
      video.style.width=ir.width+'px'; video.style.height=ir.height+'px';
      video.style.objectFit=style.objectFit; video.style.objectPosition=style.objectPosition;
      video.style.maskImage=style.maskImage;
    }
    function labelState(playing) {
      host.classList.toggle('is-playing',playing);
      host.setAttribute('aria-label',(playing?'Pause ':'Animate ')+label);
    }
    function stop() {
      if (!requested && video.paused && !host.classList.contains('is-playing')) return;
      requested=false; generation++; video.pause(); labelState(false);
      if (video.readyState) video.currentTime=0;
    }
    function attachSource() {
      if (video.getAttribute('src')) return;
      const format=!fallback && video.canPlayType('video/webm; codecs="vp9"') ? 'webm' : 'mp4';
      video.src='/assets/prism/motion/'+scene+'.'+format;
    }
    async function start() {
      if (requested || failed) return;
      requested=true;
      const current=++generation;
      attachSource(); syncGeometry();
      try {
        await video.play();
        if (current!==generation || !requested || active!==controller || !canRun()) return;
        labelState(true);
      } catch (_) {
        if (current===generation) { requested=false; labelState(false); }
      }
    }
    const controller = {
      start, stop,
      visibility:()=>ratio,
      intent:()=>lastIntent,
      wants:()=>!failed && ratio>=.30 && !userPaused && (reduced.matches ? manual : finePointer.matches ? hovered||keyboard||manual : true),
      getState:()=>({scene,playing:!video.paused,visible:ratio,requested,mode:finePointer.matches?'hover':'visible',reduced:reduced.matches,source:video.getAttribute('src'),time:video.currentTime,duration:video.duration,ready:video.readyState,failed,frames:video.getVideoPlaybackQuality?.().totalVideoFrames||0})
    };
    host.__prismFilm=controller;
    players.push(controller);
    trigger.addEventListener('pointerenter', event => {
      if (event.pointerType==='touch') return;
      hovered=true; lastIntent=++intent; refresh();
    });
    trigger.addEventListener('pointerleave', event => {
      if (event.pointerType==='touch') return;
      hovered=false;
      if (!keyboard) { manual=false; userPaused=false; }
      refresh();
    });
    host.addEventListener('focus', () => {
      keyboard=host.matches(':focus-visible'); lastIntent=++intent; refresh();
    });
    host.addEventListener('blur', () => {
      keyboard=false; manual=false;
      if (finePointer.matches) userPaused=false;
      refresh();
    });
    host.addEventListener('click', () => {
      userPaused=requested || !video.paused;
      manual=!userPaused; failed=false; lastIntent=++intent; refresh();
    });
    video.addEventListener('error', () => {
      const tryMP4=!fallback && video.getAttribute('src')?.endsWith('.webm');
      stop();
      if (tryMP4) { fallback=true; video.removeAttribute('src'); refresh(); }
      else failed=true;
    });
    image.addEventListener('load',syncGeometry);
    if ('ResizeObserver' in window) {
      const resize=new ResizeObserver(syncGeometry); resize.observe(image); resize.observe(host);
    }
    if ('IntersectionObserver' in window) {
      const observer=new IntersectionObserver(entries => {
        ratio=entries[entries.length-1].intersectionRatio; refresh();
      },{threshold:[0,.15,.30,.5,.75,1]});
      observer.observe(image);
    } else {
      const measure=()=>{
        const r=image.getBoundingClientRect();
        const w=Math.max(0,Math.min(r.right,innerWidth)-Math.max(r.left,0));
        const h=Math.max(0,Math.min(r.bottom,innerHeight)-Math.max(r.top,0));
        ratio=r.width*r.height ? w*h/(r.width*r.height) : 0; refresh();
      };
      addEventListener('scroll',measure,{passive:true}); addEventListener('resize',measure,{passive:true}); measure();
    }
    syncGeometry();
  });
  document.addEventListener('visibilitychange', () => {
    // A hidden document may not run another animation frame.
    if (document.hidden) { players.forEach(p=>p.stop()); active=null; }
    else refresh();
  });
  addEventListener('resize',refresh,{passive:true});
  reduced.addEventListener('change',refresh);
  finePointer.addEventListener('change',refresh);
  window.PrismHover=Object.freeze({refresh});
  refresh();
})();
