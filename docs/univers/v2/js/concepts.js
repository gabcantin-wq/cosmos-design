// =====================================================
// V2 — Fiches de concepts (sous-lectures)
// Une entrée = une lecture, résumée par :
//   tag      : le « vecteur de caractères » (notation) — badge + identifiant
//   title    : titre lisible
//   sub      : sous-titre court (optionnel)
//   blurb    : explication courte (carte du menu, révélée au survol)
//   category : clé de la catégorie parente (voir categories.js)
//   note     : note de bas du texte (optionnel)
//   phrases  : phrases clés, lues en RSVP + affichées en entier (anglais ; FR plus tard)
//   images   : chemins d'images affichées en fondu (relatifs depuis docs/univers/v2/)
//   cover    : image de couverture du menu (optionnel ; défaut = images[0])
//
// Ajouter une lecture = une entrée ici + une page concept-<key>.html
// + l'ajouter aux `subs` de sa catégorie dans categories.js.
// =====================================================

export const CONCEPTS = {
  // ---------- Catégorie : Time ----------
  t0: {
    tag: 't=0',
    title: 'From 0',
    category: 'time',
    sub: 'two readings at once',
    blurb: 'Before time exists. Only energy e — "while".',
    note: 'Opening sequence — more key phrases to come.',
    phrases: [
      'A moment in time is t=x.',
      't=0 is before time exists.',
      'But "before" is impossible without time.',
      'So t=0 is both "before" and "after", it is "while".',
      'At t=0, only one thing can exist: energy, e.',
      'If there is a beginning, there is a first moment: t=0+1.',
      'After the first moment, there is t=0+2.',
      'Space-time is not flowing, because of t=0.',
      'It exists at t=T → the summation of all t=x.',
      'A constant T lets t=0 manifest in t=x, as e.',
    ],
    images: [
      '../images/A1_t0p1_adressage_initial.png',
      '../images/A7_tx_manifestations_observables.png',
      '../images/C6_T_totalite_constante.png',
    ],
  },

  from1to2: {
    tag: 't=0+1 → +2',
    title: 'From 1 to 2',
    category: 'time',
    sub: 'the first moment to the second',
    blurb: 'The first free addressing of e, and the first return.',
    note: 'Opening sequence — more to come.',
    phrases: [
      't=0+1 is the addressing of e into t=x.',
      'With nothing preceding it, this addressing of e is free.',
      'Some outgoing e ("up") are sent back to t=0 ("down") at t=0+2, closing the cycle.',
      'Between the first moment and the second, three perpendicular dimensional vectors become available.',
      'The photon has no "down", so it exists at t=0, "while".',
      'c is the appearance of travel.',
    ],
    images: [
      '../images/A2_t0p1_vers_t0p2_immersive.png',
      '../images/A3_t0p1_vers_t0p2_didactique.png',
      '../images/A4_t0p2_premier_retour.png',
      '../images/A5_t0p2_vers_t0p3_tissages_fermes.png',
    ],
  },

  txm1: {
    tag: 't=x-1',
    title: 'Before x',
    category: 'time',
    sub: 'the moment before observation',
    blurb: 'The instant just before observation.',
    note: 'Sequence to be dictated.',
    phrases: [
      't=x-1 is the moment before x.',
    ],
    images: [
      '../images/C7_4dfx_lecture_profondeur.png',
      '../images/D5_electron_retour_probabiliste.png',
    ],
  },

  tx: {
    tag: 't=x',
    title: 'The observed moment',
    category: 'time',
    sub: 'where observation happens',
    blurb: 'The moment where the universe is observed.',
    note: 'Sequence to be dictated.',
    phrases: [
      't=x is the observed moment.',
    ],
    images: [
      '../images/A7_tx_manifestations_observables.png',
      '../images/D3_observer_tx_lire_c.png',
      '../images/C2_electron_noyau_4dfx.png',
    ],
  },

  // ---------- Catégorie : 4df(x) ----------
  blackhole: {
    tag: 'BH',
    title: 'Black hole',
    category: '4dfx',
    sub: 'maximal addressing depth',
    blurb: 'Where addressing depth becomes inescapable.',
    note: 'Sequence to be dictated.',
    phrases: [
      'A black hole is maximal addressing depth.',
    ],
    images: [
      '../images/EXPLO-gravite.png',
    ],
  },

  light: {
    tag: 'c',
    title: 'Light',
    category: '4dfx',
    sub: 'addressing with no down',
    blurb: 'A photon with no "down" — pure manifestation.',
    note: 'Sequence to be dictated.',
    phrases: [
      'Light is addressing with no "down".',
    ],
    images: [
      '../images/B5_emission_photon_4dfx.png',
    ],
  },

  movement: {
    tag: 'Δx',
    title: 'Movement',
    category: '4dfx',
    sub: 'change of address',
    blurb: 'Movement as a change of address in t=x.',
    note: 'Sequence to be dictated.',
    phrases: [
      'Movement is a change of address.',
    ],
    images: [
      '../images/C4_force_angulaire.png',
    ],
  },

  timedilation: {
    tag: 'Δt',
    title: 'Time dilation',
    category: '4dfx',
    sub: 'depth changes the rate',
    blurb: 'How addressing depth changes the observed rate.',
    note: 'Sequence to be dictated.',
    phrases: [
      'Time dilation comes from addressing depth.',
    ],
    images: [
      '../images/EXPLO-dilatation-temps-1.png',
    ],
  },

  observation: {
    tag: 'obs',
    title: 'Observation',
    category: '4dfx',
    sub: 'reading at t=x',
    blurb: 'What it means to read e at t=x.',
    note: 'Sequence to be dictated.',
    phrases: [
      'Observation is reading e at t=x.',
    ],
    images: [
      '../images/D3_observer_tx_lire_c.png',
    ],
  },
};

export function conceptByKey(key) {
  return CONCEPTS[key] || null;
}
