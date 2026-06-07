// =====================================================
// V2 — Accueil : rend les grandes catégories dans #concept-menu.
// =====================================================

import { renderCategories } from './menu.js';
import { CATEGORIES } from './categories.js';

renderCategories(document.getElementById('concept-menu'), Object.keys(CATEGORIES));
