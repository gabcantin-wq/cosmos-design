# V2 — Plan de développement de l'interface

Document de travail, capturé en une seule session pour fixer la direction. Pas destiné à évoluer comme une spec vivante : une fois aligné, on implémente.

## Objectif

Rendre visible la **structure** du modèle cosmologique par animation et interaction. L'usager comprend les relations en *manipulant*, pas en lisant. Le texte vient en appui, jamais en porteur principal.

## Principes d'interface

1. **Progression dirigée par choix** — chaque interaction débloque ou révèle le plan suivant. Pas de menu, pas de tableau de bord.
2. **Un plan à la fois** — la vue à l'écran est une seule scène structurelle. Le passage d'un plan à l'autre est explicite et animé.
3. **Animation = explication** — chaque mouvement porte une idée du modèle. Pas d'effet décoratif.
4. **Pas de texte cuit dans les visuels** — tout texte reste en HTML overlay (parité FR/EN, fiabilité). Voir [`feedback_v2_no_text_in_images`].
5. **Compartimentation + répétition** — chaque plan est isolé (un concept central), mais les concepts transverses (e, t, T, adressage, tissage, 4df(x)) réapparaissent sous des angles différents d'un plan à l'autre. C'est la répétition qui ancre.

## Stack technique arrêtée

- **Three.js** (via CDN, pas de npm, pas de build step), compatible GitHub Pages tel quel.
- **JS vanilla** pour la structure UI autour (boutons, overlays, transitions de page).
- **Shaders GLSL custom** quand un concept n'existe pas comme primitive standard (ex: tissage, adressage qui remonte, soustraction au retour).
- **HTML overlay** pour tout le texte (FR/EN), positionné par-dessus le canvas Three.
- Pas de framework UI, pas de bundler. Tout reste lisible dans le navigateur sans tooling.

## Architecture des plans

L'enchaînement par défaut est linéaire : `planT → planGenèse → plan4df → plan4d → planCharge → planForces → planElectron → planChaîne`. Chaque plan peut exposer des sous-zooms qui redirigent, et `planBalle` est accessible en analogie depuis plusieurs plans.

---

### planT — L'axe temporel circulaire

**Concept central :** T comme cadre. Tube circulaire fermé, constant. Toute observation a lieu *dans* T.

**Visuel :** un gros tube refermé sur lui-même, rotation ambiante lente, points-emplacements répartis le long.

**Interaction :**
- Survol d'un emplacement → aperçu de la tranche de membrane d'observation `t=x`.
- Clic → entrée dans la tranche, transition vers `planGenèse` (ou autre plan selon l'emplacement).

**À préciser :** combien d'emplacements ; mapping avec les chapitres A/B/C/D du modèle ; le tube tourne-t-il ou la caméra orbite.

---

### planGenèse — De t=0 à t=x

**Concept central :** l'émergence séquentielle (A1 → A7). Comment on passe d'un `e` unique à une membrane d'observation peuplée.

**Visuel :** une chronologie 3D qui se construit. À chaque étape, un élément structurel apparaît et reste, jusqu'à former l'état `t=x`.

**Interaction :** l'usager avance/recule dans la séquence (slider, scroll, ou bouton). Chaque étape a son overlay textuel court.

**À préciser :** granularité (7 étapes pures, ou sous-étapes) ; visualisation du *passage* entre deux états (interpolation, bond, fondu).

---

### plan4df — La fonction génératrice

**Concept central :** `4df(x)` comme mécanisme qui transforme `e` en adressage observable.

**Visuel :** la fonction représentée non comme une courbe abstraite, mais comme un *processus* — un flux qui traverse et transforme.

**Interaction :** l'usager fait varier `x`, voit comment la sortie de `4df(x)` change. Possibilité de figer un `x` et l'inspecter.

**À préciser :** comment montrer une fonction sans la réduire à un graphe 2D ; quelles entrées/sorties rendre visibles ; lien avec `plan4d` (la profondeur est une lecture de `4df`).

---

### plan4d — Profondeur d'adressage

**Concept central :** la profondeur d'attraction qui croît à mesure qu'on s'approche de `t`. L'adressage du `e` qui *remonte*. Le coût du tissage qui *se soustrait du `e`* lors du retour.

**Visuel :** une scène 3D avec profondeur réelle. Le `e` descend, l'attraction se renforce. Au retour, des particules/fragments se détachent du `e` (le coût).

**Interaction :** l'usager contrôle la descente / la remontée (scroll, drag). Deux jauges synchrones : profondeur atteinte ↔ `e` restant.

**À préciser :** seuil de profondeur où le retour devient impossible ; représentation du coût (particules, jauge, ou les deux) ; lien visuel avec `planT` (on est *dans* une tranche du tube).

---

### planCharge — La charge structurelle

**Concept central :** la charge non comme propriété intrinsèque, mais comme conséquence structurelle (C1).

**Visuel :** mise en regard de deux configurations structurelles qui produisent des charges opposées. L'usager voit que ce n'est pas un « signe » porté, mais une orientation.

**Interaction :** l'usager inverse / fait pivoter la configuration et observe le changement de signe émerger.

**À préciser :** quel élément exactement on fait pivoter ; comment relier à l'électromagnétisme observé dans `planForces` et `planElectron`.

---

### planForces — Particules et forces

**Concept central :** intrication, quarks, photon, forces (B1 → B5). Comment les interactions documentées se relisent structurellement.

**Visuel :** un « atelier » où plusieurs configurations coexistent. L'usager passe d'une force à l'autre via choix.

**Interaction :** sélection de la force / interaction → la scène se reconfigure, garde les éléments en commun, change ce qui diffère. C'est ici que la répétition des concepts transverses se voit le mieux.

**À préciser :** doit-on traiter chaque B1–B5 comme un sous-zoom, ou comme cinq mini-scènes côte à côte.

---

### planElectron — L'électron lu à travers le modèle

**Concept central :** prendre les fonctions/comportements bien documentés de l'électron (charge, spin, niveau d'énergie, interaction électromagnétique, exclusion, dualité onde-particule, masse, stabilité) et montrer **l'interprétation structurelle** de chacun selon les lois du modèle (C2).

