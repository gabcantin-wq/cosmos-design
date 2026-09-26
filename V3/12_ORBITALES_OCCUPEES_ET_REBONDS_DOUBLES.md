# 12 — Orbitales occupées et rebonds doubles

**Audit élargi : [chapitre 14](14_AUDIT_UP_DOWN_ATOMES_LOURDS.md).** Le lien a maintenant été testé sur 30 éléments et 110 isotopes. Le rapport « trois orbitales doublement occupées par rebond double », qui coïncide pour Au, ne se généralise pas. L'invariant exact 2u−d=6O₂+3O₁ découle du comptage de valence et de la neutralité ; son emploi comme contrainte V3 ne constitue pas une dérivation des orbitales. La règle des colonnes identiques est restreinte à ses cas entiers admissibles.

**10 septembre 2026.** Le lien proposé par Gabriel est conservé et confronté aux comptages connus. La correspondance numérique de l'or est précise, mais ne sélectionne pas encore un mécanisme.

## Proposition de Gabriel

Verbatim, également conservé dans [RV21](visuels/JOURNAL_REVISION_VISUELLE.md#rv21) :

> *[Verbatim de Gabriel conservé localement — accessible sous sa supervision.]*

**[V3 — GABRIEL, à verrouiller]** Il existe, dans la piste proposée, un lien entre les orbitales occupées et les treize rebonds doubles de l'agencement candidat. Gabriel ne précise pas encore s'il s'agit d'un comptage, de géométrie, de proximité, d'occupation ou d'une autre contrainte. Ce message n'établit pas une bijection et ne valide pas toutes les hypothèses qui ont produit les treize rebonds du [chapitre 11](11_REPARTITION_ET_REBONDS_UP_DOWN.md).

Cette direction rejoint le synchronisme contraint par les manifestations électroniques dans [S01](sources/SESSION_GABRIEL.md#s01), les paramètres d'existence connus [S21](sources/SESSION_GABRIEL.md#s21) et la dette historique de lien entre valences dans [C12](sources/EXTRAITS_V2_CITES.md#c12).

## Le rapprochement numérique dans l'or

Dans la configuration fondamentale usuelle de l'atome neutre Au, **[Xe]4f¹⁴5d¹⁰6s¹**, on compte treize sous-couches fermées et une sous-couche ouverte, 6s¹. Il s'agit d'un comptage à partir de données externes. [NIST — Au I](https://physics.nist.gov/PhysRefData/Handbook/Tables/goldtable1.htm).

| Groupe de sous-couches fermées | Sous-couches | Nombre | Orbitales spatiales doublement occupées |
|---|---|---:|---:|
| s | 1s, 2s, 3s, 4s, 5s | 5 | 5 |
| p | 2p, 3p, 4p, 5p | 4 | 12 |
| d | 3d, 4d, 5d | 3 | 15 |
| f | 4f | 1 | 7 |
| Total fermé | | **13** | **39** |

Avec 6s¹, cela fait **14 sous-couches occupées**, **40 orbitales spatiales occupées** et **79 électrons** dans cette description. Les treize unités qui coïncident avec notre candidat sont donc les **sous-couches fermées**. Une sous-couche de moment l contient 2l+1 orbitales spatiales et peut accueillir 2(2l+1) électrons ; le terme orbitale ne désigne pas la même unité que sous-couche. Ces comptages utilisent la description de configuration, pas une décomposition unique de l'état corrélé exact. [NIST — états, sous-couches et exclusion](https://www.nist.gov/pml/atomic-spectroscopy-compendium-basic-ideas-notation-data-and-formulas/atomic-spectroscopy-10).

**[INFÉRENCE GPT — NON VALIDÉE]** Tester « un rebond double par sous-couche fermée » est une interprétation précise proposée par GPT du lien général de Gabriel. La coïncidence 13=13 pour Au ne suffit pas à valider cette interprétation.

## D'où vient déjà le nombre 13 dans notre grille ?

**[INFÉRENCE GPT — NON VALIDÉE] — conséquence des hypothèses du chapitre 11.** Posons R₁ rebonds à un soutien DOWN et R₂ rebonds à deux soutiens DOWN. Avec U UP à la colonne suivante, D DOWN sources, chaque source utilisée une seule fois et aucun autre degré de soutien :

$$
R_1+R_2=U,\qquad R_1+2R_2=D,
$$

d'où R₂=D−U et R₁=2U−D. Si l'on ajoute les comptes cumulés répartis également sur trois lectures, U=(2Z+N)/3 et D=(Z+2N)/3, alors :

$$
R_1=Z,\qquad R_2=(N-Z)/3.
$$

Pour Au-197, R₂=(118−79)/3=13. Le nombre des soutiens simples égal à 79 était donc lui aussi déjà forcé par nos hypothèses comptables. **Les orbitales n'interviennent pas dans cette dérivation.** Leur rôle ne peut pas être déduit du seul résultat numérique après coup.

Ces expressions sont conditionnelles : elles ne sont pas des lois V3 acquises. Elles requièrent notamment des comptes entiers admissibles et le choix de n'utiliser que des soutiens simples ou doubles. Elles ne prouvent pas la géométrie ou la stabilité des grilles.

## Test de la bijection simple

Le test garde la même règle R₂=(N−Z)/3 pour les trois cas et compare les sous-couches fermées de leurs configurations fondamentales neutres.

| Atome | Z | N | Sous-couches fermées | R₂ dans le candidat | Égalité ? |
|---|---:|---:|---:|---:|---|
| He-4 | 2 | 2 | 1 | 0 | Non |
| Au-197 | 79 | 118 | 13 | 13 | Oui |
| Pt-195 | 78 | 117 | 12 | 13 | Non |

He a la configuration 1s² ; Pt a [Xe]4f¹⁴5d⁹6s¹, avec 5d et 6s ouvertes. Les compositions et isotopes sont documentés par le [NIST — He](https://physics.nist.gov/PhysRefData/Handbook/Tables/heliumtable1.htm) et le [NIST — Pt](https://physics.nist.gov/PhysRefData/Handbook/Tables/platinumtable1.htm). N=A−Z est calculé. Le chiffre R₂ de Pt est l'extension algébrique du candidat, pas une observation de rebonds.

**Verdict sur l'interprétation GPT :** la bijection universelle « une sous-couche fermée = un rebond double » échoue sous les hypothèses de notre grille. Cela ne réfute pas le lien général proposé par Gabriel : cela élimine cette identification simple. Des exceptions ajoutées après comparaison ne suffiraient pas à produire une règle explicative.

## Une relation de compatibilité à construire

**[INFÉRENCE GPT — NON VALIDÉE]** Une autre manière de formaliser la piste consiste à chercher quels agencements de rebonds sont compatibles avec les occupations et les formes orbitales, tout en faisant sortir ces orbitales de la même résolution.

Une écriture de travail, sans fonction connue à ce stade, serait :

$$
\mathcal C(B,\{\psi_a,\nu_a\},G)=0.
$$

B représente les liens DOWN→UP du chapitre 11 ; ψₐ les orbitales candidates, νₐ leurs occupations dans la base choisie, G la géométrie et les contraintes des sillons. **C reste à définir** : ce symbole nomme le problème et ne fournit pas une équation physique résolue. Un rebond pourrait être compatible avec plusieurs contributions orbitales ; aucune association individuelle n'est encore établie.

Pour explorer un état connu, sa configuration peut être utilisée comme contrainte de comparaison. Pour prétendre la dériver, ψₐ et νₐ doivent devenir des sorties de la résolution commune, selon [S20](sources/SESSION_GABRIEL.md#s20) et le [chapitre 04](04_ORBITALES_COMME_REPONSES_4DF.md). Fixer treize orbitales ou treize sous-couches afin de retrouver treize rebonds créerait une circularité.

**[OUVERT]** Le lien porte-t-il sur le nombre de sous-couches, leurs occupations détaillées, leur pénétration/proximité ou une organisation collective ? Quelle règle sélectionne les partenaires DOWN et reste valable pour He, Au et Pt ? Le contrôle du raccord avec l'hydrogène du chapitre 11 reste également actif.

## Trace du calcul

[Calcul reproductible](calculs/COMPARAISON_ORBITALES_REBONDS.py) · [Résultats](calculs/RESULTATS_ORBITALES_REBONDS.json) · [Dette D20](07_DETTES_ET_TESTS_ADVERSARIAUX.md#d20).

Résultats conservés : 13 sous-couches fermées pour Au, 39 orbitales spatiales doublement occupées et une simplement occupée ; R₁=Z et R₂=(N−Z)/3 sous hypothèses ; échec de la bijection simple sur He/Pt. Aucun mécanisme de synchronisme orbital ou nouveau nombre physique n'est déclaré dérivé.
