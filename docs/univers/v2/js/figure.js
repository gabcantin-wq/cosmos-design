// =====================================================
// V2 — Moteur de figure annotée
// Lit body.dataset.figure, charge la figure (figures.js),
// construit image plein écran + calque SVG + textes ancrés,
// révèle les étapes une à une. Voir css/figure.css.
// =====================================================

import { figureByKey } from './figures.js';

const SVGNS = 'http://www.w3.org/2000/svg';
const key = document.body.dataset.figure;
const fig = figureByKey(key);

if (!fig) {
  document.body.innerHTML =
    '<p style="padding:6rem 2rem;color:#a8acbf">Unknown figure: ' + (key || '(none)') + '</p>';
} else {
  build();
}

function build() {
  document.title = `${fig.title} — V2 — Structural cosmological model`;
  document.body.innerHTML = `
    <header class="v2-topbar">
      <a href="index.html" class="v2-back">← V2</a>
      <div class="v2-plan-label">
        <span class="v2-plan-tag" id="fig-tag"></span>
        <strong id="fig-title"></strong>
      </div>
      <div class="figure-tools">
        <button type="button" class="fig-btn" id="fig-pick" title="Placement mode (P)">⌖ Place</button>
        <button type="button" class="fig-btn" id="fig-full">⤢ Fullscreen</button>
      </div>
    </header>
    <div class="figure-wrap">
      <div class="figure-stage" id="stage">
        <img id="fig-img" alt="">
        <svg class="figure-svg" id="fig-svg" preserveAspectRatio="none">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3"
                    orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L8,3 L0,6 Z" fill="var(--accent)"></path>
            </marker>
          </defs>
        </svg>
        <div class="figure-callouts" id="fig-callouts"></div>
      </div>
    </div>
    <footer class="figure-bar">
      <button type="button" class="fig-btn fig-icon" id="fig-prev" title="Previous" aria-label="Previous">⏮</button>
      <button type="button" class="fig-btn fig-icon" id="fig-play" title="Play / pause" aria-label="Play / pause">⏸</button>
      <button type="button" class="fig-btn fig-icon" id="fig-next" title="Next" aria-label="Next">⏭</button>
      <button type="button" class="fig-btn fig-speed" id="fig-speed" title="Speed">1×</button>
    </footer>
    <div class="figure-pick" id="fig-pickout" hidden>P: click image for %</div>
  `;

  document.getElementById('fig-tag').textContent = fig.tag || '';
  document.getElementById('fig-title').textContent = fig.title || '';

  const stage = document.getElementById('stage');
  const img = document.getElementById('fig-img');
  const svg = document.getElementById('fig-svg');
  const callouts = document.getElementById('fig-callouts');

  const steps = fig.steps || [];
  let W = 1, H = 1;
  let current = 0;

  img.addEventListener('load', () => {
    W = img.naturalWidth || 1;
    H = img.naturalHeight || 1;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    stage.style.setProperty('--ar', String(W / H));
    sizeStage();
    drawSteps();
    showUpTo(0);
    setPlaying(true);
    document.body.classList.add('v2-ready');
  });
  img.src = fig.image;

  // ---- Taille du stage : fit écran à ratio constant ----
  function sizeStage() {
    const wrap = stage.parentElement;
    const availW = wrap.clientWidth;
    const availH = wrap.clientHeight;
    const ar = W / H;
    let w = Math.min(availW, availH * ar);
    let h = w / ar;
    stage.style.width = `${Math.round(w)}px`;
    stage.style.height = `${Math.round(h)}px`;
  }
  window.addEventListener('resize', sizeStage);

  // ---- Construction des schémas + textes ----
  function px(xPercent) { return (xPercent / 100) * W; }
  function py(yPercent) { return (yPercent / 100) * H; }
  const strokeW = Math.max(2, W * 0.004);
  const dotR = Math.max(3, W * 0.008);

  function drawSteps() {
    steps.forEach((s, i) => {
      const g = document.createElementNS(SVGNS, 'g');
      g.setAttribute('class', 'figure-step');
      g.dataset.i = String(i);

      const X = px(s.x), Y = py(s.y);

      if (s.kind === 'point') {
        const c = el('circle', { cx: X, cy: Y, r: dotR, class: 'figure-dot' });
        g.appendChild(el('circle', { cx: X, cy: Y, r: dotR * 2.2, class: 'figure-shape', 'stroke-width': strokeW }));
        g.appendChild(c);
      } else if (s.kind === 'observer') {
        // œil : amande + pupille
        const rx = dotR * 3.2, ry = dotR * 1.9;
        g.appendChild(el('ellipse', { cx: X, cy: Y, rx, ry, class: 'figure-eye-ring', 'stroke-width': strokeW }));
        g.appendChild(el('circle', { cx: X, cy: Y, r: dotR * 1.1, class: 'figure-eye-pupil' }));
      } else if (s.kind === 'slope') {
        const lenPx = ((s.length || 20) / 100) * W;
        const a = ((s.angle || 0) * Math.PI) / 180;
        const dx = Math.cos(a) * lenPx / 2;
        const dy = Math.sin(a) * lenPx / 2;
        g.appendChild(el('line', {
          x1: X - dx, y1: Y - dy, x2: X + dx, y2: Y + dy,
          class: 'figure-shape', 'stroke-width': strokeW,
        }));
        g.appendChild(el('circle', { cx: X, cy: Y, r: dotR * 0.8, class: 'figure-dot' }));
      } else if (s.kind === 'arrow') {
        const tx = px(s.tx ?? s.x), ty = py(s.ty ?? s.y);
        g.appendChild(el('line', {
          x1: tx, y1: ty, x2: X, y2: Y,
          class: 'figure-shape', 'stroke-width': strokeW,
          'marker-end': 'url(#arrowhead)',
        }));
      }
      svg.appendChild(g);

      // Texte ancré (HTML)
      const co = document.createElement('div');
      co.className = 'figure-callout';
      co.dataset.i = String(i);
      co.style.left = `${s.tx ?? s.x}%`;
      co.style.top = `${s.ty ?? s.y}%`;
      const num = document.createElement('span');
      num.className = 'figure-callout-n';
      num.textContent = String(s.n ?? i + 1);
      const txt = document.createElement('span');
      txt.textContent = s.text || '';
      co.append(num, txt);
      callouts.appendChild(co);
    });
  }

  function el(name, attrs) {
    const e = document.createElementNS(SVGNS, name);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  // ---- Révélation ----
  function showUpTo(n) {
    current = Math.max(0, Math.min(n, steps.length - 1));
    svg.querySelectorAll('.figure-step').forEach((g) => {
      const i = Number(g.dataset.i);
      g.classList.toggle('show', i <= current);
      g.classList.toggle('current', i === current);
    });
    callouts.querySelectorAll('.figure-callout').forEach((c) => {
      const i = Number(c.dataset.i);
      c.classList.toggle('show', i <= current);
      c.classList.toggle('current', i === current);
    });
    document.getElementById('fig-prev').disabled = current <= 0;
    document.getElementById('fig-next').disabled = current >= steps.length - 1;
  }
  function hideAll() {
    svg.querySelectorAll('.figure-step').forEach((g) => g.classList.remove('show', 'current'));
    callouts.querySelectorAll('.figure-callout').forEach((c) => c.classList.remove('show', 'current'));
  }

  // ---- Auto-défilement : 1× (3 s) ou 4× lent (12 s) ; boucle avec outro doux ----
  const BASE = 3000;
  let speed = 1;            // 1 ou 4 (4 = lent)
  let playing = false;
  let autoTimer = null;
  const playBtn = document.getElementById('fig-play');
  const speedBtn = document.getElementById('fig-speed');

  function clearAuto() { if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; } }
  function scheduleAuto() {
    clearAuto();
    if (!playing) return;
    const interval = BASE * speed;
    if (current >= steps.length - 1) {
      // dernière phrase montrée → tout disparaît tranquillement, puis on reboucle
      autoTimer = setTimeout(outroThenRestart, interval);
      return;
    }
    autoTimer = setTimeout(() => { showUpTo(current + 1); scheduleAuto(); }, interval);
  }
  function outroThenRestart() {
    document.body.classList.add('figure-outro');
    hideAll();
    autoTimer = setTimeout(() => {
      document.body.classList.remove('figure-outro');
      showUpTo(0);
      scheduleAuto();
    }, 1400);
  }
  function setPlaying(on) {
    playing = on;
    playBtn.textContent = on ? '⏸' : '▶';     // clic sur le triangle = pause/play
    if (on) scheduleAuto(); else clearAuto();
  }
  playBtn.addEventListener('click', () => setPlaying(!playing));

  speedBtn.addEventListener('click', () => {
    speed = speed === 1 ? 4 : 1;               // 2 vitesses : 1× ou 4× lent
    speedBtn.textContent = `${speed}×`;
    if (playing) scheduleAuto();
  });

  // Manuel : reprend la main et met l'auto en pause
  function manualStep(n) { setPlaying(false); showUpTo(n); }
  document.getElementById('fig-next').addEventListener('click', () => manualStep(current + 1));
  document.getElementById('fig-prev').addEventListener('click', () => manualStep(current - 1));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') manualStep(current + 1);
    else if (e.key === 'ArrowLeft') manualStep(current - 1);
    else if (e.key === 'p' || e.key === 'P') togglePick();
  });

  // ---- Plein écran ----
  document.getElementById('fig-full').addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  });

  // ---- Mode placement (coordonnées %) ----
  let picking = false;
  const pickOut = document.getElementById('fig-pickout');
  function togglePick() {
    picking = !picking;
    stage.classList.toggle('picking', picking);
    pickOut.hidden = !picking;
    document.getElementById('fig-pick').classList.toggle('active', picking);
  }
  document.getElementById('fig-pick').addEventListener('click', togglePick);
  stage.addEventListener('click', (e) => {
    if (!picking) return;
    const r = stage.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    const txt = `x: ${x.toFixed(1)}, y: ${y.toFixed(1)}`;
    pickOut.textContent = txt;
    // eslint-disable-next-line no-console
    console.log('[figure pick]', txt);
  });
}
