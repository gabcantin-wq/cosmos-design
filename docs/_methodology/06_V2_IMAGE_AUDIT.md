# V2 — Audit des 28 images existantes (étape A)

**Date** : 2026-05-12
**Statut** : livrable étape A. L'étape B (visual brief + liste finale V2) viendra après validation Gabriel.
**Méthode** : lecture de `README_images.md` + `image_translation_pack_en.md` pour l'intention, puis échantillonnage visuel de 8 images représentatives (00, A1, A7, B1, B5, C1, D2, D5) pour évaluer le style réel.

---

## 1. Évaluation du style actuel (cohérence)

### ✅ Ce qui est déjà cohérent

| Aspect | État |
|---|---|
| Fond sombre (navy/noir) | Cohérent sur les 28 |
| Palette dominante orange/jaune + cyan/bleu | Cohérent |
| Titre en haut, orange, taille proéminente | Cohérent |
| Sphère/atome lumineuse comme motif récurrent | Cohérent |
| Entonnoir/corridor 4df(x) comme métaphore visuelle | Récurrent (B1, B5, C1, C2, D5 etc.) |

### ❌ Ce qui dérive d'une image à l'autre

| Aspect | Problème | Exemples |
|---|---|---|
| **Grammaire de layout** | Aucune. Chaque image invente sa propre grille. | 00 = single hero, A1 = colonnes verticales, A7 = grille 5+3, B1 = funnel + 6 boîtes, B5 = strip 6 étapes + 6 boîtes éq, D2 = grille 10 panneaux |
| **Densité de texte** | Massive variation. | 00 = ~10 labels, C1 et B5 = 50+ labels (illisibles hors plein écran) |
| **Typographie** | Police varie subtilement (artéfact AI) | Surtout visible dans les petits caractères |
| **Style d'illustration** | Painterly vs schématique vs technique | 00 = atmosphérique/painterly, A1 = schématique propre, B1 = dashboard technique surchargé |
| **Saturation des couleurs** | Du muted (00) au saturé/vif (B1) | |

**Verdict global** : *cohérence moyenne*. La marque est lisible (couleurs + thèmes) mais ça ne forme pas un set unifié. À cause de la densité variable, certaines images sont des œuvres autonomes (00), d'autres sont des fiches techniques surchargées (B5, C1).

---

## 2. Cartographie narrative des 28 images

### Groupe 0 — Vue d'ensemble fondatrice (4 images)

| Fichier | Sujet | Densité | Statut V1 |
|---|---|---|---|
| `00_image_fondatrice.png` | Sphère centrale + e/t=0/t=x/T/4df(x) annotés | Faible (≈10 labels) | Hero painterly |
| `01_structure_fondatrice.png` | Vue d'ensemble du modèle : régimes, manifestations, principes | Élevée (≈40+ éléments) | Infographie modèle complet |
| `02_big_bang_re_adressage.png` | Big Bang = ré-adressage permanent à t=0+1 | Élevée | Infographie thématique |
| `03_tissage_couches_transversales.png` | Couches transversales de T (t=0, +1, +2, +3, y, x-1, x) | Élevée | Sequence par tranches |

**Redondance** : 00 + 01 racontent tous les deux « la vue d'ensemble du modèle » à deux niveaux de densité. Un seul master poster suffit en V2.

### Groupe A — Genèse structurelle (7 images, A1→A7)

| Fichier | Position structurelle | Densité |
|---|---|---|
| `A1_t0p1_adressage_initial.png` | t=0+1 strict | Moyenne |
| `A2_t0p1_vers_t0p2_immersive.png` | t=0+1 → t=0+2 (version immersive) | Moyenne |
| `A3_t0p1_vers_t0p2_didactique.png` | t=0+1 → t=0+2 (version didactique) | Élevée |
| `A4_t0p2_premier_retour.png` | t=0+2 | Moyenne |
| `A5_t0p2_vers_t0p3_tissages_fermes.png` | t=0+2 → t=0+3 (tissages) | Moyenne |
| `A6_t0p2_vers_t0p3_deuxieme_cycle.png` | t=0+2 → t=0+3 (consolidation) | Élevée |
| `A7_tx_manifestations_observables.png` | t=x | Très élevée (image-clé) |

**Redondance** :
- A2 + A3 = même position structurelle, 2 angles (immersif vs didactique) → fusion possible en 1 image avec 2 panneaux
- A5 + A6 = même position structurelle, 2 cycles → fusion possible

