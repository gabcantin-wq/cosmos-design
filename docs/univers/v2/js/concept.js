// =====================================================
// V2 — Moteur de page-concept (patron réutilisable)
// Lit body.dataset.concept, charge la fiche dans concepts.js,
// construit la page (RSVP phrase-par-phrase + texte + images)
// et câble toute la mécanique. Voir css/concept.css.
// =====================================================

import { conceptByKey } from './concepts.js';

const key = document.body.dataset.concept;
const data = conceptByKey(key);

if (!data) {
  document.body.innerHTML =
    '<p style="padding:6rem 2rem;color:#a8acbf">Unknown concept: ' + (key || '(none)') + '</p>';
} else {
  buildConcept(data);
}

function buildConcept(data) {
  document.title = `${data.title} — V2 — Structural cosmological model`;

  // ---- Squelette ----
  document.body.innerHTML = `
    <header class="v2-topbar">
      <a href="index.html" class="v2-back">← V2</a>
      <div class="v2-plan-label">
        <span class="v2-plan-tag" id="c-tag"></span>
        <strong id="c-title"></strong>
        <span class="v2-plan-sub" id="c-sub"></span>
      </div>
    </header>
    <main class="from0-main">
      <div class="from0-left">
        <section class="from0-reader" id="reader" tabindex="0" aria-label="RSVP reader">
          <span class="from0-reader-tag">RSVP · hover to control</span>
          <div class="rsvp-word" id="rsvp-word"></div>
          <div class="rsvp-controls">
            <button type="button" class="rsvp-btn" id="rsvp-toggle">Pause</button>
            <label class="rsvp-speed">
              <input type="range" id="rsvp-speed" min="80" max="600" step="10" value="150" aria-label="Reading speed">
              <span id="rsvp-wpm">150 wpm</span>
            </label>
            <span class="rsvp-progress" id="rsvp-progress">0 / 0</span>
          </div>
        </section>
        <section class="from0-fulltext">
          <h2>Full text</h2>
          <div class="from0-text" id="from0-text"></div>
          <p class="from0-note" id="c-note"></p>
        </section>
      </div>
      <aside class="from0-right">
        <div class="from0-images" id="from0-images">
          <span class="from0-images-tag">Images</span>
          <div class="from0-images-controls">
            <button type="button" class="img-btn" id="img-pause" title="Pause / play images">Pause</button>
            <button type="button" class="img-btn" id="img-max" title="Maximize">⤢ Maximize</button>
          </div>
          <div class="from0-images-empty" id="from0-images-empty" hidden>Images will fade in here.</div>
        </div>
      </aside>
    </main>
  `;

  // ---- En-tête : badge notation + titre + sous-titre + note ----
  document.getElementById('c-tag').textContent = data.tag;
  document.getElementById('c-title').textContent = data.title;
  document.getElementById('c-sub').textContent = data.sub ? `— ${data.sub}` : '';
  document.getElementById('c-note').textContent = data.note || '';

  const phrases = data.phrases || [];
  const images = data.images || [];

  // ---- Texte complet : une phrase par ligne ----
  const textBox = document.getElementById('from0-text');
  for (const phrase of phrases) {
    const p = document.createElement('p');
    p.textContent = phrase;
    textBox.appendChild(p);
  }

  initReader(phrases);
  initImages(images);
}

