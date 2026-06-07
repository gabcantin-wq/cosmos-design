// =====================================================
// V2 — Manifeste des plans
// Source unique de vérité pour l'enchaînement et la nav.
// L'ordre du tableau EST le parcours linéaire.
// planBalle est transverse (hors séquence) : sequence: false.
// `built: true` = la scène existe ; sinon la nav la grise « à venir ».
// =====================================================

export const PLANS = [
  {
    code: 'planT',
    file: 'plant.html',
    built: true,
    sequence: true,
    titleFr: "L'axe temporel circulaire",
    titleEn: 'The circular time axis',
  },
  {
    code: 'planGenèse',
    file: 'plangenese.html',
    built: false,
    sequence: true,
    titleFr: 'De t=0 à t=x',
    titleEn: 'From t=0 to t=x',
  },
  {
    code: 'plan4df',
    file: 'plan4df.html',
    built: false,
    sequence: true,
    titleFr: 'La fonction génératrice',
    titleEn: 'The generative function',
  },
  {
    code: 'plan4d',
    file: 'plan4d.html',
    built: false,
    sequence: true,
    titleFr: "Profondeur d'adressage",
    titleEn: 'Addressing depth',
  },
  {
    code: 'planCharge',
    file: 'plancharge.html',
    built: false,
    sequence: true,
    titleFr: 'La charge structurelle',
    titleEn: 'Structural charge',
  },
  {
    code: 'planForces',
    file: 'planforces.html',
    built: false,
    sequence: true,
    titleFr: 'Particules et forces',
    titleEn: 'Particles and forces',
  },
  {
    code: 'planElectron',
    file: 'planelectron.html',
    built: false,
    sequence: true,
    titleFr: "L'électron lu à travers le modèle",
    titleEn: 'The electron read through the model',
  },
  {
    code: 'planChaîne',
    file: 'planchaine.html',
    built: false,
    sequence: true,
    titleFr: 'Le modèle en quelques maillons',
    titleEn: 'The model in a few links',
  },
  {
    code: 'planBalle',
    file: 'planballe.html',
    built: false,
    sequence: false,
    titleFr: "L'analogie de la balle de tennis",
    titleEn: 'The tennis-ball analogy',
  },
];

// Le parcours linéaire : seulement les plans marqués sequence.
export const SEQUENCE = PLANS.filter((p) => p.sequence);

export function planByCode(code) {
  return PLANS.find((p) => p.code === code) || null;
}