### Groupe B — Particules & Forces (5 images, B1→B5)

| Fichier | Sujet | Densité | Redondance |
|---|---|---|---|
| `B1_intrication.png` | EPR/intrication = ancrage commun à t=0 | Très élevée | Aucune |
| `B2_quatre_forces.png` | 4 forces fondamentales | (à voir) | Aucune |
| `B3_combos_quarks_exotiques_LHC.png` | Tétra/pentaquarks au LHC | Élevée | Cousin de B4 |
| `B4_quarks_synchronisation_proton.png` | uud du proton, force forte | Élevée | Cousin de B3 |
| `B5_emission_photon_4dfx.png` | Émission photon, 6 étapes + équations | Extrême | Aucune |

**Redondance** : B3 + B4 = tous deux sur la stabilité des combinaisons de quarks → fusion possible (B3 LHC = forçage, B4 proton = stable, même mécanisme).

### Groupe C — Lectures structurelles (7 images, C1→C7)

| Fichier | Sujet | Densité |
|---|---|---|
| `C1_charge_fermions.png` | Charge = signature aller-retour | Extrême (50+ labels) |
| `C2_electron_noyau_4dfx.png` | Électron embouteillé dans funnel | Élevée |
| `C3_reactions_connues.png` | β−, création paire, annihilation, etc. (6 réactions) | Élevée |
| `C4_force_angulaire.png` | Force angulaire = asymétrie aller-retour | Élevée |
| `C5_premiers_instants_pas_photon.png` | Pas de photons à t=0+1 (= ancien B12) | Élevée |
| `C6_T_totalite_constante.png` | T = totalité, pas séquence | (à voir) |
| `C7_4dfx_lecture_profondeur.png` | 4df(x) = opérateur intégral en profondeur | (à voir) |

**Redondance** :
- C6 + C7 = tous deux sur la structure de T/4df(x) (concepts fondamentaux) → un peut servir de pédagogie pure, l'autre de référence formelle ; possible fusion ou complémentarité explicite
- C2 + futur électron-related (D4, D5) — voir ci-dessous

### Groupe D — Pédagogie (5 images, D1→D5)

| Fichier | Sujet | Densité |
|---|---|---|
| `D1_dualite_aller_retour.png` | Dualité aller-retour, structure 4df(x) | Moyenne |
| `D2_plan_sequentiel_complet.png` | **Plan séquentiel complet — 10 panneaux** | Extrême (mini-catalogue à elle seule) |
| `D3_observer_tx_lire_c.png` | Observer à t=x = lire à c | Moyenne |
| `D4_electron_noyau_balle_tennis.png` | Analogie balle de tennis (orbite) | Moyenne |
| `D5_electron_retour_probabiliste.png` | Retour probabiliste de l'électron | Élevée |

**Redondance massive** :
- D2 (plan séquentiel 10 panneaux) **résume à elle seule** A1-A7 + une partie de C — c'est presque le catalogue entier en 1 image. Double emploi avec A1-A7 vu séparément.
- C2 + D4 + D5 = trio sur l'électron autour du noyau (formel + analogie + probabiliste). Cluster naturel à fusionner en 1 infographie 3-panneaux.
- D1 + C7 + D3 = trio sur la structure 4df(x) / dualité aller-retour. Cluster à consolider.

---

## 3. Classement keep / merge / redo / drop

### À garder telles quelles (5 images)

Images déjà fortes, faible redondance, lisibles :
- `B1_intrication.png` — sujet unique, exécution claire
- `B2_quatre_forces.png` — sujet unique
- `B5_emission_photon_4dfx.png` — référence formelle complète (à raffiner mais structure OK)
- `C5_premiers_instants_pas_photon.png` — visualisation directe d'un point central du modèle
- `A7_tx_manifestations_observables.png` — image-clé pédagogique, à raffiner mais structure OK

### À fusionner (clusters de 2-3 → 1)

