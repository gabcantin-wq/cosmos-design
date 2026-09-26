// =====================================================
// V2 — Fiches de concepts (sous-lectures)
// Une entrée = une lecture, résumée par :
//   tag      : le « vecteur de caractères » (notation) — badge + identifiant
//   title    : titre lisible
//   sub      : sous-titre court (optionnel)
//   blurb    : explication courte (carte du menu, révélée au survol)
//   category : clé de la catégorie parente (voir categories.js)
//   note     : note de bas du texte (optionnel)
//   phrases  : phrases clés, lues en RSVP + affichées en entier
//
// Tout champ de texte accepte deux formes :
//   title: 'From 0'                          → une seule langue
//   title: { fr: 'Depuis 0', en: 'From 0' }  → bilingue, résolu par js/i18n.js
// Le FR est canonique (le corpus V2 est en français) ; l'EN est traduit.
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
      '../images/C7_4dfx_lecture_profondeur.png',
      '../images/D2_plan_sequentiel_complet.png',
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
      '../images/C7_4dfx_lecture_profondeur.png',
      '../images/D3_observer_tx_lire_c.png',
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

  // ---------- Catégorie : le sillon (corpus V2, septembre 2026) ----------
  // Ces cinq lectures viennent des séances de juillet et septembre 2026.
  // Le FR est canonique (le corpus V2 est en français) ; l'EN est traduit.

  sillon: {
    tag: 'sillon',
    title: { fr: 'Le sillon', en: 'The furrow' },
    category: 'sillon',
    sub: { fr: 'la masse, c\'est le chemin', en: 'mass is the path' },
    blurb: {
      fr: 'Le corridor tenu qu\'emprunte l\'adressage de e. La masse, c\'est le sillon.',
      en: 'The held corridor the addressing of e travels. Mass is the furrow.',
    },
    note: {
      fr: 'Acquis — validé par l\'auteur le 2026-09-01 (A1, A5, A6). Sillon ≠ sillage.',
      en: 'Acquired — validated by the author on 2026-09-01 (A1, A5, A6).',
    },
    phrases: {
      fr: [
        'Le sillon est le corridor tenu qu\'emprunte l\'adressage de e.',
        'Il est pré-inscrit en t=x−1, avant que rien n\'arrive.',
        'Libre : le sillon est le chemin, il existe avant l\'arrivée.',
        'Embouteillé : il est tenu par la proximité des sillons de quarks.',
        'La masse, c\'est le sillon.',
        'Le déplacement, c\'est son résultat.',
        'Un gros sillon — un quark immobile — c\'est une grosse masse.',
        'Le filament n\'est pas une balle qui suit un chemin : c\'est le chemin.',
        'Il est inscrit d\'un bloc.',
        'La membrane lit une trajectoire entière, et voit une probabilité.',
        'Le nuage probabiliste est un artefact de lecture.',
        'Le sillon n\'est pas le sillage : l\'un est le chemin tenu, l\'autre la trace laissée.',
      ],
      en: [
        'The furrow is the held corridor the addressing of e travels.',
        'It is pre-inscribed at t=x−1, before anything arrives.',
        'Free: the furrow is the path, it exists before the arrival.',
        'Bottled: it is held by the proximity of the quark furrows.',
        'Mass is the furrow.',
        'Movement is its result.',
        'A large furrow — a motionless quark — is a large mass.',
        'The filament is not a ball following a path: it is the path.',
        'It is inscribed as one block.',
        'The membrane reads an entire trajectory, and sees a probability.',
        'The probabilistic cloud is an artefact of reading.',
        'The furrow is not the wake: one is the held path, the other the trace left behind.',
      ],
    },
    images: [
      '../images/C2_electron_noyau_4dfx.png',
      '../images/D4_electron_noyau_balle_tennis.png',
      '../images/D5_electron_retour_probabiliste.png',
    ],
  },

  eventail: {
    tag: { fr: 'éventail', en: 'fan' },
    title: { fr: 'L\'éventail et la lame', en: 'The fan and the blade' },
    category: 'sillon',
    sub: { fr: 'la géométrie du coût', en: 'the geometry of cost' },
    blurb: {
      fr: 'Ouvrir une perpendiculaire coûte le rapport d\'espace occupé entre ouvert et fermé.',
      en: 'Opening a perpendicular costs the ratio of occupied space, open to closed.',
    },
    note: {
      fr: 'Acquis (A10, A11, A12). L\'angle de chaque éventail — π/2 ou π — reste à trancher par l\'auteur ; le facteur 2 en dépend.',
      en: 'Acquired (A10–A12). The angle of each fan — π/2 or π — is still to be settled by the author.',
    },
    phrases: {
      fr: [
        'Un lien-énergie a des dimensions : une, deux ou trois perpendiculaires.',
        'Une perpendiculaire, c\'est un vecteur : le filament.',
        'Deux, c\'est une surface : le tissu.',
        'Trois, c\'est un volume : le motton.',
        'Ce sont trois régimes d\'un seul nuage — celui de l\'électron.',
        'Le muon et le tau n\'ont pas de nuage à eux.',
        'Ouvrir la deuxième perpendiculaire, c\'est ouvrir un éventail.',
        'Le volume n\'a pas doublé : il a suivi le ratio de la forme.',
        'Il y a deux éventails par cycle : un IN, un OUT.',
        'La lame est la surface d\'un éventail fermé : une longueur, une largeur.',
        'La largeur n\'appartient pas à l\'objet : c\'est l\'espace que la population lui laisse.',
        'La lame propre — X — se calcule dans 4df(x), pas dans l\'atome.',
        'X est inconnue. C\'est l\'équation qui manque.',
      ],
      en: [
        'An energy-link has dimensions: one, two or three perpendiculars.',
        'One perpendicular is a vector: the filament.',
        'Two is a surface: the fabric.',
        'Three is a volume: the clump.',
        'These are three regimes of a single cloud — the electron\'s.',
        'The muon and the tau have no cloud of their own.',
        'Opening the second perpendicular opens a fan.',
        'The volume did not double: it followed the ratio of the shape.',
        'There are two fans per cycle: one IN, one OUT.',
        'The blade is the surface of a closed fan: a length, a width.',
        'The width does not belong to the object: it is the space the population leaves it.',
        'The proper blade — X — is computed inside 4df(x), not inside the atom.',
        'X is unknown. It is the missing equation.',
      ],
    },
    images: [
      '../images/C7_4dfx_lecture_profondeur.png',
      '../images/D1_dualite_aller_retour.png',
      '../images/03_tissage_couches_transversales.png',
    ],
  },

  cout: {
    tag: { fr: 'coût', en: 'cost' },
    title: { fr: 'Le coût de retour', en: 'The cost of return' },
    category: 'sillon',
    sub: { fr: 'ce que T ne ramène pas', en: 'what T does not bring back' },
    blurb: {
      fr: 'Ce que le IN a perdu en OUT. Masse et durée de vie lisent le même volume deux fois.',
      en: 'What the IN lost on the way OUT. Mass and lifetime read one volume twice.',
    },
    note: {
      fr: 'Acquis (A22 à A28). Le chiffrage attend X : la flèche B garde sa forme, pas ses nombres.',
      en: 'Acquired (A22–A28). The numbers await X: arrow B keeps its form, not its figures.',
    },
    phrases: {
      fr: [
        'Dans t=x+1, toutes les perpendiculaires sont tenues entières.',
        'T, lui, n\'en porte qu\'une seule.',
        'Il ne ramène que le retour.',
        'Ce que T inscrit du tissu, c\'est donc ce que le IN a perdu en OUT.',
        'C\'est le coût de retour.',
        'Il se compte sur les variables de 4df(x) : trois vecteurs, deux lames.',
        'Le sillon tenu ne peut pas, par nature, avoir deux perpendiculaires.',
        'Il existe donc dans T une dégradation par nature, quantifiable.',
        'Elle est inscrite. Ce n\'est pas une érosion.',
        'Le coût du lien fixe la masse ; la tenue sur T en découle.',
        'La durée de vie est une sortie du modèle, jamais un ingrédient.',
        'Masse et durée de vie lisent un seul volume de dégradation, deux fois.',
        'La masse par lecture à t=x ; la durée par étendue sur T.',
        'Ça dépend comment c\'est mesuré.',
      ],
      en: [
        'At t=x+1, every perpendicular is held whole.',
        'T itself carries only one.',
        'It brings back the return, and nothing else.',
        'What T inscribes of the fabric is therefore what the IN lost on the way OUT.',
        'That is the cost of return.',
        'It counts on the variables of 4df(x): three vectors, two blades.',
        'A held furrow cannot, by nature, have two perpendiculars.',
        'So there exists in T a degradation by nature, and it can be counted.',
        'It is inscribed. It is not erosion.',
        'The cost of the link fixes the mass; how long T holds it follows.',
        'Lifetime is an output of the model, never an ingredient.',
        'Mass and lifetime read a single volume of degradation, twice.',
        'Mass by reading at t=x; duration by extent over T.',
        'It depends how it is measured.',
      ],
    },
    images: [
      '../images/D1_dualite_aller_retour.png',
      '../images/C7_4dfx_lecture_profondeur.png',
      '../images/D2_plan_sequentiel_complet.png',
    ],
  },

  deltas: {
    tag: 'Δ',
    title: { fr: 'Les quatre deltas', en: 'The four deltas' },
    category: 'sillon',
    sub: { fr: 'les forces sur un seul axe', en: 'the forces on a single axis' },
    blurb: {
      fr: 'Un delta : où le OUT aurait dû revenir, et où il revient. Les quatre forces en sont quatre lectures.',
      en: 'A delta: where the OUT should have returned, and where it does. The four forces read it four ways.',
    },
    note: {
      fr: 'Acquis — séance du 2026-07-10. Deux conséquences gratuites : le principe d\'équivalence et l\'impossibilité du monopôle.',
      en: 'Acquired — session of 2026-07-10. Two free consequences: equivalence, and no magnetic monopole.',
    },
    phrases: {
      fr: [
        'Un delta est un écart.',
        'L\'écart entre l\'endroit où le OUT aurait dû revenir, à c,',
        'et l\'endroit où il revient réellement.',
        'La force forte est un delta de proximité forcée.',
        'La force faible est un delta de reconfiguration — une perpendiculaire perdue.',
        'L\'électromagnétisme est un décalage du OUT.',
        'La gravité est un déplacement bloqué en totalité.',
        'Ce ne sont pas quatre forces : c\'est un seul écart, lu quatre fois.',
        'Deux choses tombent gratuitement.',
        'La masse inerte et la masse grave sont le même delta — elles ne se ressemblent pas, elles sont la même chose.',
        'Et un delta a toujours deux bouts : le monopôle magnétique est structurellement impossible.',
        'La température est la même chose, lue en population.',
        'Une statistique de deltas désordonnés.',
        'Le photon est le seul objet sans delta.',
        'C\'est pourquoi il est le seul sans température propre.',
      ],
      en: [
        'A delta is a gap.',
        'The gap between where the OUT should have returned, at c,',
        'and where it actually returns.',
        'The strong force is a delta of forced proximity.',
        'The weak force is a delta of reconfiguration — one perpendicular lost.',
        'Electromagnetism is a shift of the OUT.',
        'Gravity is displacement blocked in full.',
        'These are not four forces: it is one gap, read four times.',
        'Two things fall out for free.',
        'Inertial mass and gravitational mass are the same delta — they do not merely match, they are one.',
        'And a delta always has two ends: the magnetic monopole is structurally impossible.',
        'Temperature is the same thing, read across a population.',
        'A statistic of disordered deltas.',
        'The photon is the only object with no delta.',
        'Which is why it is the only one with no temperature of its own.',
      ],
    },
    images: [
      '../images/B2_quatre_forces.png',
      '../images/C4_force_angulaire.png',
      '../images/C1_charge_fermions.png',
    ],
  },

  trio: {
    tag: { fr: 'trio', en: 'trio' },
    title: { fr: 'Le trio du proton', en: 'The proton trio' },
    category: 'sillon',
    sub: { fr: 'et les sillages d\'existence', en: 'and the wakes of existence' },
    blurb: {
      fr: 'Le proton est un trio qui cycle sur t=x, t=x+1, t=x+2 — et la troisième position est le lepton.',
      en: 'The proton is a trio cycling over t=x, t=x+1, t=x+2 — and the third position is the lepton.',
    },
    note: {
      fr: 'Acquis le 2026-09-02 (A38 à A41). « Le proton est le sillon à 3 perpendiculaires » (A37) est en attente, à la demande de l\'auteur.',
      en: 'Acquired 2026-09-02 (A38–A41). "The proton is the 3-perpendicular furrow" (A37) is on hold at the author\'s request.',
    },
    phrases: {
      fr: [
        'Les sillons arrivent en trios.',
        'Sur t=x, t=x+1, t=x+2.',
        'Le proton est un trio dans T qui cycle.',
        'UP à t=x : le IN.',
        'DOWN à t=x+1 : le OUT.',
        'Retour à t=x+2.',
        'Et la troisième position n\'est pas un quark.',
        'C\'est le lepton, dans son nuage.',
        'Le e des leptons affecte t=x ; le e du hadron affecte t=x+1.',
        'En réalité, c\'est la même chose.',
        'Un seul e, deux colonnes.',
        'Les hadrons sont les sillages d\'existence des leptons.',
        'On ne mesure pas un ensemble de trucs différents.',
        'On mesure un état sur une transition constante.',
        'Le proton, c\'est juste un sillon — pour les leptons.',
        'Les hadrons sont des corridors ; les leptons sont des trajets.',
        'Ce n\'est pas une comparaison : c\'est le corridor et son passager.',
      ],
      en: [
        'Furrows arrive in trios.',
        'Over t=x, t=x+1, t=x+2.',
        'The proton is a trio in T that cycles.',
        'UP at t=x: the IN.',
        'DOWN at t=x+1: the OUT.',
        'Return at t=x+2.',
        'And the third position is not a quark.',
        'It is the lepton, in its cloud.',
        'The e of the leptons affects t=x; the e of the hadron affects t=x+1.',
        'In truth, it is the same thing.',
        'One e, two columns.',
        'Hadrons are the wakes of existence that leptons leave in T.',
        'We are not measuring a set of different things.',
        'We are measuring a state on a constant transition.',
        'The proton is just a furrow — for the leptons.',
        'Hadrons are corridors; leptons are journeys.',
        'It is not a comparison: it is the corridor and its passenger.',
      ],
    },
    images: [
      '../images/B4_quarks_synchronisation_proton.png',
      '../images/V2-A5_tx_manifestations.png',
      '../images/A7_tx_manifestations_observables.png',
    ],
  },
};

export function conceptByKey(key) {
  return CONCEPTS[key] || null;
}
