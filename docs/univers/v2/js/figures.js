// =====================================================
// V2 — Figures annotées
// Une figure = une image + des étapes (schéma + texte ancré).
//   image : chemin (relatif depuis docs/univers/v2/)
//   tag   : badge notation
//   title : titre
//   steps : étapes révélées une à une. Chaque étape :
//     kind  : 'point' | 'arrow' | 'slope' | 'observer'
//     x, y  : cible sur l'image, en % (0–100)
//     tx,ty : position du texte, en % (défaut : décalage de la cible)
//     text  : explication
//     angle, length : pour 'slope' (degrés ; longueur en % de largeur)
//
// Coordonnées en % → ancrage persistant quelle que soit la taille.
// Astuce de placement : touche P sur la page, puis clic sur l'image
// → les coordonnées % s'affichent (et passent dans la console).
// =====================================================

export const FIGURES = {
  demo: {
    tag: 'fig',
    title: 'Annotated figure — demo',
    image: '../images/D3_observer_tx_lire_c.png',
    steps: [
      { kind: 'observer', x: 18, y: 70, tx: 24, ty: 88, text: 'Observer — reads from t=x. (placeholder)' },
      { kind: 'arrow', x: 42, y: 46, tx: 62, ty: 20, text: 'Arrow — the addressing of e. (placeholder)' },
      { kind: 'slope', x: 66, y: 54, angle: -22, length: 26, tx: 82, ty: 70, text: 'Slope — addressing depth. (placeholder)' },
      { kind: 'point', x: 82, y: 30, tx: 86, ty: 12, text: 'Point — a moment t=x. (placeholder)' },
    ],
  },
};

export function figureByKey(key) {
  return FIGURES[key] || null;
}