| Cluster | Images sources | Image V2 |
|---|---|---|
| Vue d'ensemble fondatrice | 00 + 01 | V2-OVERVIEW = 1 master poster (hero painterly + vocabulary essentiel) |
| t=0+1 → t=0+2 | A2 + A3 | V2-A2 = 1 image avec panneau immersif + panneau didactique côte à côte |
| t=0+2 → t=0+3 | A5 + A6 | V2-A4 = 1 image consolidée des tissages + 2e cycle |
| Stabilité quarks | B3 + B4 | V2-B3 = 1 image « pourquoi 3 quarks tiennent, pourquoi exotiques ne tiennent pas » |
| Électron autour noyau | C2 + D4 + D5 | V2-C2 = 1 infographie 3-panneaux (formel / analogie / probabiliste) |
| Structure 4df(x) + dualité | D1 + C7 + D3 | V2-C5 = 1 image « 4df(x) en profondeur + dualité aller-retour + lecture à c » |

### À refaire (raffinement style + clarté, sans changer le sujet)

| Image | Raison |
|---|---|
| `02_big_bang_re_adressage.png` | Densité trop élevée, structure typographique à reposer |
| `03_tissage_couches_transversales.png` | Concept-clé mais image actuelle peu lisible |
| `A1` | OK conceptuellement, refresh style pour matcher V2 |
| `A4` | Idem |
| `C1` | Trop dense, redesign en infographie aérée |
| `C3` | Tableau 6 réactions à reposer (potentiel pour publication scientifique) |
| `C4` | Force angulaire mérite plus de clarté |

### À abandonner (couvertes par fusion ou redondantes)

- `00_image_fondatrice.png` — absorbée par V2-OVERVIEW
- `01_structure_fondatrice.png` — absorbée par V2-OVERVIEW
- `A2_*.png` — absorbée par V2-A2 fusion
- `A3_*.png` — absorbée par V2-A2 fusion
- `A5_*.png` — absorbée par V2-A4 fusion
- `A6_*.png` — absorbée par V2-A4 fusion
- `B3_*.png` — absorbée par V2-B3 fusion
- `B4_*.png` — absorbée par V2-B3 fusion
- `C2_*.png` — absorbée par V2-C2 fusion
- `C6_T_totalite_constante.png` — possiblement absorbée par V2-OVERVIEW (à valider)
- `C7_*.png` — absorbée par V2-C5 fusion
- `D1_*.png` — absorbée par V2-C5 fusion
- `D3_*.png` — absorbée par V2-C5 fusion
- `D4_*.png` — absorbée par V2-C2 fusion
- `D5_*.png` — absorbée par V2-C2 fusion

### À considérer pour le statut spécial

- `D2_plan_sequentiel_complet.png` — c'est essentiellement un mini-catalogue. Deux options :
  1. **Garder en V2** comme image de synthèse finale (rôle « table des matières visuelle »)
  2. **Refaire en V2-SYNTHESIS** plus aérée, en cohérence avec le reste

---

## 4. Plan d'image V2 — 14 images cible (au lieu de 28)

| # | Nom V2 | Sujet | Hérite de |
|---|---|---|---|
| 1 | V2-OVERVIEW | Master poster fondateur | 00 + 01 |
| 2 | V2-BIGBANG | Big Bang = ré-adressage | 02 (refait) |
| 3 | V2-LAYERS | Couches transversales de T | 03 (refait) |
| 4 | V2-A1 | t=0+1 strict | A1 (refait) |
| 5 | V2-A2 | t=0+1 → t=0+2 (immersif + didactique) | A2 + A3 |
| 6 | V2-A3 | t=0+2 premier retour | A4 (refait) |
| 7 | V2-A4 | t=0+2 → t=0+3 (tissages + 2e cycle) | A5 + A6 |
| 8 | V2-A5 | t=x manifestations | A7 (raffiné) |
| 9 | V2-B1 | Intrication | B1 (gardé) |
| 10 | V2-B2 | 4 forces | B2 (gardé) |
| 11 | V2-B3 | Quarks : stable vs exotique | B3 + B4 |
| 12 | V2-B4 | Émission photon (formel + équations) | B5 (raffiné) |
| 13 | V2-C1 | Charge des fermions | C1 (refait, aéré) |
| 14 | V2-C2 | Électron autour du noyau (3 panneaux) | C2 + D4 + D5 |
| 15 | V2-C3 | Réactions connues (6 lignes) | C3 (refait) |
| 16 | V2-C4 | Force angulaire | C4 (refait) |
| 17 | V2-C5 | Structure 4df(x) + dualité + lecture à c | D1 + C7 + D3 |
| 18 | V2-C6 | Pas de photons à t=0+1 | C5 (gardé) |
| 19 | V2-SYNTHESIS | Plan séquentiel complet | D2 (refait, aéré) |

