# 08 — Visual Brief V2 (specs des 19 images, opérationnel)

**Date** : 2026-05-12
**Statut** : livrable étape B. Document opérationnel pour la génération des images V2 via ChatGPT.

## Comment utiliser ce document

**Constat empirique (2026-05-12) : GPT ne tient pas l'enchaînement d'images dans une même conversation.** Il dérive après la première ou ne fait pas la suivante. Workflow adopté : **1 nouvelle conversation = 1 image V2.** Chaque conversation est jetable.

### Recette par image (workflow distinct)

À répéter pour chaque image V2 :

1. **Ouvre une nouvelle conversation ChatGPT** (idéalement avec accès image gen)
2. **Upload `images_catalog.png`** (le catalogue des 28 V1, comme référence visuelle)
3. **Colle dans la même requête** : le **PRÉAMBULE COMPACT** ci-dessous + le **« Prompt prêt-à-coller »** de la fiche image (les deux ensemble dans un seul message)
4. **Récupère l'image**, valide ou corrige (corrections dans la même conversation, c'est l'enchaînement d'IMAGES qui ne marche pas, pas l'itération sur une image)
5. **Sauve l'image validée** dans `docs/univers/images/v2/<nom>.png`
6. **Ferme la conversation**, passe à la suivante

### PRÉAMBULE COMPACT (à coller avant chaque prompt d'image)

```
=== STYLE V2 — modèle cosmologique structurel de Gabriel Cantin ===

Catalogue de référence : voir images_catalog.png uploadé. Style anchor : 
A7_tx_manifestations_observables (cosmique, sombre, painterly).

Style obligatoire pour toute image V2 :
- Fond navy/noir profond #0a0a0f, étoiles fines, ambiance contemplative
- Palette : orange #ffb74d (corridors 4df(x), photons, énergie), 
  cyan/bleu #82b1ff (retours, atomes, neutrinos), violet 
  diffus (sillages, énergie noire), blanc-bleu (e)
- Sphères lumineuses douces (effet plasma), filaments fins, 
  entonnoirs/funnels comme métaphore récurrente, aération marquée

Règle non-négociable : AUCUN texte dans l'image (pas de "4df(x)", 
"t=0+1", "t=x", équations, noms, labels, légendes). Les labels 
viendront en overlay HTML/SVG après la génération.

Vocabulaire du modèle (pour orienter l'illustration, jamais à écrire 
dans l'image) : e unique à t=0, axe T circulaire constant, 4df(x) 
opérateur intégral en profondeur, lien-énergie, tissage, sillage, 
dualité aller-retour (IN/OUT), corridor, embouteillage.
```

> Le STYLE BASE complet plus bas est conservé pour référence, mais en pratique le PRÉAMBULE COMPACT ci-dessus suffit pour chaque conversation distincte.

---

## STYLE BASE (à coller une fois par conversation)

```
=== STYLE BASE — V2 du site cosmologique de Gabriel Cantin ===

Modèle : l'univers comme adressage permanent d'un seul e à t=0 via 
4df(x) dans un axe T constant. Concepts : e, t=0, t=0+1, t=0+2, 
t=0+3, t=x, t=x-1, lien-énergie, tissage, sillage, dualité 
aller-retour (IN/OUT), corridor 4df(x), embouteillage, énergie libre.

Catalogue de référence : j'ai uploadé images_catalog.png (28 images V1). 
Quand je nomme une image (A5, B1, C3, etc.), c'est la vignette du 
catalogue avec ce nom de fichier.

STYLE ANCHOR : A7_tx_manifestations_observables.png (8e ligne du 
catalogue, 1ère colonne). Toutes les images V2 doivent matcher :
- Fond navy/noir profond (#0a0a0f)
- Accents orange/jaune (#ffb74d), cyan/bleu (#82b1ff), violet 
  discret pour les sillages
- Sphères lumineuses douces (effet "boule de plasma")
- Lignes filantes, corridors/entonnoirs 4df(x)
- Aération modérée (pas surchargé)
- Ambiance : cosmique, contemplative, précise

RÈGLE LAYER SEPARATION (NON-NÉGOCIABLE) :
Aucun texte mathématique ni label technique dans l'image générée.
- ❌ "4df(x)", "t=0+1", "e", équations, indices, noms de fichiers
- ❌ Étiquettes, légendes, callouts texte
- ✅ Juste l'illustration : sphères, corridors, flèches, particules, 
  halos, sillages, dégradés, zones de couleur distinctes
Pourquoi : labels surimposés en HTML/SVG après → traduction FR↔EN 
sans régénérer l'image.

3 TEMPLATES DE LAYOUT (1 par image) :
- HERO : illustration centrale + périphérie aérée pour callouts SVG futurs
- SEQUENCE-STRIP : 5-7 panneaux horizontaux égaux côte à côte
- TABLE : grille 3-6 lignes × 3 colonnes (cellules visuelles seulement)

VERSIONNAGE : ne mentionne JAMAIS de nom de fichier (V1 ni V2) dans 
l'image. Le nom de fichier est uniquement dans le filesystem.
```

---

# SECTION 1 — Vue d'ensemble (3 images)

---

## V2-OVERVIEW — Master poster fondateur

**Hérite de** : `00_image_fondatrice.png` + `01_structure_fondatrice.png` (fusion)
**Template** : HERO
**Format** : 1600 × 1600 carré
**Sujet** : vue d'ensemble du modèle. Sphère centrale = e à t=0, environnée de couches structurelles t=0+1, t=0+2, t=0+3, t=x-1, t=x. Axe T circulaire englobe l'ensemble.

