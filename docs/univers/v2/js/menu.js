// =====================================================
// V2 — Cartes de menu (galerie réutilisable)
// Helpers partagés : rendu de cartes catégorie / lecture.
// Convention d'URL : category-<key>.html  ·  concept-<key>.html
// =====================================================

import { CONCEPTS } from './concepts.js';
import { CATEGORIES } from './categories.js';
import { pick } from './i18n.js';

function buildCard({ href, tag, title, blurb, cover, isCategory }) {
  const a = document.createElement('a');
  a.className = 'concept-card' + (isCategory ? ' is-category' : '');
  a.href = href;
  a.innerHTML = `
    <span class="concept-card-media">${cover ? `<img src="${cover}" alt="" loading="lazy">` : ''}</span>
    <span class="concept-card-veil"></span>
    <span class="concept-card-body">
      <span class="concept-card-tag"></span>
      <span class="concept-card-title"></span>
      <span class="concept-card-blurb"></span>
    </span>
  `;
  a.querySelector('.concept-card-tag').textContent = tag || '';
  a.querySelector('.concept-card-title').textContent = title || '';
  a.querySelector('.concept-card-blurb').textContent = blurb || '';
  return a;
}

export function renderCategories(mount, keys) {
  if (!mount) return;
  for (const key of keys) {
    const cat = CATEGORIES[key];
    if (!cat) continue;
    let cover = cat.cover;
    if (!cover && cat.subs && cat.subs.length) {
      const first = CONCEPTS[cat.subs[0]];
      cover = first && first.images && first.images[0];
    }
    mount.appendChild(
      buildCard({
        href: `category-${key}.html`,
        tag: pick(cat.tag),
        title: pick(cat.title),
        blurb: pick(cat.blurb),
        cover,
        isCategory: true,
      })
    );
  }
}

export function renderConcepts(mount, keys) {
  if (!mount) return;
  for (const key of keys) {
    const c = CONCEPTS[key];
    if (!c) continue;
    const cover = c.cover || (c.images && c.images[0]) || '';
    mount.appendChild(
      buildCard({
        href: `concept-${key}.html`,
        tag: pick(c.tag),
        title: pick(c.title),
        blurb: pick(c.blurb) || pick(c.sub) || '',
        cover,
      })
    );
  }
}
