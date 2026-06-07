// =====================================================
// V2 — Grandes catégories (niveau accueil)
// Une catégorie regroupe des sous-lectures (clés de concepts.js).
//   tag    : badge notation
//   title  : titre lisible
//   blurb  : explication courte (carte, révélée au survol)
//   cover  : image de couverture du menu (optionnel ; défaut = 1re image du 1er sub)
//   subs   : clés des lectures, dans l'ordre
//
// Ajouter une catégorie = une entrée ici + une page category-<key>.html.
// =====================================================

export const CATEGORIES = {
  time: {
    tag: 't',
    title: 'Time',
    blurb: 'From t=0 to t=x — how a single e becomes an observed moment.',
    cover: '../images/A1_t0p1_adressage_initial.png',
    subs: ['t0', 'from1to2', 'txm1', 'tx'],
  },

  '4dfx': {
    tag: '4df(x)',
    title: 'The generative function',
    blurb: 'How 4df(x) shapes what is observed: gravity, light, movement, time, observation.',
    cover: '../images/C7_4dfx_lecture_profondeur.png',
    subs: ['blackhole', 'light', 'movement', 'timedilation', 'observation'],
  },
};

export function categoryByKey(key) {
  return CATEGORIES[key] || null;
}
