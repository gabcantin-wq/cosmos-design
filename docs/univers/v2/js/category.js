// =====================================================
// V2 — Page-catégorie : lit body.dataset.category, charge la
// catégorie dans categories.js et affiche ses sous-lectures
// en galerie de cartes. Voir css/v2.css (.concept-menu).
// =====================================================

import { categoryByKey } from './categories.js';
import { renderConcepts } from './menu.js';
import { pick, currentLang } from './i18n.js';

const key = document.body.dataset.category;
const cat = categoryByKey(key);

if (!cat) {
  document.body.innerHTML =
    '<p style="padding:6rem 2rem;color:#a8acbf">Unknown category: ' + (key || '(none)') + '</p>';
} else {
  const title = pick(cat.title);
  const suffix =
    currentLang() === 'fr' ? 'V2 — Modèle cosmologique structurel' : 'V2 — Structural cosmological model';
  document.title = `${title} — ${suffix}`;
  document.body.innerHTML = `
    <header class="v2-topbar">
      <a href="index.html" class="v2-back">← V2</a>
      <div class="v2-plan-label">
        <span class="v2-plan-tag" id="cat-tag"></span>
        <strong id="cat-title"></strong>
      </div>
    </header>
    <main class="v2-home-main">
      <section class="v2-home-card">
        <h1 id="cat-h1"></h1>
        <p class="v2-home-lede" id="cat-blurb"></p>
        <div class="concept-menu" id="concept-menu"></div>
      </section>
    </main>
  `;
  document.getElementById('cat-tag').textContent = pick(cat.tag) || '';
  document.getElementById('cat-title').textContent = title;
  document.getElementById('cat-h1').textContent = title;
  document.getElementById('cat-blurb').textContent = pick(cat.blurb) || '';
  renderConcepts(document.getElementById('concept-menu'), cat.subs || []);
  requestAnimationFrame(() => document.body.classList.add('v2-ready'));
}
