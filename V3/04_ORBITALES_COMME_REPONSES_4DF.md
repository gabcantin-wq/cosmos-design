# 04 — Les orbitales comme réponses de 4df(x)

**Repère de version.** Le corps initial ci-dessous conserve la synthèse S01–S22. Les précisions S23–S67 sont signalées dans le complément en fin de chapitre et rassemblées dans [09](09_VERBATIMS_ET_CONCLUSIONS_POUR_CALCUL.md). Elles doivent être prises en compte pour le prochain calcul.

## Le déplacement décisif : les orbitales sont des sorties

**[V3 — GABRIEL, à verrouiller]** En [S20](sources/SESSION_GABRIEL.md#s20), Gabriel écrit : « les orbitales donnent les reponsent de la 4dfx ». La session retient ce principe : **les orbitales sont les réponses de `4df(x)`**.

**[INFÉRENCE GPT — NON VALIDÉE]** La réponse S20 propose la chaîne explicative suivante :

```text
Structure existante et sillons en t=x-1
        │ contraintes de géométrie, proximité et forces
        ▼
      4df(x)
        │ familles de retours compatibles
        ▼
Géométries orbitales observables dans t=x
        │ condition de maintien à préciser
        ▼
Balance 3D et tenue dans t=x+1
```

Les flèches représentent des dépendances conceptuelles dans T constant. Ce schéma n'est ni un algorithme implémenté ni une succession chronologique fondamentale. La dernière condition provient de S18 ; son raccord au calcul reste ouvert.

**[OUVERT]** Pour une dérivation, on ne peut pas donner à `4df` les familles s/p/d/f déjà étiquetées, leurs occupations ou leur ordre énergétique, puis appeler leur restitution une prédiction. Ces informations peuvent servir de cibles de comparaison. Si un état électronique intervient dans une résolution auto-cohérente, il doit être une inconnue résolue avec l'ensemble, pas la réponse imposée.

## Les paramètres d'existence connus

**[V3 — GABRIEL, à verrouiller]** En [S21](sources/SESSION_GABRIEL.md#s21), Gabriel rappelle que les états existent et que leurs paramètres d'existence sont connus. La liste détaillée `n,l,m_l,m_s` est donnée par GPT dans sa réponse, et non énumérée dans le message de Gabriel.

Repère physique externe : un état monoélectronique peut être décrit par ces nombres quantiques dans une base adaptée :

$$
n=1,2,\ldots,\qquad l=0,\ldots,n-1,
$$
$$
m_l=-l,-l+1,\ldots,l,\qquad m_s=\pm\tfrac12.
$$

`n` est principal ; `l` décrit le moment angulaire orbital ; `m_l` et `m_s` sont les projections correspondantes sur un axe choisi. Pauli interdit deux électrons ayant le même quadruplet, donnant `2(2l+1)` places par sous-couche. [NIST — notation atomique](https://www.nist.gov/pml/atomic-spectroscopy-compendium-basic-ideas-notation-data-and-formulas/atomic-spectroscopy-10).

**[INFÉRENCE GPT — NON VALIDÉE]** La session propose de prendre ce **catalogue expérimental des réponses** comme cible pour `4df`. Ici « expérimental » signifie : catalogue formulé dans la théorie atomique et contraint par les observations. Cela ne signifie pas que les quatre nombres seraient lus directement comme quatre propriétés de sillons. Pour un atome à plusieurs électrons, cette description relève d'une base ou d'une approximation ; elle n'épuise pas son état corrélé exact.

## Les correspondances proposées, à garder distinctes des données

Chaque ligne ci-dessous porte le statut **[INFÉRENCE GPT — NON VALIDÉE]**. Source : réponse [S21](sources/SESSION_COMPLETE.md#s21).

| Paramètre connu | Lecture V3 candidate de GPT | Ce qui manque |
|---|---|---|
| `n` | Niveau ou profondeur de la solution dans `4df` | Définition du niveau ; relation à la partie radiale et aux énergies. |
| `l` | Géométrie de balance du retour autour du centre | Opérateur et contraintes produisant les familles permises. |
| `m_l` | Orientation de la géométrie dans la projection 3D | Loi de transformation sous rotation ; ce nombre n'est pas un catalogue d'orientations arbitraires dans l'espace. |
| `m_s` | Binaire structurel **UD/DU** | Spin demi-entier, transformations, mesures et exclusion ; le seul nombre « deux » ne suffit pas. |

**[OUVERT]** Des fonctions orbitales réelles comme `p_x` et `p_y` peuvent être des combinaisons de la base à `m_l` fixé. Une forme dessinée n'est donc pas automatiquement un état de projection déterminé. Le dictionnaire entre images, fonctions, nombres quantiques et objets V3 doit être explicite.

Le décompte donne bien **s=2, p=6, d=10, f=14** dans le cadre atomique connu. La session n'a pas établi que `4df` produit ce cadre. Voir [03](03_TABLEAU_PERIODIQUE_GEOMETRIE_V3.md).

## Pourquoi un nuage probabiliste ?

**[GABRIEL_VALIDÉ]** V2 décrit le filament comme le trajet lui-même et le nuage comme un artefact de lecture de la membrane. Le retour ne se confond pas avec le point de départ. [C03](sources/EXTRAITS_V2_CITES.md#c03), Q176 du [corpus V2](sources/V2/06_MODELE_COMPLET_REFERENCE_fr.md).

**[V3 — GABRIEL, à verrouiller]** S18 donne l'explication centrale de Gabriel : la structure existe en `t=x-1` ; elle peut donc être influencée par les forces dans `4df(x)`. Les sillons s'organisent autour de leur centre pour être balancés en 3D dans `t=x+1`. [S18](sources/SESSION_GABRIEL.md#s18).

**[INFÉRENCE GPT — NON VALIDÉE]** Le nuage peut alors être décrit comme la projection des retours possibles de l'adressage, sous ces influences. La version « ensemble pondéré des retours compatibles » vient de GPT, réponse S17. Les pondérations n'ont pas été définies.

**[INFÉRENCE GPT — NON VALIDÉE]** GPT a aussi envisagé : un déterminisme structurel sous-jacent, une statistique de lecture d'une géométrie inscrite, des nœuds dus à l'absence de fermeture ou à des contributions qui s'annulent. Ces variantes ne sont pas équivalentes et ne sont pas toutes validées par la correction de Gabriel.

**[OUVERT]** Le fait qu'une structure subisse plusieurs forces n'établit pas, à lui seul, une loi probabiliste. Il faut produire une mesure normalisée, les amplitudes et phases pertinentes, et expliquer le passage aux fréquences observées. La relation usuelle `P=|ψ|²`, les interférences et les corrélations constituent ici des cibles ; aucune n'a été dérivée de `4df`.

**[OUVERT]** Les « trous » de S18 ne sont pas identifiés formellement aux nœuds radiaux ou angulaires d'une fonction d'onde. Une somme de forces nulle et une amplitude nulle sont deux conditions différentes. Le modèle doit dire laquelle il utilise, pourquoi et avec quelles conséquences mesurables.

## Résultat conservé

**[V3 — GABRIEL, à verrouiller]** La direction de recherche est fixée : faire sortir les orbitales de `4df` et comparer ses réponses aux états connus. **[OUVERT]** Les familles, leurs amplitudes, leurs énergies et leurs conditions d'occupation restent à produire. L'expression « table de vérité de 4df » de S21 est une image méthodologique de GPT, pas une table exhaustive déjà calculée.

## Complément : nœuds, même nuage et rayon

**[V3 — GABRIEL, à verrouiller].** S37 propose une organisation maximale liée à la proximité ; S62 précise un nuage de même structure générale mais rapproché du noyau sous l'effet de la perpendiculaire. S60 était une question sur le maintien des distances nodales, pas la validation d'une loi.

**[INFÉRENCE GPT — NON VALIDÉE].** Conserver les rapports nodaux, identifier les nœuds radiaux à la profondeur dans T et poser m r approximativement constant sont des pistes GPT. Elles ne sont pas des conséquences déjà obtenues de 4df. Le r interne de V2 est un rapport sans dimension, distinct d'un rayon orbital : [C20](sources/EXTRAITS_V2_CITES.md#c20). Voir les [verbatims du rayon](09_VERBATIMS_ET_CONCLUSIONS_POUR_CALCUL.md#k09) et les [contrôles du cahier](10_CAHIER_DU_PROCHAIN_CALCUL_4DFX.md).

## Lien avec les rebonds doubles — continuation RV21

**[V3 — GABRIEL, à verrouiller]** Gabriel propose un lien entre orbitales occupées et les treize rebonds doubles de la grille candidate : [RV21](visuels/JOURNAL_REVISION_VISUELLE.md#rv21).

Le [chapitre 12](12_ORBITALES_OCCUPEES_ET_REBONDS_DOUBLES.md) apporte un comptage précis : Au possède treize sous-couches fermées, mais quarante orbitales spatiales occupées dans sa description de configuration. **[INFÉRENCE GPT — NON VALIDÉE]** Une bijection entre sous-couche fermée et rebond double est testée et échoue pour He/Pt sous les hypothèses actuelles. Ce verdict porte sur l'interprétation de GPT, pas sur toute possibilité de lien.

**[INFÉRENCE GPT — NON VALIDÉE]** Chercher une compatibilité commune des liens de soutien, de la géométrie, des formes orbitales et de leurs occupations est une autre formulation candidate. **[OUVERT]** La contrainte correspondante reste à construire. Les occupations connues peuvent servir à un test inverse ; pour les dériver, elles doivent sortir de la résolution avec les orbitales. Voir [D20](07_DETTES_ET_TESTS_ADVERSARIAUX.md#d20).

## Complément spin — RV29

**[V3 — GABRIEL, à verrouiller]** Gabriel demande si un spin peut être associé à un moment UP ou DOWN. Le [complément du chapitre 05](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md#spin-phase) conserve la proposition et les tests nécessaires. Cette question ne valide pas automatiquement la correspondance m_s ↔ UD/DU du tableau ci-dessus ; les valeurs de projection connues restent des cibles à reproduire.

<a id="nuage-source-maintenue"></a>
## Nuage probabiliste et source maintenue par les trois temps — RV62

**[V3 — GABRIEL, à verrouiller] — V56.** Gabriel propose que les nuages probabilistes suivent les agencements des trois temps qui maintiennent la source de l'adressage de e au même endroit. Il rappelle explicitement « c'est une piste » : ni cette proposition ni le lien précédent entre phases et espace ne deviennent une démonstration. [Verbatim RV62](visuels/JOURNAL_REVISION_VISUELLE.md#rv62).

**Raccord aux sources.** [S03](sources/SESSION_GABRIEL.md#s03) reliait les trois phases au maintien d'un état orbital probabiliste ; [S18](sources/SESSION_GABRIEL.md#s18) décrivait les sillons organisés autour de leur centre pour une balance en trois dimensions dans x+1. V2 A32 définissait l'existence par l'équilibre du sillon entre plusieurs positions de T, cité en [C05](sources/EXTRAITS_V2_CITES.md#c05). V56 précise maintenant le maintien de la source « au même endroit ». Le statut et la portée de chaque source sont conservés ; les identités source/sillon/noyau/e ne sont pas fusionnées automatiquement.

**[INFÉRENCE GPT — NON VALIDÉE] — I56.** Lire le maintien comme une contrainte sur les retours admissibles : rechercher les retours de l'adressage compatibles avec une source maintenue, puis une règle de lecture donnant leur distribution observable. La stabilité de la source et l'étendue du nuage seraient alors deux aspects à obtenir dans une même résolution. Cette proposition prolonge la projection des retours possibles de S17, sans valider ses pondérations ni réduire le nuage à une trajectoire parcourue dans le temps.

La source maintenue et les positions possibles de manifestation de e doivent être distinguées dans cette construction candidate. Le maintien de la première n'exige pas d'imposer toutes les manifestations au même point. À l'inverse, une source immobile ou un centre inchangé ne détermine pas à lui seul la forme du nuage. Aucune correspondance un moment/un lobe orbital n'est déduite du nombre trois.

**[OUVERT]** Définir ce que désigne « source » et le repère dans lequel elle demeure au même endroit. Définir la contrainte de maintien, ses solutions et leur réponse à des perturbations ; définir ensuite la lecture spatiale et les poids qui produisent le nuage. Les retours admissibles doivent être calculés, et la distribution doit être normalisée. La condition de maintien ne remplace pas la loi probabiliste ; les amplitudes, interférences et énergies restent les cibles déjà indiquées dans ce chapitre.

## Précision de la source maintenue — RV129

**[GABRIEL_VALIDÉ] — V103, clarification interne.** À la question portant sur l'hydrogène, Gabriel identifie la source à la masse. **[V3 — GABRIEL, à verrouiller] — V104.** Il décrit celle-ci comme le sillon résidant dans 4df(x), permettant l'observation de l'électron en x, et relie son propos aux trois quarks ensemble. Le [verbatim et sa portée](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#source-masse-trois-quarks) précisent la section RV62. Le repère du maintien, la relation des quarks au sillon et la loi des retours restent ouverts ; aucune forme orbitale ou probabilité n'est dérivée par cette seule clarification.

<a id="rappel-principe-rv137"></a>
## Rappel de Gabriel : les influences et les résultats sont déjà posés — RV137

> *[Verbatim de Gabriel conservé localement — accessible sous sa supervision.]*

**[GABRIEL_VALIDÉ] — V108, rappel interne.** Les nuages probabilistes sont les résultats de 4df(x), influencée notamment par la force forte et la proximité. Cette précision réaffirme la direction déjà formulée en [S01](sources/SESSION_GABRIEL.md#s01), [S18](sources/SESSION_GABRIEL.md#s18) et [S20](sources/SESSION_GABRIEL.md#s20). Elle ne doit pas être traitée comme une explication conceptuelle encore à demander à l'auteur.

**Correction du classement GPT.** La question générale RV136 sur ce qui détermine le retour ne distinguait pas suffisamment ce principe de sa réalisation mathématique. Le travail restant porte sur la formalisation de ces influences, leurs relations et les sorties calculées. Le manque d'une équation ne justifie pas de redemander le principe qualitatif. Les hypothèses de pondération, de mesure et de probabilité proposées par GPT conservent leurs statuts.