// =====================================================
// Lecteur RSVP : phrase grisée, mot courant éclairé,
// confirmation de fin de phrase, boucle ambiante.
// =====================================================
function initReader(phrases) {
  const wordEl = document.getElementById('rsvp-word');
  const toggleBtn = document.getElementById('rsvp-toggle');
  const speedInput = document.getElementById('rsvp-speed');
  const wpmLabel = document.getElementById('rsvp-wpm');
  const progressEl = document.getElementById('rsvp-progress');

  if (phrases.length === 0) {
    toggleBtn.disabled = true;
    return;
  }

  let wpm = Number(speedInput.value);   // lent par défaut : 150
  let si = 0;       // index de phrase
  let wi = 0;       // index de mot dans la phrase
  let toks = [];    // spans de mots de la phrase courante
  let playing = false;
  let timer = null;

  function delayFor(word) {
    const base = 60000 / wpm;
    let d = base;
    if (/[.,;:!?→]$/.test(word)) d += base * 0.9;  // respiration à la ponctuation
    if (word.length > 8) d += base * 0.35;
    return d;
  }
  function renderSentence() {
    wordEl.innerHTML = '';
    const parts = phrases[si].split(/\s+/).filter(Boolean);
    toks = parts.map((w) => {
      const span = document.createElement('span');
      span.className = 'rsvp-tok';
      span.textContent = w;
      wordEl.appendChild(span);
      wordEl.appendChild(document.createTextNode(' '));
      return span;
    });
    progressEl.textContent = `${si + 1} / ${phrases.length}`;
  }
  function highlight() {
    toks.forEach((s, k) => s.classList.toggle('current', k === wi));
  }
  function advanceSentence() {
    si = (si + 1) % phrases.length;
    wi = 0;
    renderSentence();
    step();
  }
  function confirmSentence() {
    // balayage rapide : toute la phrase tombe en surbrillance (~validation de l'idée)
    const stagger = 45;
    toks.forEach((s, k) => setTimeout(() => s.classList.add('lit'), k * stagger));
    // pause ~1,5 s sur la phrase éclairée, puis la suivante
    timer = setTimeout(advanceSentence, 1500);
  }
  function step() {
    if (!playing) return;
    if (wi >= toks.length) { advanceSentence(); return; }  // reprise après confirm
    highlight();
    wi += 1;
    if (wi >= toks.length) { confirmSentence(); return; }  // dernier mot atteint
    timer = setTimeout(step, delayFor(toks[wi - 1].textContent));
  }
  function setPlaying(on) {
    playing = on;
    toggleBtn.textContent = on ? 'Pause' : 'Play';
    if (on) { step(); } else { clearTimeout(timer); }
  }

  toggleBtn.addEventListener('click', () => setPlaying(!playing));
  speedInput.addEventListener('input', () => {
    wpm = Number(speedInput.value);
    wpmLabel.textContent = `${wpm} wpm`;
  });

  renderSentence();
  setPlaying(true);   // démarre lentement, discret
}

// =====================================================
// Images en fondu (crossfade ambiant) + pause / maximize.
// =====================================================
function initImages(images) {
  const stage = document.getElementById('from0-images');
  const empty = document.getElementById('from0-images-empty');
  const imgPauseBtn = document.getElementById('img-pause');
  const imgMaxBtn = document.getElementById('img-max');

  if (images.length === 0) {
    empty.hidden = false;
    imgPauseBtn.disabled = true;
  } else {
    const imgEls = images.map((src, n) => {
      const im = document.createElement('img');
      im.src = src;
      im.alt = '';
      if (n === 0) im.classList.add('active');
      stage.appendChild(im);
      return im;
    });
    let ci = 0;
    let imgTimer = null;
    const showNext = () => {
      imgEls[ci].classList.remove('active');
      ci = (ci + 1) % imgEls.length;
      imgEls[ci].classList.add('active');
    };
    const startImages = () => { if (!imgTimer) imgTimer = setInterval(showNext, 4500); };
    const stopImages = () => { clearInterval(imgTimer); imgTimer = null; };

    startImages();

    imgPauseBtn.addEventListener('click', () => {
      if (imgTimer) { stopImages(); imgPauseBtn.textContent = 'Play'; }
      else { startImages(); imgPauseBtn.textContent = 'Pause'; }
    });
  }

  // Maximize : plein écran du panneau (Échap pour sortir)
  imgMaxBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      stage.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });
  document.addEventListener('fullscreenchange', () => {
    imgMaxBtn.textContent = document.fullscreenElement ? '⤡ Close' : '⤢ Maximize';
  });
}