**Visuel :** une scène centrale d'un électron *au sens du modèle*. À côté, une liste de fonctions documentées cliquables. Chaque clic projette la scène centrale sous l'angle correspondant.

**Interaction :** l'usager arrive avec ses préconceptions de la physique standard. Il clique « spin », voit la lecture structurelle. Il clique « masse », voit autre chose. Le but : recartographier chaque attribut connu vers le langage du modèle.

**À préciser :** liste exhaustive des fonctions à couvrir (au moins : charge, spin, masse, dualité, exclusion, niveau d'énergie, stabilité) ; quelles fonctions partagent le même geste visuel (= répétition).

---

### planChaîne — Le modèle en quelques maillons

**Concept central :** vue synthétique. Le modèle entier ramené à ses maillons essentiels, reliés (Section 7).

**Visuel :** un schéma vivant où chaque maillon est cliquable, et le clic ramène au plan correspondant. C'est la *carte* du parcours déjà fait.

**Interaction :** survol → l'animation du maillon rejoue en miniature. Clic → retour au plan complet.

**À préciser :** combien de maillons exactement ; placement (linéaire, en boucle, en arbre) ; rôle d'entrée vs de synthèse (peut servir aux deux).

---

### planBalle — Analogie de la balle de tennis

**Concept central :** analogie pédagogique transverse (D5). Pas dans la séquence linéaire.

**Visuel :** scène concrète et familière (balle, raquette, trajectoire), avec calques qui révèlent les structures du modèle dessous.

**Interaction :** accessible depuis n'importe quel plan via un bouton « voir l'analogie ». Sert de pont vers l'intuition quand un concept abstrait bloque.

**À préciser :** quels plans déclenchent l'analogie automatiquement, lesquels la rendent simplement disponible.

---

## Concepts transverses

Ces concepts ne sont pas des plans : ils traversent les plans. C'est leur répétition sous plusieurs angles qui produit la compréhension structurelle.

| Concept | Définition courte | Apparaît dans |
|---|---|---|
| `e` | L'élément primordial unique à `t=0` | planGenèse, plan4d, planElectron, planChaîne |
| `t` | Instant d'observation, position dans la membrane | planT, planGenèse, plan4d |
| `T` | Axe circulaire constant qui contient tout `t` | planT, planChaîne |
| `4df(x)` | Fonction génératrice qui adresse `e` dans `t=x` | plan4df, plan4d, planGenèse |
| Adressage | Le geste par lequel `e` est rendu observable à `t=x` | plan4d, plan4df, planElectron |
| Tissage | Structure produite par l'adressage | plan4d, planForces, planCharge |
| Coût | Soustraction du `e` lors du retour de l'adressage | plan4d, planElectron, planChaîne |
| Membrane d'observation | Tranche `t=x` où l'observation a lieu | planT, planGenèse, plan4d |

**Règle de cohérence :** un concept transverse a un **vocabulaire visuel constant** (même couleur, même geste d'animation, même forme) d'un plan à l'autre. C'est ce qui permet à l'usager de reconnaître `e` ou *adressage* sans avoir à le relire.

---

## Questions transverses

**Tranchées :**
- **Progression** — linéaire par défaut, avec sous-zooms et accès à `planBalle` en transverse.
- **FR/EN** — commutation globale (header), contenu identique, FR canonique.
- **Stack** — Three.js + vanilla JS via CDN, pas de build.

**Ouvertes :**
- **Texte d'accompagnement** — overlay sur la scène, page séparée par plan, ou panneau latéral rétractable ?
- **Persistance** — l'usager qui revient retrouve son avancement, ou repart de zéro ?
- **Entrée par défaut** — `planT` direct, ou écran d'accueil V2 avec choix « parcours linéaire » vs « accès libre via `planChaîne` » ?
