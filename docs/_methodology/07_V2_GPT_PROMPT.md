# Prompt-bloc V2 pour ChatGPT (et autres générateurs d'images)

**Usage** : copier-coller le bloc ci-dessous dans une **nouvelle conversation ChatGPT**, **après avoir uploadé** `images_catalog.png`. Le bloc contient tout le contexte (rappel du modèle, catalogue, règles de style, plan V2, première demande). Adapter les sections marquées `[À AJUSTER]` selon les décisions finales.

**Ordre** :
1. Nouvelle conversation ChatGPT
2. Upload `docs/_methodology/images_catalog.png`
3. Coller le bloc ci-dessous
4. Attendre la première image (V2-A1), valider/corriger
5. « Continue avec V2-A2 » → itérer

---

## 🟧 BLOC À COPIER-COLLER 🟧

```
=== CONTEXTE — Modèle cosmologique structurel de Gabriel Cantin ===

Tu travailles sur la version 2 du site web cosmologique de Gabriel Cantin
(parti-orange.com/univers/). Le modèle décrit l'univers comme l'adressage
permanent d'un seul e à t=0 via l'opérateur intégral 4df(x) dans un axe
T circulaire et constant. Concepts récurrents : e unique, t=0, t=0+1,
t=0+2, t=0+3, t=x (membrane d'observation), t=x-1 (phase dynamique),
lien-énergie, tissage, sillage, dualité aller-retour (IN/OUT), corridor
4df(x), embouteillage, énergie libre.

=== CATALOGUE DE RÉFÉRENCE ===

J'ai uploadé une image : c'est le catalogue des 28 images V1 actuelles
du site. Chaque vignette porte son nom de fichier en dessous (ex :
A5_t0p2_vers_t0p3_tissages_fermes.png). À partir de maintenant, quand
je nommerai une image (A5, B1, C3, etc.), réfère-toi à cette vignette
dans le catalogue.

=== MANDAT V2 ===

On veut passer des 28 images V1 à environ 19 images V2 plus cohérentes
visuellement et plus denses en information utile, avec une grammaire de
layout fixée. Les V1 sont conservées dans /v1/, les V2 iront dans /v2/.

=== STYLE ANCHOR — [À AJUSTER si Gabriel choisit autre] ===

L'image A7 (A7_tx_manifestations_observables.png) sert de style anchor.
Toutes les images V2 doivent matcher son aesthetic :
- Fond navy/noir profond (#0a0a0f)
- Accents orange/jaune (#ffb74d), cyan/bleu (#82b1ff), violet discret
  pour les sillages
- Sphères lumineuses (effet "boule de plasma douce")
- Lignes filantes orange/cyan
- Entonnoir/corridor 4df(x) comme métaphore visuelle récurrente
- Aération modérée — PAS surchargé comme C1, B5 ou D2
- Sensation : précis, cosmique, contemplatif

=== RÈGLE LAYER SEPARATION — CRITIQUE ===

Les images V2 que tu génères doivent contenir UNIQUEMENT l'illustration
visuelle. AUCUN texte mathématique, AUCUNE notation, AUCUNE équation,
AUCUN label technique dans l'image elle-même.

❌ INTERDIT dans l'image générée :
- "4df(x)", "t=0+1", "t=0", "t=x", "e", "y"
- Équations (E = hν, P(r,θ,φ), etc.)
- Indices, exposants, lettres grecques
- Tableaux de texte, légendes longues
- Étiquettes pointant vers des éléments

✅ AUTORISÉ dans l'image :
- Sphères, atomes lumineux, particules
- Corridors/entonnoirs/funnels
- Flèches non-étiquetées (juste la forme)
- Couches/strates
- Lignes filantes
- Halos, sillages, dégradés
- Zones de couleur distinctes pour les régimes (bottled / free / non-localized)

POURQUOI : les générateurs d'images IA corrompent systématiquement la
notation mathématique. "4df(x)" devient "4df(z)" ou "4dr(x)", "t=0+1"
devient "t=O+1", les indices sautent. En séparant : tu produis le
visuel propre, et les labels sont surimposés en HTML/SVG après la
génération, ce qui garantit leur intégrité et permet la traduction
FR↔EN sans régénérer l'image.

=== 3 TEMPLATES DE LAYOUT — Une image = un seul template ===

TEMPLATE HERO
- 1 illustration centrale dominante
- Périphérie aérée (l'espace blanc sera occupé par 6-8 callouts SVG après)
- Format : carré ou 4:3 paysage
- Usage : V2-OVERVIEW, V2-A1, V2-A3, V2-B1, V2-B2, V2-C4, V2-C6

TEMPLATE SEQUENCE-STRIP
- 5 à 7 panneaux horizontaux égaux côte à côte
- Chaque panneau = un moment ou un cas
- Connexion visuelle entre panneaux (flèche, dégradé, fond continu)
- Format : 16:9 ou plus large
- Usage : V2-A2, V2-A4, V2-A5, V2-B3, V2-B4, V2-C2, V2-C3, V2-SYNTHESIS

TEMPLATE TABLE
- Grille 3 à 6 lignes × 3 colonnes
- Colonnes : ÉLÉMENT | LECTURE STANDARD | LECTURE STRUCTURELLE
- Visuel par cellule, pas de texte (texte ajouté en overlay)
- Format : 4:5 portrait ou carré
- Usage : V2-C1 (charge), V2-C3 (réactions)

=== PLAN V2 — 19 IMAGES ===

Section 1 — Vue d'ensemble (3 images)
  V2-OVERVIEW (HERO) ........ fusion 00 + 01 — master poster fondateur
  V2-BIGBANG (HERO) ......... refonte 02 — Big Bang = ré-adressage
  V2-LAYERS (SEQUENCE) ...... refonte 03 — couches transversales de T

Section 2 — Genèse (5 images)
  V2-A1 (HERO) .............. refonte A1 — t=0+1 strict
  V2-A2 (SEQUENCE) .......... fusion A2+A3 — t=0+1 → t=0+2
  V2-A3 (HERO) .............. refonte A4 — t=0+2 premier retour
  V2-A4 (SEQUENCE) .......... fusion A5+A6 — t=0+2 → t=0+3
  V2-A5 (HERO) .............. raffinement A7 — t=x manifestations (image-clé)

Section 3 — Particules & Forces (4 images)
  V2-B1 (HERO) .............. raffinement B1 — intrication
  V2-B2 (HERO) .............. raffinement B2 — 4 forces
  V2-B3 (SEQUENCE) .......... fusion B3+B4 — stabilité quarks
  V2-B4 (SEQUENCE) .......... raffinement B5 — émission photon (6 étapes)

Section 4 — Lectures structurelles (6 images)
  V2-C1 (TABLE) ............. refonte C1 — charge des fermions
  V2-C2 (SEQUENCE) .......... fusion C2+D4+D5 — électron autour noyau
  V2-C3 (TABLE) ............. refonte C3 — réactions connues (β-, etc.)
  V2-C4 (HERO) .............. refonte C4 — force angulaire
  V2-C5 (SEQUENCE) .......... fusion D1+C7+D3 — 4df(x) + dualité + lecture à c
  V2-C6 (HERO) .............. raffinement C5 — pas de photons à t=0+1

Section 5 — Synthèse (1 image)
  V2-SYNTHESIS (SEQUENCE) ... refonte D2 — plan séquentiel complet aéré

=== PREMIÈRE DEMANDE ===

Génère UNIQUEMENT l'image V2-A1.

Spécifications :
- Template : HERO
- Sujet : t=0+1 strict (adressage initial, sortie sans distance)
- Format : carré 1600 × 1600 ou 4:3 (1600 × 1200)
- Style : matche A7 dans le catalogue

Composition souhaitée :
- Centre : une singularité lumineuse douce (le e à t=0), point d'où jaillit
  un flux d'énergie libre OUT vers le haut/extérieur
- Autour : aucune structure organisée, juste une étendue noire constellée
  de fines particules suggérant des neutrinos OUT (traces ultra-légères,
  filantes, presque invisibles)
- Bas : un léger horizon courbe suggérant la totalité de T (axe circulaire)
- AUCUNE distance perceptible — pas de profondeur 3D, pas d'axes XYZ
  visibles, pas de structures géométriques
- Atmosphère : début structurel pur, vide d'espace mais riche d'énergie
  potentielle

Rappel critique : AUCUN texte, AUCUN label, AUCUNE équation dans l'image.
Juste le visuel atmosphérique. Les annotations seront ajoutées en
overlay HTML après.

Ne génère QUE cette image pour le premier round. Je validerai avant
qu'on passe à V2-A2.
```

