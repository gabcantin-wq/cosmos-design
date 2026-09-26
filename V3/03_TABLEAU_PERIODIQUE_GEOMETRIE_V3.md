# 03 — Géométrie du tableau périodique en V3

**Repère de version.** Le corps initial ci-dessous conserve la synthèse S01–S22. Les précisions S23–S67 sont signalées dans le complément en fin de chapitre et rassemblées dans [09](09_VERBATIMS_ET_CONCLUSIONS_POUR_CALCUL.md). Elles doivent être prises en compte pour le prochain calcul.

## Ce que le tableau apporte

**[V3 — GABRIEL, à verrouiller]** Gabriel demande une géométrie simple du tableau périodique en S16, puis précise en S20 que les orbitales sont les réponses de `4df(x)`. Le tableau fournit donc les résultats à retrouver, pas une preuve que le modèle les a déjà produits. [S16](sources/SESSION_GABRIEL.md#s16), [S20](sources/SESSION_GABRIEL.md#s20).

**[INFÉRENCE GPT — NON VALIDÉE]** La périodicité chimique serait la réapparition de familles de retours stables autour de structures nucléaires de complexité croissante. Les formes spatiales projetées dans `t=x` seraient organisées par les sillons existant dans `4df(x-1)`. Cette lecture vient de la réponse GPT à S16.

## Le comptage connu : une contrainte externe

Les capacités du tableau suivant sont celles des sous-couches du formalisme atomique usuel, avec deux états de spin par orbitale spatiale. Elles ne sont pas des résultats V3. [NIST — états, couches et configurations](https://www.nist.gov/pml/atomic-spectroscopy-compendium-basic-ideas-notation-data-and-formulas/atomic-spectroscopy-10).

| Famille | `l` | Nombre de fonctions angulaires indépendantes `2l+1` | Capacité électronique `2(2l+1)` |
|---|---:|---:|---:|
| s | 0 | 1 | **2** |
| p | 1 | 3 | **6** |
| d | 2 | 5 | **10** |
| f | 3 | 7 | **14** |

Leur reprise dans V3 oblige à produire deux résultats distincts : la famille angulaire et le facteur binaire. **[OUVERT]** Ni l'un ni l'autre n'est dérivé de `4df` dans cette session.

## Le « 3+2 » des formes d

Repère mathématique, vérifiable sans hypothèse cosmologique : les polynômes quadratiques en trois coordonnées ont six coefficients indépendants. La condition de trace nulle, ou équivalemment de Laplacien nul, retire un coefficient. Il reste cinq formes, représentées par :

$$
\underbrace{xy,\;xz,\;yz}_{3}
\quad+\quad
\underbrace{x^2-y^2,\;2z^2-x^2-y^2}_{2}.
$$

Il s'agit de représentants angulaires, avec normalisation et dépendance radiale omises ; ces cinq expressions ne sont pas à elles seules cinq fonctions d'onde atomiques complètes. Par exemple, le Laplacien de `2z²-x²-y²` vaut `4-2-2=0`.

**[INFÉRENCE GPT — NON VALIDÉE]** Leur interprétation comme géométries de retour des sillons a été proposée en [S12](sources/SESSION_COMPLETE.md#s12). Le comptage `3+2=5` n'identifie pas le sens du « 3+2 » initial de Gabriel, qui précise ensuite un autre ajout binaire en S13.

**[V3 — GABRIEL, à verrouiller]** S14 distingue les perpendicularités de l'adressage leptonique, vers/depuis `t=0`, de la géométrie des sillons maintenus. **[INFÉRENCE GPT — NON VALIDÉE, corrigée en session]** L'identification `p_x,p_y,p_z = trois perpendicularités leptoniques` est donc abandonnée. Cinq formes d ne demandent pas cinq dimensions fondamentales. Le `+2` géométrique ci-dessus et le `×2` du binaire candidat sont deux comptages distincts.

## Les six premières périodes

Repère externe : les longueurs et les bornes se lisent dans le [tableau IUPAC](https://iupac.org/what-we-do/periodic-table-of-elements/). Les sommes ci-dessous comptent les capacités des blocs ; elles ne prétendent pas fournir les configurations successives de chaque élément.

| Période | Éléments | Décomposition de capacité | Longueur | Total cumulé |
|---|---|---|---:|---:|
| 1 | H → He | `1s : 2` | **2** | 2 |
| 2 | Li → Ne | `2s + 2p : 2+6` | **8** | 10 |
| 3 | Na → Ar | `3s + 3p : 2+6` | **8** | 18 |
| 4 | K → Kr | `4s + 3d + 4p : 2+10+6` | **18** | 36 |
| 5 | Rb → Xe | `5s + 4d + 5p : 2+10+6` | **18** | 54 |
| 6 | Cs → Rn | `6s + 4f + 5d + 6p : 2+14+10+6` | **32** | 86 |

La suite demandée est donc **`2,8,8,18,18,32`**. Les numéros atomiques des fermetures correspondantes sont **`2,10,18,36,54,86`**. Cette présentation s'arrête à la sixième période étudiée pendant la session.

**[OUVERT]** Les capacités seules ne déterminent pas l'ordre de remplissage, le moment où une famille devient accessible, ni les propriétés chimiques. On ne doit pas annoncer « périodes dérivées par V3 » après avoir importé à la fois leurs blocs et leur ordre.

## Parcours élémentaire et points de résistance

La colonne des configurations ci-dessous est un repère externe : [NIST — configurations électroniques](https://math.nist.gov/DFTdata/atomdata/configuration.html). **Toutes les lectures dans la troisième colonne sont [INFÉRENCE GPT — NON VALIDÉE]**, proposées en S04–S16.

| Étape | Configuration ou partie active connue | Lecture V3 candidate |
|---|---|---|
| H → He | `1s¹ → 1s²` | Un adressage, puis fermeture de la première famille. |
| Li → Be | `[He]2s¹ → [He]2s²` | Nouvelle famille ; fermer une sous-couche s ne suffit pas à reproduire un gaz noble. |
| B → C → N | `2p¹ → 2p² → 2p³` | Occuper les trois formes séparément avant le deuxième état sur une même forme. |
| O → F → Ne | `2p⁴ → 2p⁵ → 2p⁶` | Appariement progressif puis fermeture. |
| Na → Ar | `3s`, puis `3p` | Réapparition du motif à une autre organisation radiale. |
| K, Ca, Sc | `4s¹`, `4s²`, puis `3d¹4s²` | L'ordre ne suit pas simplement le numéro principal `n`. |
| Cr | `[Ar]3d⁵4s¹` | Séparation des cinq formes d comme piste ; aucun gain d'énergie calculé. |
| Mn → Ni | `3d⁵4s² → 3d⁸4s²` | Occupation et appariement des formes d à caractériser. |
| Cu, Zn | `3d¹⁰4s¹`, `3d¹⁰4s²` | Fermeture d comme piste pour Cu ; Zn ne devient pas pour autant un gaz noble. |

**[V3 — GABRIEL, à verrouiller]** S06 relie la faible propension à s'unir à des électrons de valence très stables dont les sillons ne s'accouplent pas dans `4df`. **[OUVERT]** Cela ne suffit pas à établir une loi générale d'inertie chimique. He, Be, Mg et les sous-couches pleines doivent être comparés dans des conditions définies, avec des énergies et des partenaires de liaison.

**[INFÉRENCE GPT — NON VALIDÉE]** La « séparation avant appariement » constitue une lecture possible de la règle de Hund dans le régime où cette règle s'applique. Elle n'établit ni le principe de Pauli, ni un mécanisme de répulsion des spins, ni une cause forte universelle de la chimie.

## Ce que la session laisse à calculer

**[OUVERT]** L'accès à `4s` avant `3d` pour K et Ca, les configurations Cr/Cu, puis l'entrelacement s/d/f demandent une comparaison quantitative des états complets. L'ordre peut dépendre de l'élément, de l'occupation et de l'ionisation : il ne faut pas figer une inégalité universelle `E(4s)<E(3d)`.

La proposition de GPT selon laquelle `4df` classe une géométrie complète plutôt qu'un seul rayon reste utile comme programme. Elle ne remplace pas le calcul. Voir [D03–D06](07_DETTES_ET_TESTS_ADVERSARIAUX.md#d03).

## Suite de session utile à la géométrie

**[V3 — GABRIEL, à verrouiller].** S37–S38 relient l'organisation possible à la proximité spatiale/temporelle ; S40–S41 décrivent qualitativement l'oscillation d'un centre lié aux UP/DOWN. **[INFÉRENCE GPT — NON VALIDÉE]** : les lois de proportionnalité, la correspondance nodale et la singularité comme condition aux limites des orbitales sont des développements GPT. Voir [09, proximité](09_VERBATIMS_ET_CONCLUSIONS_POUR_CALCUL.md#k05) et [09, centre](09_VERBATIMS_ET_CONCLUSIONS_POUR_CALCUL.md#k06).

Le prochain cahier privilégie les leptons. Il conserve les capacités, périodes et exceptions orbitales comme dettes ; aucune nouvelle dérivation du tableau périodique n'est ajoutée ici.