**Composition** :
- Centre exact : sphère lumineuse douce blanc-bleu (e à t=0), petite mais éclatante
- Autour : 4 sphères concentriques translucides, espacées (couches structurelles)
- Filaments orange jaillissent du centre vers l'extérieur dans toutes les directions (corridors 4df(x))
- Sphère externe (membrane d'observation t=x) : 4-5 points lumineux ponctuels distincts (les 5 manifestations) — sans label
- Halo violet discret entre t=x-1 et t=x (sillage cumulatif)
- Anneau orange courbe encadrant le tout (axe T)
- Fond : dégradé noir profond avec fines étoiles éparpillées

**À NE PAS inclure** : aucun texte. Pas de flèches étiquetées. Pas d'équations.

### Prompt prêt-à-coller

```
Suivant le STYLE BASE déjà établi, génère V2-OVERVIEW.

Sujet : master poster fondateur du modèle. Cette image fusionne 
ce que faisaient 00_image_fondatrice.png et 01_structure_fondatrice.png 
du catalogue.

Template : HERO. Format : carré 1600×1600.

Composition :
- Sphère lumineuse douce blanc-bleu au centre exact (le e unique à t=0), 
  petite mais éclatante
- Autour : 4 couches sphériques concentriques translucides, espacées 
  (les positions structurelles t=0+1, t=0+2, t=0+3, t=x-1) — laisser 
  intuitif sans label
- Filaments orange/jaune jaillissent du centre vers l'extérieur dans 
  toutes les directions, en faisceaux clairsemés (corridors 4df(x))
- Sphère externe (membrane d'observation t=x) : 5 points lumineux 
  ponctuels distincts répartis sur l'équateur visible
- Halo violet discret entre les deux couches les plus externes 
  (sillage cumulatif → matière noire / énergie noire)
- Anneau orange/jaune courbe encadrant tout le bas et le haut 
  (axe T circulaire)
- Fond : dégradé noir profond #0a0a0f, étoiles fines éparpillées

Rappel critique : aucun texte, aucun label, aucune équation, aucun 
nom de fichier. Juste l'illustration atmosphérique.
```

---

## V2-BIGBANG — Big Bang = ré-adressage permanent à t=0+1

**Hérite de** : `02_big_bang_re_adressage.png` (refonte)
**Template** : HERO
**Format** : 1600 × 1200 paysage
**Sujet** : à t=0+1, l'unique e est massivement adressé dans toutes les directions via l'ouverture simultanée de nombreux corridors 4df(x). Pas une explosion : un ré-adressage structurel permanent.

**Composition** :
- Centre : sphère lumineuse intense (e à t=0)
- Émergence radiale : 30-50 corridors lumineux orange qui jaillissent du centre dans toutes directions, comme un soleil héliosphérique
- Densité décroissante vers la périphérie (les corridors s'éclaircissent en distance)
- Subtile suggestion de courbure temporelle (l'ensemble est sur un axe T circulaire, légèrement courbé dans le plan d'image)
- Pas de représentation explicite de l'expansion classique (pas de boule en expansion)
- Fond : noir profond avec teinte chaude vers le centre

**À NE PAS inclure** : pas de « big bang » classique (boule colorée en expansion), pas de chronologie linéaire, pas de texte.

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-BIGBANG.

Sujet : le Big Bang vu comme un ré-adressage permanent de l'unique 
e à t=0+1 — ouverture massive et simultanée de corridors 4df(x) 
dans toutes les directions, pas une explosion dans le vide.

Template : HERO. Format : 1600×1200 paysage.

Composition :
- Centre exact : sphère lumineuse blanc-bleu très intense (e à t=0)
- 30 à 50 corridors lumineux orange/jaune qui jaillissent radialement 
  du centre dans toutes les directions, comme une héliosphère 
  géométrique
- Densité visuelle décroissante vers la périphérie (corridors fins 
  qui se fondent dans la nuit)
- L'ensemble très subtilement courbé (axe T circulaire)
- Fond noir profond #0a0a0f avec léger halo chaud autour du centre

À éviter absolument : la classique boule colorée en expansion 
(modèle standard du Big Bang). Ici c'est un point d'adressage 
permanent, pas un événement passé. Et pas de texte.
```

---

## V2-LAYERS — Couches transversales de T (tranches)

**Hérite de** : `03_tissage_couches_transversales.png` (refonte)
**Template** : SEQUENCE-STRIP
**Format** : 2400 × 1000 paysage large
**Sujet** : T comme totalité, vue en 5 tranches transversales : t=0, t=0+1, t=0+2, t=0+y, t=x. Même événement (émission photon) vu à chaque profondeur.

**Composition** (5 panneaux égaux) :
1. **t=0** : surface uniforme bleue-blanche, sans structure, juste e diffus
2. **t=0+1** : éclat radial OUT, pas de distance encore
3. **t=0+2** : émergence de filaments, début de distances entre points
4. **t=0+y** : un corridor 4df(x) clair traverse le panneau (le photon en propagation)
5. **t=x** : point lumineux d'arrivée + petit cercle (atome cible)

**À NE PAS inclure** : labels de tranches (t=0, t=x, etc. sont en overlay HTML). Pas d'équations.

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-LAYERS.

Sujet : même événement (émission d'un photon par un électron vers 
un proton) vu en 5 tranches transversales de T.

Template : SEQUENCE-STRIP. Format : 2400×1000 paysage large.

5 panneaux égaux côte à côte, séparés par fines lignes verticales 
discrètes, fond commun noir :

Panneau 1 : surface uniforme bleue-blanche diffuse, aucune structure, 
juste une luminosité douce ambiante (e à t=0).

Panneau 2 : un éclat radial orange OUT depuis le centre du panneau, 
particules très fines, aucune distance perceptible encore.

Panneau 3 : émergence de quelques filaments orange, premiers points 
lumineux séparés par de petites distances.

Panneau 4 : un corridor lumineux orange clair traverse horizontalement 
le panneau (le photon en propagation à c).

Panneau 5 : un petit atome lumineux à gauche (l'électron émetteur) et 
à droite un petit cercle (le proton récepteur), reliés par la trace 
résiduelle du corridor.

Aucun label de tranche dans l'image. Style cohérent inter-panneaux 
(mêmes couleurs, même résolution de détail).
```

---

# SECTION 2 — Genèse structurelle (5 images)

---

## V2-A1 — t=0+1 strict (adressage initial, sortie sans distance)

**Hérite de** : `A1_t0p1_adressage_initial.png` (refonte)
**Template** : HERO
**Format** : 1600 × 1600 carré
**Sujet** : à t=0+1 strict, e est adressé OUT, énergie libre jaillit, neutrinos OUT — mais AUCUNE distance, AUCUN axe 3D, AUCUNE structure organisée.

**Composition** :
- Centre : singularité lumineuse douce (e à t=0)
- Jaillissement OUT vertical/radial, fin et lumineux
- Quelques traces ultra-fines de neutrinos OUT (juste suggérées)
- Aucun axe XYZ visible, aucune grille, aucune profondeur 3D
- Horizon légèrement courbé en bas (suggestion T)
- Atmosphère : début structurel pur, riche d'énergie potentielle mais sans espace

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-A1.

Sujet : t=0+1 strict — adressage initial, sortie sans distance. 
Inspiré de A1_t0p1_adressage_initial.png du catalogue, mais en 
plus aéré et cosmique (style A7).

Template : HERO. Format : carré 1600×1600.

Composition :
- Centre : singularité lumineuse douce blanc-bleu (le e à t=0), 
  point d'où jaillit un flux d'énergie libre OUT vers le haut 
  et radialement
- Le flux OUT : faisceau orange vertical fin, plus quelques 
  ramifications radiales
- Autour : étendue noire constellée de fines traces de neutrinos 
  OUT — quasi invisibles, juste suggérées
- AUCUN axe 3D visible, AUCUNE grille, AUCUNE structure géométrique 
  organisée, AUCUNE distance perceptible
- Bas du cadre : léger arc courbe (axe T circulaire suggéré)
- Atmosphère : début pur, vide d'espace mais riche d'énergie 
  potentielle

Aucun texte, aucun label, aucune équation dans l'image.
```

---

## V2-A2 — t=0+1 → t=0+2 (naissance de la distance et des axes 3D)

**Hérite de** : `A2_t0p1_vers_t0p2_immersive.png` + `A3_t0p1_vers_t0p2_didactique.png` (fusion)
**Template** : SEQUENCE-STRIP
**Format** : 2400 × 1000 paysage large
**Sujet** : entre t=0+1 et t=0+2, l'IN du premier cycle déploie l'espace. Distance et axes 3D deviennent accessibles.

**Composition** (5 panneaux progression) :
1. État t=0+1 strict (similaire V2-A1 condensé)
2. Premier IN — un point lumineux se distingue d'un autre
3. Distance qui apparaît — 2 points lumineux clairement séparés
4. 3 axes XYZ deviennent suggérés (orthogonalité émergente)
5. Premier volume géométrique apparaît (forme polyédrique transparente)

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-A2.

Sujet : t=0+1 → t=0+2 — premier cycle structurel, naissance de la 
distance et des axes 3D. Fusion de A2_t0p1_vers_t0p2_immersive 
et A3_t0p1_vers_t0p2_didactique du catalogue (les deux versions 
deviennent une seule image multi-panneaux).

Template : SEQUENCE-STRIP. Format : 2400×1000.

5 panneaux égaux côte à côte, séparateurs verticaux discrets, 
fond noir commun. Progression visible :

Panneau 1 : un seul point lumineux central avec halo OUT (état 
t=0+1 strict, comme V2-A1 condensé)

Panneau 2 : début d'IN — un second point lumineux apparaît à 
quelques pixels du premier, embryon de distance

Panneau 3 : deux points clairement séparés, fil lumineux entre eux

Panneau 4 : trois axes orthogonaux suggérés très discrètement (lignes 
fines qui se croisent à 90°), plusieurs points lumineux apparaissent 
dans les trois directions

Panneau 5 : un volume géométrique transparent (tétraèdre ou cube 
flou) émerge, premiers volumes structurels

Aucun label "t=0+1", "t=0+2", aucun axe étiqueté X/Y/Z, aucun texte.
```

---

## V2-A3 — t=0+2 (premier retour, premières recombinaisons)

**Hérite de** : `A4_t0p2_premier_retour.png` (refonte)
**Template** : HERO
**Format** : 1600 × 1600
**Sujet** : à t=0+2, premiers retours, points peuvent se localiser, premières recombinaisons. Axes X/Y/Z accessibles.

**Composition** :
- Espace 3D doux suggéré (axes invisibles mais profondeur perceptible)
- 5-7 points lumineux répartis dans le volume
- Quelques traits orange (allers) ET cyan (retours) entre eux
- 2-3 recombinaisons en cours (points qui se rapprochent en spirale)
- Halo violet diffus en arrière-plan (sillage embryonnaire)

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-A3.

Sujet : t=0+2 — premier retour, apparition des localisations et 
premières recombinaisons possibles. Inspiré de 
A4_t0p2_premier_retour.png du catalogue.

Template : HERO. Format : carré 1600×1600.

Composition :
- Espace 3D doux suggéré (sans axes XYZ visibles, juste une 
  profondeur perceptible par dégradé)
- 5 à 7 points lumineux distincts répartis dans le volume, 
  certains plus proches du centre, d'autres en périphérie
- Entre les points : traits fins orange (vecteurs aller OUT) ET 
  cyan/bleu (vecteurs retour IN)
- 2 à 3 paires de points en train de se rapprocher en spirale 
  (recombinaisons embryonnaires)
- Arrière-plan : très léger halo violet diffus (sillage embryonnaire 
  en t=x-1)
- Atmosphère : début de localisation, espace existant mais peu 
  structuré

Aucun texte, aucune flèche étiquetée, aucune équation.
```

---

## V2-A4 — t=0+2 → t=0+3 (premiers tissages fermés, 2e cycle)

**Hérite de** : `A5_t0p2_vers_t0p3_tissages_fermes.png` + `A6_t0p2_vers_t0p3_deuxieme_cycle.png` (fusion)
**Template** : SEQUENCE-STRIP
**Format** : 2400 × 1000
**Sujet** : premiers tissages fermés, naissance de structures stables. Énergie libre et énergie embouteillée coexistent.

**Composition** (5 panneaux) :
1. Tissage ouvert (corridor non encore fermé)
2. Tissage en train de se refermer
3. Premier tissage fermé stable (boucle visible)
4. Co-existence : tissages fermés + énergie libre en arrière-plan
5. Densification : plusieurs structures fermées + sillage qui prend forme

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-A4.

Sujet : t=0+2 → t=0+3 — premiers tissages fermés, deuxième cycle 
structurel, naissance des premières structures stables. Fusion de 
A5_t0p2_vers_t0p3_tissages_fermes et A6_t0p2_vers_t0p3_deuxieme_cycle 
du catalogue.

Template : SEQUENCE-STRIP. Format : 2400×1000.

5 panneaux égaux côte à côte. Progression :

Panneau 1 : un corridor lumineux ouvert (chemin orange qui s'étire 
sans boucler)

Panneau 2 : le même corridor commence à se courber, ses extrémités 
se rapprochent (tissage en train de se refermer)

Panneau 3 : une boucle fermée stable (premier tissage fermé), 
lumineuse, comme un anneau de plasma cyan-orange

Panneau 4 : 2-3 tissages fermés stables ET en arrière-plan des 
corridors ouverts (énergie libre coexistante)

Panneau 5 : densification — plusieurs structures fermées dans 
l'espace, halo violet plus dense en arrière (sillage cumulatif 
qui prend forme)

Cohérence visuelle inter-panneaux (mêmes proportions, même 
résolution). Aucun texte.
```

---

## V2-A5 — t=x manifestations (image-clé pédagogique)

**Hérite de** : `A7_tx_manifestations_observables.png` (raffinement — c'est aussi le style anchor)
**Template** : HERO
**Format** : 1600 × 1600
**Sujet** : à t=x, on observe 5 manifestations fondamentales : photon, neutrino, matière fermée, sillage gravitationnel, singularité. C'est la membrane d'observation.

**Composition** :
- Plan horizontal suggéré (membrane d'observation t=x)
- 5 manifestations distinctes alignées sur ce plan, chacune avec sa signature visuelle :
  - Photon : faisceau orange droit
  - Neutrino : trace ultra-fine pointillée bleue
  - Matière fermée : structure stable cyan (atome stylisé)
  - Sillage gravitationnel : halo violet diffus
  - Singularité : entonnoir noir avec accrétion lumineuse
- Sous la membrane : profondeur structurelle suggérée vers t=0
- Cette image est le style anchor — soigner particulièrement la cohérence pour la suite

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-A5.

Sujet : t=x — manifestations observables issues de 4df(x). C'est 
l'image-clé pédagogique. C'est aussi le STYLE ANCHOR de toute la 
série V2 — soigne particulièrement l'aesthetic, car les images 
suivantes devront matcher celle-ci.

Inspiration directe : A7_tx_manifestations_observables.png du 
catalogue, mais en plus aéré, plus cosmique, moins surchargé.

Template : HERO. Format : carré 1600×1600.

Composition :
- Plan horizontal subtil au milieu de l'image (la membrane 
  d'observation t=x), suggéré par un léger dégradé
- Sur ce plan, 5 manifestations distinctes alignées de gauche à 
  droite, espacées également :
  1. Photon : faisceau orange droit oblique
  2. Neutrino : trace bleu cyan ultra-fine en pointillé
  3. Matière fermée : petite structure cyan stable, en orbite 
     (sphère lumineuse compacte)
  4. Sillage gravitationnel : halo violet diffus rond
  5. Singularité : petit entonnoir noir avec accrétion lumineuse 
     en spirale
- Sous le plan : profondeur structurelle suggérée vers t=0 (dégradé 
  noir vers bleu profond)
- Au-dessus du plan : ciel étoilé noir
- Style : précis, cosmique, contemplatif, espacé

Aucun texte ni label dans l'image. C'est le visuel pur qui définit 
le style.
```

---

# SECTION 3 — Particules & Forces (4 images)

---

## V2-B1 — Intrication (ancrage commun à t=0)

**Hérite de** : `B1_intrication.png` (raffinement)
**Template** : HERO
**Format** : 1600 × 1200
**Sujet** : deux manifestations à t=x partagent un ancrage commun à t=0. La corrélation vient de la structure commune dans 4df(x), pas d'un message dans l'espace.

**Composition** :
- Haut : plan horizontal t=x avec 2 points lumineux distincts à gauche et droite (particules A et B)
- Bas : un seul point lumineux (ancrage commun à t=0)
- Entre haut et bas : deux corridors 4df(x) qui descendent depuis A et B et CONVERGENT vers le point unique en bas
- Aucune ligne directe entre A et B à t=x (pas de communication spatiale)
- Légère pulsation visuelle (corrélation suggérée)

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-B1.

Sujet : intrication EPR selon le modèle — deux manifestations à 
t=x partagent un ancrage commun à t=0. La corrélation vient de 
leur structure commune dans 4df(x), pas d'un message superluminal. 
Inspiré de B1_intrication.png du catalogue mais nettement plus 
aéré.

Template : HERO. Format : 1600×1200 paysage.

Composition :
- Plan horizontal en haut (membrane t=x) : deux points lumineux 
  distincts, l'un à gauche, l'autre à droite, distants (les 
  particules A et B observées)
- Point lumineux unique en bas-centre (l'ancrage commun à t=0)
- Deux corridors 4df(x) lumineux orange-cyan qui DESCENDENT depuis 
  A et B et CONVERGENT vers le point unique en bas
- Aucune ligne directe horizontale entre A et B à t=x (pas de 
  communication spatiale — souligner visuellement leur isolement 
  apparent sur le plan d'observation)
- Très léger pulsement lumineux synchrone entre A, B et le point 
  d'ancrage (corrélation)
- Fond : noir profond avec dégradé subtil

Aucun texte, aucune équation. Pas de symbole infini ni d'ondes 
de probabilité.
```

---

## V2-B2 — 4 forces = 4 régimes selon la profondeur de l'ancrage

**Hérite de** : `B2_quatre_forces.png` (refonte, nouvel angle conceptuel)
**Template** : HERO (composition verticale)
**Format** : 1200 × 1800 portrait
**Sujet** : les 4 forces (gravité, EM, faible, forte) ne sont pas 4 forces séparées mais **4 régimes du même mécanisme de tissage selon la PROFONDEUR DE L'ANCRAGE des vecteurs 4df(x) dans t=x**. Plus l'ancrage est profond, plus la force est concentrée et serrée. Une seule colonne, 4 strates.

**Différence-clé avec V1 B2_quatre_forces et avec le V2-B2 précédent** : on n'organise PAS les 4 forces côte à côte horizontalement. On les organise **verticalement** sur un axe profondeur, du plus étalé/superficiel (gravité en haut) au plus concentré/profond (forte en bas).

**Composition** :
- Fond : noir profond cosmique cohérent A7
- Axe vertical = profondeur d'ancrage. Haut = t=x (ancrage superficiel). Bas = t=0 (ancrage profond).
- 4 strates lumineuses successives de haut en bas, **toutes traversées par une même colonne centrale de filaments orange/cyan** qui se resserre en descendant :
  1. **STRATE HAUTE — GRAVITÉ** (ancrage le plus superficiel, le plus étalé) : amas de sphères dispersées sur grande largeur avec halo violet diffus très étendu. Filaments très espacés.
  2. **STRATE — ÉM** (ancrage moyen) : une sphère lumineuse bleue centrale avec un point qui orbite, un faisceau orange (photon) qui s'échappe horizontalement. Filaments moyennement serrés.
  3. **STRATE — FAIBLE** (ancrage proche) : 3 sphères en train de se reconfigurer dans une zone plus étroite, vecteurs orange qui changent de corridor. Filaments resserrés.
  4. **STRATE BASSE — FORTE** (ancrage le plus profond, le plus serré) : 3 sphères ultra-proches collées en triangle équilatéral très serré (quarks d'un proton). Filaments quasi-superposés.
- **En bas exact** : un point lumineux unique (e à t=0) où la colonne se termine — tous les filaments convergent vers ce point unique.
- **Sur les côtés**, à hauteur de chaque strate, suggestion subtile d'un dégradé de saturation : plus on descend, plus c'est concentré.

**Message visuel** : un seul mécanisme, organisé par la profondeur. Plus on s'enfonce, plus c'est serré, plus la force est intense.

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-B2.

Sujet : les 4 forces (gravité, électromagnétique, faible, forte) 
NE sont PAS 4 forces séparées. Ce sont 4 régimes du même mécanisme 
de tissage, organisés selon la PROFONDEUR DE L'ANCRAGE des 
vecteurs 4df(x) dans t=x. Plus l'ancrage est profond, plus c'est 
concentré et serré.

POINT CRITIQUE : composition VERTICALE, pas horizontale. PAS de 
4 zones côte à côte. Une SEULE colonne centrale qui traverse 
4 strates de profondeur.

Template : HERO en orientation portrait. Format : 1200×1800 portrait 
(plus haut que large).

Composition de haut en bas :

NIVEAU 0 (tout en haut) : un trait horizontal subtil suggérant 
t=x (l'ancrage le plus superficiel).

STRATE 1 — GRAVITÉ (juste sous t=x) : amas large et dispersé de 
plusieurs sphères lumineuses bleu-blanc avec un halo violet diffus 
très étendu qui s'étire sur toute la largeur du cadre. Filaments 
orange espacés. C'est l'ancrage le plus superficiel donc le plus 
étalé.

STRATE 2 — ÉLECTROMAGNÉTIQUE (au-dessous) : une sphère bleue 
centrale moyenne avec un petit point qui orbite + un faisceau 
orange (photon) qui s'échappe horizontalement. Largeur visible 
plus restreinte que la strate gravité. Filaments orange/cyan plus 
serrés.

STRATE 3 — FAIBLE (encore plus bas) : 3 sphères de tailles 
moyennes en train de se reconfigurer dans une zone plus étroite, 
vecteurs orange qui changent de direction (transition). Largeur 
encore réduite.

STRATE 4 — FORTE (juste au-dessus de t=0) : 3 sphères ultra-proches 
collées en triangle équilatéral très serré (quarks d'un proton). 
Zone très étroite. Filaments quasi-superposés, très intenses.

CONVERGENCE FINALE (tout en bas) : un point lumineux unique (le e 
à t=0) où la colonne de filaments se termine. TOUS les filaments 
de toutes les strates convergent vers ce point.

ÉLÉMENT UNIFIANT : une colonne verticale de filaments orange/cyan 
qui traverse TOUTES les strates de haut en bas, qui se resserre 
progressivement en descendant (plus large en haut, ultra-fine en 
bas). C'est le signe visuel que c'est un seul mécanisme.

Couleurs cohérentes A7 : fond #0a0a0f, filaments orange (#ffb74d), 
accents cyan (#82b1ff), halo violet pour le sillage gravitationnel.

Aucun texte, aucun label "GRAVITÉ", "EM", "FAIBLE", "FORTE", aucune 
hiérarchie écrite, aucune équation, aucun "t=x" ni "t=0" écrit. 
Juste l'illustration verticale du gradient de profondeur.
```

---

## V2-B3 — Quarks : stables vs exotiques (LHC + proton)

**Hérite de** : `B3_combos_quarks_exotiques_LHC.png` + `B4_quarks_synchronisation_proton.png` (fusion)
**Template** : SEQUENCE-STRIP
**Format** : 2400 × 1000
**Sujet** : 3 quarks synchronisés tiennent (proton). Combinaisons forcées au LHC (tétra/pentaquarks) ne tiennent pas longtemps. Même mécanisme structurel.

**Composition** (5 panneaux) :
1. Un quark seul : flou, instable, presque invisible
2. Deux quarks : structure fragile qui vacille
3. Trois quarks synchronisés : structure stable claire (proton)
4. Quatre quarks (tétraquark) : structure temporaire vacillante
5. Cinq quarks (pentaquark) : structure encore plus instable, qui se désagrège

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-B3.

Sujet : pourquoi 3 quarks synchronisés tiennent (proton) mais 
combinaisons exotiques au LHC (tétraquark, pentaquark) ne tiennent 
pas longtemps. Fusion de B3_combos_quarks_exotiques_LHC et 
B4_quarks_synchronisation_proton du catalogue.

Template : SEQUENCE-STRIP. Format : 2400×1000.

5 panneaux égaux côte à côte. Stabilité croissante puis décroissante :

Panneau 1 : 1 sphère lumineuse seule au centre, floue et tremblante, 
presque dissoute (quark isolé — n'existe pas stablement)

Panneau 2 : 2 sphères proches reliées par un filament fragile qui 
vacille

Panneau 3 : 3 sphères en triangle équilatéral très serré, reliées 
par 3 filaments stables nets — la structure rayonne et est claire 
(proton stable, uud synchronisé)

Panneau 4 : 4 sphères en losange instable, filaments qui se 
chevauchent et vacillent (tétraquark — temporaire)

Panneau 5 : 5 sphères en pentagone désordonné, filaments qui se 
désagrègent visiblement, fragments en train de s'échapper 
(pentaquark — encore plus instable)

Style cohérent : mêmes couleurs des sphères (cyan-blanc), mêmes 
filaments orange, mêmes tailles. Aucun texte, aucun label "u", 
"d", "uud", aucune équation.
```

---

## V2-B4 — Émission d'un photon par un électron (6 étapes)

**Hérite de** : `B5_emission_photon_4dfx.png` (raffinement, en retirant les équations qui passent en overlay)
**Template** : SEQUENCE-STRIP
**Format** : 2800 × 1000
**Sujet** : cycle complet d'émission d'un photon par un électron en 6 étapes visuelles. Les équations seront en overlay HTML, pas dans l'image.

**Composition** (6 panneaux) :
1. État initial : électron stable en orbite autour du noyau
2. Décision d'émission : libération d'une portion du lien-énergie
3. Ouverture : un nouveau corridor 4df(x) s'ouvre vers l'extérieur
4. Propagation libre : photon en route, faisceau orange traverse
5. Retour : le faisceau atteint sa destination
6. Absorption : un autre atome reçoit, son électron monte d'un niveau

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-B4.

Sujet : cycle complet d'émission/absorption d'un photon par un 
électron, en 6 étapes visuelles. Inspiré de B5_emission_photon_4dfx 
du catalogue MAIS sans aucune équation (les équations passeront 
en overlay HTML séparé).

Template : SEQUENCE-STRIP. Format : 2800×1000 (panoramique).

6 panneaux égaux côte à côte, séparés par fines lignes verticales. 
Style sombre cosmique cohérent A7. Progression :

Panneau 1 : atome stylisé (noyau cyan central + petit point électron 
en orbite), stable, équilibré

Panneau 2 : l'électron s'éloigne légèrement, un filament orange 
commence à se détacher de son lien-énergie

Panneau 3 : un corridor 4df(x) s'ouvre clairement vers l'extérieur 
(faisceau orange qui prend forme)

Panneau 4 : le photon en propagation libre traversant horizontalement, 
faisceau orange filant

Panneau 5 : le faisceau atteint un autre atome à droite (cible)

Panneau 6 : l'autre atome reçoit, son électron monte d'un cran, 
nouvelle configuration stable

Aucun texte, aucune équation, aucun label "1", "2", "3" sur les 
panneaux (les numéros et les équations passeront en overlay HTML).
```

---

# SECTION 4 — Lectures structurelles (6 images)

---

## V2-C1 — Charge des fermions (table standard vs structurel)

**Hérite de** : `C1_charge_fermions.png` (refonte aérée en mode TABLE)
**Template** : TABLE
**Format** : 1400 × 1800 portrait
**Sujet** : la charge est la signature observable d'un lien-énergie à t=x, déterminée par le sens du corridor 4df(x). Table de 4 fermions × 2 colonnes (signature standard / lecture structurelle).

**Composition** :
- Grille 4 lignes × 2 colonnes vide visuellement (cellules avec illustration sans texte)
- Ligne 1 (Électron) : col 1 = sphère cyan avec signe négatif suggéré (asymétrie visuelle, sortie excédentaire) ; col 2 = corridor descendant avec retour visiblement faible
- Ligne 2 (Proton) : col 1 = sphère orange avec asymétrie inverse (entrée excédentaire) ; col 2 = corridor avec retour fort
- Ligne 3 (Neutrino) : col 1 = sphère pâle équilibrée ; col 2 = corridor symétrique aller-retour
- Ligne 4 (Quarks u/d) : col 1 = 2 sphères de tailles inégales ; col 2 = corridors fractionnaires

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-C1.

Sujet : la charge des fermions comme signature observable d'un 
lien-énergie à t=x. Refonte aérée de C1_charge_fermions.png du 
catalogue (qui est trop dense — réduis drastiquement).

Template : TABLE. Format : 1400×1800 portrait.

Composition : grille 4 lignes × 2 colonnes, cellules visuelles 
uniquement (aucun texte de header, aucun nom de fermion écrit). 
Fond sombre cohérent A7.

Ligne 1 — Électron : 
  Col 1 : sphère lumineuse cyan-bleu avec asymétrie visuelle 
  (un côté plus pâle, suggère charge négative par flux sortant 
  excédentaire)
  Col 2 : corridor 4df(x) descendant vers t=0 où l'aller est large 
  et le retour visiblement plus mince

Ligne 2 — Proton :
  Col 1 : sphère lumineuse orange avec asymétrie visuelle inverse 
  (un côté plus dense, charge positive par flux entrant excédentaire)
  Col 2 : corridor descendant où le retour est plus large que l'aller

Ligne 3 — Neutrino :
  Col 1 : sphère pâle équilibrée, presque transparente
  Col 2 : corridor symétrique parfait aller = retour

Ligne 4 — Quarks (u et d) :
  Col 1 : 2 sphères côte à côte de tailles inégales (une plus 
  grosse cyan, une plus petite orange)
  Col 2 : 2 corridors fractionnaires (asymétries plus subtiles 
  que les fermions complets)

Aucun texte. Aucun signe "+" ou "-" écrit. Aucune lettre "u/d". 
Style cohérent A7.
```

---

## V2-C2 — Électron autour du noyau (3 angles)

**Hérite de** : `C2_electron_noyau_4dfx.png` + `D4_electron_noyau_balle_tennis.png` + `D5_electron_retour_probabiliste.png` (fusion 3-panneaux)
**Template** : SEQUENCE-STRIP
**Format** : 2400 × 1000
**Sujet** : l'électron n'orbite pas — il rebondit dans un entonnoir 4df(x) créé par le noyau. 3 lectures complémentaires : formelle, balle de tennis, probabiliste.

**Composition** (3 panneaux) :
1. **Formel** : entonnoir 4df(x) cyan, électron en cycle aller-retour visible (flèches descendantes orange + remontantes cyan)
2. **Balle de tennis** : analogie pédagogique — la balle (électron) rebondit dans le funnel, trace visible des rebonds successifs
3. **Probabiliste** : nuage de probabilité de retour (cloud de points autour du noyau, densité variable)

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-C2.

Sujet : pourquoi l'électron n'orbite pas autour du noyau — il 
rebondit dans un entonnoir 4df(x). 3 lectures complémentaires en 
3 panneaux. Fusion de C2_electron_noyau_4dfx, 
D4_electron_noyau_balle_tennis et D5_electron_retour_probabiliste 
du catalogue.

Template : SEQUENCE-STRIP. Format : 2400×1000.

3 panneaux égaux côte à côte, séparés par fines lignes verticales :

Panneau 1 (Lecture formelle) : 
Un entonnoir 4df(x) profond cyan-bleu en perspective. L'électron 
(petit point lumineux) descend dans l'entonnoir (flèche orange 
descendante) puis remonte (flèche cyan ascendante). Le noyau 
(plusieurs sphères proches) est en bas de l'entonnoir.

Panneau 2 (Analogie balle de tennis) :
Le même entonnoir, mais traité comme une cuvette physique. Une 
"balle" lumineuse rebondit visiblement en plusieurs positions 
successives (3-4 positions superposées en trace lumineuse), 
montrant le cycle de rebond dans le funnel.

Panneau 3 (Distribution probabiliste) :
Le même entonnoir vu d'au-dessus (vue projetée). Autour du noyau, 
un nuage diffus de petits points lumineux (positions possibles 
de l'électron lors du retour), avec densité variable (plus dense 
près du centre, plus diffus en périphérie).

Cohérence : même entonnoir, même noyau, mêmes couleurs dans les 
3 panneaux. Aucun texte, aucun label, aucune équation.
```

---

## V2-C3 — Réactions connues (table 6 lignes)

**Hérite de** : `C3_reactions_connues.png` (refonte aérée TABLE)
**Template** : TABLE
**Format** : 1600 × 2000 portrait
**Sujet** : 6 réactions standard (β⁻, création paire, annihilation, photoélectrique, Compton, fusion) — vue standard vs explication structurelle. Visuels uniquement.

**Composition** :
- Grille 6 lignes × 2 colonnes
- Chaque cellule = mini-diagramme visuel (particules avant/après, flux)
- Pas de symboles standards écrits, juste les illustrations des transitions
- Cohérence : mêmes types de particules dans les 6 lignes (sphères de mêmes tailles/couleurs)

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-C3.

Sujet : 6 réactions standard de la physique vues via le modèle 
structurel : β⁻, création de paire, annihilation, effet 
photoélectrique, effet Compton, fusion nucléaire. Refonte aérée 
de C3_reactions_connues.png du catalogue.

Template : TABLE. Format : 1600×2000 portrait.

Composition : grille 6 lignes × 2 colonnes. Aucun texte, aucun 
header, aucun symbole standard écrit. Chaque cellule est un 
mini-diagramme visuel.

Ligne 1 (β⁻) :
  Col 1 (vue standard) : 1 sphère "neutron" qui se transforme en 
  proton + petit point d'éjection + trace de neutrino
  Col 2 (lecture structurelle) : la même chose vue comme transition 
  aller → retour dans un corridor 4df(x), pas comme émission d'une 
  particule réelle

Ligne 2 (Création de paire) :
  Col 1 : un faisceau orange (photon) qui devient 2 sphères (e⁻ + e⁺) 
  qui s'éloignent
  Col 2 : un corridor 4df(x) qui se sépare en 2 corridors miroirs

Ligne 3 (Annihilation) :
  Col 1 : 2 sphères (e⁻ + e⁺) qui convergent et deviennent 2 photons 
  partant en directions opposées
  Col 2 : 2 corridors miroirs qui fusionnent en 2 ouvertures opposées

Ligne 4 (Effet photoélectrique) :
  Col 1 : un faisceau orange arrive sur un atome, un électron 
  s'éjecte
  Col 2 : un photon ouvre un corridor qui libère un lien-énergie 
  embouteillé

Ligne 5 (Effet Compton) :
  Col 1 : photon entrant + électron, après : photon sortant à angle 
  différent + électron déplacé
  Col 2 : un corridor 4df(x) change de direction au contact d'un 
  lien-énergie embouteillé

Ligne 6 (Fusion nucléaire) :
  Col 1 : 2 noyaux qui convergent → 1 noyau + énergie libérée
  Col 2 : 2 amas de quarks qui se synchronisent en un seul, 
  excédent qui s'échappe sous forme de corridor ouvert

Aucun symbole "+", "-", "γ", "e⁻", aucune équation. Style cohérent 
A7 sombre.
```

---

## V2-C4 — Force angulaire (asymétrie aller-retour)

**Hérite de** : `C4_force_angulaire.png` (refonte)
**Template** : HERO
**Format** : 1600 × 1200
**Sujet** : la force angulaire émerge de l'asymétrie aller-retour. Sans rotation, l'asymétrie s'effondre. Avec rotation, elle se distribue sur 360°.

**Composition** :
- Centre : un lien-énergie en cycle aller-retour visible
- À gauche : version sans rotation (asymétrie qui s'accumule sur une ligne, structure qui s'effondre vers une singularité)
- À droite : version avec rotation (asymétrie distribuée sur un cercle, structure stable)
- Flèches courbes 360° autour du cas de droite

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-C4.

Sujet : la force angulaire émerge de l'asymétrie aller-retour du 
lien-énergie. Sans rotation : effondrement. Avec rotation : 
stabilité. Refonte aérée de C4_force_angulaire.png du catalogue.

Template : HERO. Format : 1600×1200 paysage.

Composition : 2 cas opposés mis en regard, séparateur central 
vertical fin :

Côté gauche (sans rotation) :
- Un lien-énergie représenté comme un cycle aller-retour vertical 
  (filament orange descendant + cyan remontant)
- L'asymétrie s'accumule visiblement sur une seule ligne (saturation 
  lumineuse forte qui s'effondre vers le bas)
- En bas : convergence vers une singularité noire (effondrement)

Côté droit (avec rotation) :
- Le même cycle aller-retour, mais distribué sur un cercle/tore
- L'asymétrie est étalée sur 360°, lumière équilibrée et stable
- Flèches courbes blanches/cyan suggèrent la rotation tout autour
- Structure visiblement plus stable et lumineuse

Au centre, séparateur vertical fin. Fond noir profond A7.

Aucun texte, aucune flèche étiquetée, aucun "Δ", aucune équation. 
Juste les deux régimes visuels.
```

---

## V2-C5 — Structure 4df(x) + dualité + lecture à c

**Hérite de** : `D1_dualite_aller_retour.png` + `C7_4dfx_lecture_profondeur.png` + `D3_observer_tx_lire_c.png` (fusion 3 angles)
**Template** : SEQUENCE-STRIP
**Format** : 2400 × 1000
**Sujet** : 3 lectures complémentaires du mécanisme : 4df(x) comme opérateur de profondeur, dualité aller-retour, lecture à c depuis t=x.

**Composition** (3 panneaux) :
1. **4df(x) profondeur** : entonnoir clair, gradient de profondeur t=x → t=0, accent sur l'intégration
2. **Dualité aller-retour** : un cycle aller-retour isolé, IN/OUT clairement visibles
3. **Lecture à c** : observateur stylisé à t=x, faisceau lumineux qui traverse la profondeur, info qui remonte à c

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-C5.

Sujet : 3 lectures complémentaires du mécanisme structurel — 
4df(x) comme opérateur de profondeur, dualité aller-retour du 
lien-énergie, et lecture à c depuis t=x. Fusion de 
D1_dualite_aller_retour, C7_4dfx_lecture_profondeur et 
D3_observer_tx_lire_c du catalogue.

Template : SEQUENCE-STRIP. Format : 2400×1000.

3 panneaux égaux côte à côte :

Panneau 1 (4df(x) profondeur) :
Un entonnoir profond vu en perspective, descendant depuis le plan 
horizontal supérieur (t=x) vers un point lumineux en bas (t=0). 
Gradient de profondeur visible (le bas plus saturé, le haut plus 
diffus). Filaments de plusieurs corridors qui descendent en 
parallèle.

Panneau 2 (Dualité aller-retour) :
Un cycle aller-retour isolé représenté comme une boucle elliptique 
verticale. Côté gauche descendant en orange (aller / IN). Côté 
droit remontant en cyan (retour / OUT). En bas le point t=0. 
En haut une petite manifestation à t=x.

Panneau 3 (Lecture à c) :
Un point lumineux à droite (observateur à t=x). Un faisceau de 
lumière orange à c qui traverse la profondeur vers la gauche, 
remontant depuis une profondeur lointaine. Le faisceau apporte 
l'information depuis le passé structurel jusqu'à l'observateur 
présent.

Cohérence visuelle inter-panneaux. Aucun texte, aucun "c", 
aucun "IN/OUT" écrit, aucune équation.
```

---

## V2-C6 — Premiers instants : pas encore de photon à t=0+1

**Hérite de** : `C5_premiers_instants_pas_photon.png` (raffinement)
**Template** : HERO
**Format** : 1600 × 1600
**Sujet** : à t=0+1 strict, énergie libre / adressage OUT, MAIS pas encore de photon complet (3 conditions absentes : extension sur c, transport à c, réception possible).

**Composition** :
- Centre : éclat radial OUT lumineux (énergie libre)
- Pas de faisceau dirigé (pas de photon)
- Pas de distance pour aller à c (pas d'espace déployé)
- Pas de cible (pas de réception possible)
- Atmosphère : début pur, riche d'énergie mais pas encore lumineux au sens du photon

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-C6.

Sujet : pourquoi il n'y a PAS de photons à t=0+1 strict. Énergie 
libre OUT existe, mais aucune des 3 conditions du photon n'est 
réunie (extension sur c, transport à c, réception possible). 
Raffinement de C5_premiers_instants_pas_photon.png du catalogue.

Template : HERO. Format : carré 1600×1600.

Composition :
- Centre : éclat radial OUT très lumineux et diffus (énergie libre 
  pure, comme un cœur de plasma sans direction)
- AUCUN faisceau dirigé (pas de photon en propagation visible)
- AUCUNE distance déployée (pas de profondeur claire entre points)
- AUCUNE cible de réception (pas de second atome ou observateur)
- Atmosphère : énergie pure non encore canalisée en photon, 
  pré-lumineuse
- Fond : noir absolu, sans étoiles (l'espace n'existe pas encore)

Aucun texte, aucun "c", aucune liste de conditions écrite. Juste 
l'état visuel du « pas encore photon ».
```

---

# SECTION 5 — Synthèse (1 image)

---

## V2-SYNTHESIS — Plan séquentiel complet (de t=0 à t=x)

**Hérite de** : `D2_plan_sequentiel_complet.png` (refonte aérée)
**Template** : SEQUENCE-STRIP étendu (10 panneaux)
**Format** : 3600 × 1200 ultra-paysage
**Sujet** : panorama complet en 10 cases : 5 positions structurelles + 5 phénomènes observables à t=x. C'est l'image-table des matières visuelle.

**Composition** (10 panneaux) :
1. t=0 (unique e)
2. t=0+1 (adressage initial)
3. t=0+2 (naissance distance)
4. t=0+3 (structures premières)
5. t=0+y (accumulation)
6. t=x photon
7. t=x neutrino
8. t=x matière fermée
9. t=x sillage / énergie noire
10. t=x singularité

### Prompt prêt-à-coller

```
Suivant le STYLE BASE, génère V2-SYNTHESIS.

Sujet : panorama complet du modèle en 10 panneaux, de t=0 à t=x. 
Image de synthèse = table des matières visuelle. Refonte aérée 
de D2_plan_sequentiel_complet.png du catalogue (10 cases mais 
beaucoup plus aéré).

Template : SEQUENCE-STRIP étendu. Format : 3600×1200 ultra-paysage.

10 panneaux égaux côte à côte, séparés par fines lignes verticales. 
Style sombre A7 cohérent. Progression structurelle (1-5) puis 
manifestations observables (6-10) :

Panneau 1 — t=0 : surface diffuse uniforme bleue-blanche, e unique
Panneau 2 — t=0+1 : éclat OUT central, neutrinos très fins
Panneau 3 — t=0+2 : 5-7 points lumineux distincts, premières 
distances
Panneau 4 — t=0+3 : 2-3 tissages fermés stables
Panneau 5 — t=0+y : densification, halo violet d'accumulation 
sillage

Panneau 6 — Photon à t=x : faisceau orange droit
Panneau 7 — Neutrino à t=x : trace cyan pointillée ultra-fine
Panneau 8 — Matière fermée à t=x : atome cyan stable
Panneau 9 — Sillage cumulatif à t=x : halo violet diffus
Panneau 10 — Singularité à t=x : entonnoir noir avec accrétion

Cohérence absolue inter-panneaux : mêmes proportions, mêmes 
couleurs des éléments récurrents (sphères blanc-bleu, filaments 
orange, sillage violet, etc.).

Aucun label "t=0", "t=0+1", "t=x", aucun nom de manifestation, 
aucune équation. Pure progression visuelle.
```

---

## Workflow recommandé (à jour 2026-05-12)

**Mode confirmé : 1 conversation ChatGPT = 1 image V2.** GPT dérive ou refuse d'enchaîner. Chaque conversation : upload catalogue + paste PRÉAMBULE COMPACT + paste prompt-image, récupère, sauve, ferme.

1. **V2-A5 d'abord** (déjà fait — le style anchor) → standard validé
2. Pour chaque image suivante, dans cet ordre (du plus simple/sûr au plus complexe/risqué) :
   - V2-A1, V2-A3, V2-C6, V2-B1 (HERO simples)
   - V2-OVERVIEW, V2-BIGBANG, V2-C4 (HERO plus chargés)
   - V2-B2 (HERO portrait vertical — composition profondeur)
   - V2-A2, V2-A4, V2-LAYERS (SEQUENCE 5 panneaux)
   - V2-B3, V2-C2, V2-C5 (SEQUENCE 3-5 panneaux)
   - V2-B4 (SEQUENCE 6 panneaux)
   - V2-C1, V2-C3 (TABLE)
   - V2-SYNTHESIS (SEQUENCE 10 panneaux — le plus risqué, en dernier)

3. **À chaque image validée** :
   - Sauve dans `docs/univers/images/v2/<nom>.png`
   - Note la date + verdict + observations dans un journal `docs/_methodology/09_V2_GENERATION_LOG.md` (à créer)
   - Si plusieurs essais ont été nécessaires, noter ce qui a marché pour reproduire les bons réflexes sur la suivante

---

## Quand passer à la couche overlay HTML

Quand 3-4 images V2 sont validées (idéalement V2-A5, V2-A1, V2-B1) : on conçoit le système d'overlay SVG/HTML qui ajoute les labels par-dessus. Ce sera traité dans un futur `10_V2_OVERLAY_SYSTEM.md`.
