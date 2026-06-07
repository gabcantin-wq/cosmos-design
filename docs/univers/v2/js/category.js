// =====================================================
// V2 — Page-catégorie : lit body.dataset.category, charge la
// catégorie dans categories.js et affiche ses sous-lectures
// en galerie de cartes. Voir css/v2.css (.concept-menu).
// =====================================================

import { categoryByKey } from './categories.js';
import { renderConcepts } from './menu.js';

const key = document.body.dataset.category;
const cat = categoryByKey(key);

if (!cat) {
  document.body.innerHTML =
    '<p style="padding:6rem 2rem;color:#a8acbf">Unknown category: ' + (key || '(none)') + '</p>';
} else {
  document.title = `${cat.title} — V2 — Structural cosmological model`;
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
  document.getElementById('cat-tag').textContent = cat.tag || '';
  document.getElementById('cat-title').textContent = cat.title || '';
  document.getElementById('cat-h1').textContent = cat.title || '';
  document.getElementById('cat-blurb').textContent = cat.blurb || '';
  renderConcepts(document.getElementById('concept-menu'), cat.subs || []);
  requestAnimationFrame(() => document.body.classList.add('v2-ready'));
}