---

## Stratégie d'itération après la première image

Une fois V2-A1 reçue :

**Si c'est bon** → tu réponds simplement :
> « V2-A1 validée. Génère maintenant V2-A2 (SEQUENCE 5 panneaux, t=0+1 → t=0+2, fusion de A2+A3 du catalogue). Garde le même style. »

**Si à corriger** → tu décris la correction en termes visuels (pas en termes de labels, puisqu'il n'y en a pas) :
> « V2-A1 presque bonne, mais : (a) la singularité centrale est trop large, réduis de 30 % ; (b) les neutrinos OUT sont trop visibles, rends-les plus diffus ; (c) l'horizon T est invisible, accentue-le. Régénère. »

**Si c'est complètement à côté** → recadre :
> « Trop de structures géométriques. À t=0+1 strict il n'y a AUCUN axe 3D, AUCUNE distance. Refais en supprimant tous les axes et la grille. »

---

## Quand GPT dérive (cas typiques)

- **Il ajoute des labels malgré la consigne** → le rappeler explicitement chaque fois si besoin : « Pas de texte dans l'image. Refais sans aucun mot ni équation. »
- **Il dérive vers le Modèle Standard** (atomes type Bohr avec orbites) → « Le modèle n'utilise PAS l'orbite. L'électron n'orbite pas, il rebondit dans un entonnoir. Regarde D4/D5 dans le catalogue pour la lecture correcte. »
- **Il perd la palette** → « Reviens au style A7. Fond #0a0a0f, accents orange #ffb74d et cyan #82b1ff. »
- **Il change de format** → « Format 1600 × 1600, comme demandé. »

---

## Quand passer à l'étape "overlay HTML"

Quand tu as 3-4 images V2 validées (visual only), on peut basculer en parallèle sur la couche HTML/SVG qui ajoute les labels par-dessus. Ce sera traité dans un futur doc `08_V2_OVERLAY_SYSTEM.md`.