Ça fait 19 images V2 — pas 14 comme annoncé en haut. Si on est plus agressif sur la fusion, on peut viser 14-16 ; 19 reste raisonnable si on veut garder une bonne couverture pédagogique.

### Lacunes — images NOUVELLES à créer pour V2

Le chapitre **10 (Conscience / Sillages / Schémas)** existe à la racine du repo mais **n'a aucune image associée**. À couvrir en V2 (à préciser selon contenu du chapitre 10) :

- V2-S1 = Sillages accumulés en t=x-1 (matière noire + énergie noire)
- V2-S2 = Conscience selon le modèle (TBD selon chapitre 10)
- V2-S3 = ? (TBD)

---

## 5. Recommandations techniques pour la production V2

### Pattern « visuel + overlay »

**Recommandation forte** : pour CHAQUE image V2, dissocier la génération en deux couches :

1. **Couche visuelle (GPT/AI)** — l'image PNG/JPG génère :
   - Les illustrations atmosphériques (sphère, entonnoir, particules)
   - Les flèches structurelles principales
   - Le fond
   - **AUCUN texte mathématique, AUCUN label technique** (`4df(x)`, `t=0+1`, équations)

2. **Couche overlay (HTML/SVG)** — surimposée par CSS dans la page :
   - Tous les labels textuels
   - Toutes les équations (idéalement KaTeX/MathJax)
   - Légendes, tags, callouts
   - Position absolue sur l'image générée

**Pourquoi** : les générateurs IA déforment systématiquement les notations mathématiques (`4df(x)` devient `4df(z)`, `t=0+1` devient `t=O+1`, indices et flèches sautent). En séparant, on garantit l'intégrité des labels et on peut traduire FR↔EN en changeant juste l'overlay (vs régénérer 28 images).

### Grammaire de layout V2 — 3 templates max

Pour la cohérence inter-images :

1. **Template HERO** — 1 illustration centrale grande + ≤8 callouts SVG en périphérie. Pour : V2-OVERVIEW, V2-A1, V2-B1, V2-B2.

2. **Template SEQUENCE-STRIP** — 5-7 panneaux horizontaux égaux, sous-titre par panneau, légende commune en bas. Pour : V2-A2, V2-A4, V2-B3, V2-B4, V2-C2.

3. **Template TABLE** — grille 3-6 lignes × 3 colonnes (sujet | standard | structurel). Pour : V2-C3.

Toute image V2 doit appartenir à un de ces 3 templates. Pas de freeform.

### Palette + typographie V2 (spec à figer)

Avant la première génération, figer (et l'inscrire dans un fichier `docs/_methodology/07_V2_VISUAL_BRIEF.md` à l'étape B) :

- 1 couleur de fond exacte (hex)
- 2-3 couleurs d'accent exactes (hex)
- 1 famille de police pour les titres (overlay)
- 1 famille de police pour le corps (overlay)
- 1 ligne directrice de saturation (muted vs vivid)
- 1 image de référence comme « style anchor » (probablement 00 ou A7 retravaillée)

### Outils suggérés

- **Génération visuelle** : GPT-4 image generation ou Nano Banana (Gemini image) — choisir un seul et s'y tenir pour la cohérence inter-images. Tester sur 1 image avant de lancer la série.
- **Overlay** : HTML/CSS avec positionnement absolu par image, ou SVG inline dans le HTML. KaTeX/MathJax pour les équations.
- **Versioning** : garder les V1 (28 PNG actuels) dans `docs/univers/images/v1/`, mettre les V2 dans `docs/univers/images/v2/` pendant la transition.

---

## 6. Récapitulatif décisions étape A (à valider Gabriel)

| Décision | Statut |
|---|---|
| Passer de 28 images V1 → ~19 images V2 | À valider |
| Dissocier visuel généré (GPT) et overlay (HTML/SVG) | À valider |
| 3 templates max (HERO, SEQUENCE-STRIP, TABLE) | À valider |
| Style anchor unique (une V1 retravaillée ou ref nouvelle) | À valider, choisir laquelle |
| Versioning : V1 préservé dans `images/v1/`, V2 dans `images/v2/` | À valider |
| Ajouter ~3 images chapitre 10 (conscience/sillages) | À valider |
| Tool de génération : GPT-4 image / Gemini / autre | À choisir |

Une fois ces décisions prises, on passe à l'**étape B = visual brief V2 + liste finale des prompts** (un doc `07_V2_VISUAL_BRIEF.md`).
