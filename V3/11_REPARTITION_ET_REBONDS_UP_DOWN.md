# 11 — Répartition des états et rebonds synchronisés

**Extension contrôlée : [audit des atomes lourds, chapitre 14](14_AUDIT_UP_DOWN_ATOMES_LOURDS.md).** Les trois colonnes identiques de l'exemple Au ne se généralisent pas : 77/110 isotopes examinés donnent des comptes non entiers. Le nouvel audit fournit un candidat entier à colonnes presque égales et une continuation à bord commun pour les 110 cas. Le présent chapitre conserve la première construction et ses hypothèses ; aucune validation physique n'en découle.

**10 septembre 2026.** Cette passe transforme la précision [RV19](visuels/JOURNAL_REVISION_VISUELLE.md#rv19) en contraintes et construit un agencement vérifiable pour He-4 et Au-197. Les résultats sont conditionnels ; ils ne constituent pas une solution physique de 4df.

## La règle de Gabriel

**[V3 — GABRIEL, à verrouiller]** Un UP est le rebond d'un ou de plusieurs DOWN selon leur synchronisme. Un sillon ne peut pas être UP et DOWN à la même lecture ; il faut agencer les identités dans le repère commun x−1/x/x+1. UP et DOWN restent les états du même, comme en [RV17](visuels/JOURNAL_REVISION_VISUELLE.md#rv17), [S01](sources/SESSION_GABRIEL.md#s01) et [C09–C10](sources/EXTRAITS_V2_CITES.md#c09).

« Trois lectures » désigne ici trois positions dans **T constant**, pas trois valeurs de T ni trois durées mesurées. Le DOWN partagé entre deux fenêtres successives conserve une seule identité d'événement : [RV09](visuels/JOURNAL_REVISION_VISUELLE.md#rv09).

## Écriture minimale proposée

**[INFÉRENCE GPT — NON VALIDÉE]** Pour chaque identité suivie i et chaque colonne j, poser deux indicateurs binaires Uᵢⱼ et Dᵢⱼ. L'exclusion demandée par Gabriel s'écrit UᵢⱼDᵢⱼ=0. Pour la grille entièrement renseignée de cette passe, on ajoute Uᵢⱼ+Dᵢⱼ=1 : toutes les identités retenues sont présentes dans chacune des trois lectures. Cette deuxième hypothèse exclut les cases absentes ou illisibles ; RV19 seul ne la démontre pas.

L'indice i désigne la même identité tout au long de la ligne. Une couleur indique l'état d'une case, jamais une espèce permanente de sillon. Les trois colonnes sont communes à toutes les lignes ; aucune origine individuelle n'est déplacée.

Pour représenter le rebond, introduire Bᵢₖ(j)=1 lorsqu'un DOWN de i à la colonne j contribue à l'UP de k à la colonne suivante. Dans ce candidat à raccord entre colonnes adjacentes :

$$
B_{ik}(j)\le D_{ij},\qquad B_{ik}(j)\le U_{k,j+1},\qquad
\sum_i B_{ik}(j)\ge U_{k,j+1}.
$$

Plusieurs contributions peuvent donc aboutir à un seul UP. Le lien B est une relation de soutien ; **il ne fusionne pas les identités** et ne transforme pas simultanément le sillon source en un deuxième UP. Les UP de la première colonne ont leurs antécédents hors de la fenêtre.

**[OUVERT]** Le choix des soutiens par proximité, la durée du raccord, ses poids, la conservation d'un budget et la loi de 4df qui le produit ne sont pas donnés. RV19 ne dit pas non plus si un DOWN peut soutenir plusieurs UP ; les exemples ci-dessous n'utilisent pas cette possibilité.

## Hypothèses comptables de cet essai

**[INFÉRENCE GPT — NON VALIDÉE]** Pour donner un sens calculable à « la quantité connue sur les trois lectures », cet essai traite les inventaires de référence comme des **totaux cumulés sur une fenêtre de trois colonnes**. Il ne les recopie pas intégralement dans chacune des colonnes.

Les cibles externes déjà documentées sont He-4 : 6u/6d ; Au-197 : 276u/315d. Pour l'or, Z=79 et N=197−79=118 ; le comptage de valence donne u=2Z+N et d=Z+2N. Sources : [NIST — Au](https://physics.nist.gov/PhysRefData/Handbook/Tables/goldtable1.htm), [DOE — compositions de valence](https://www.energy.gov/science/doe-explainsprotons), [cadrage des deux atomes](visuels/02_CADRAGE_HELIUM_OR_REPERE_COMMUN.md).

Avec une case binaire remplie par identité et par colonne, le nombre de lignes est nécessairement :

$$
M=(U_{\rm fenêtre}+D_{\rm fenêtre})/3.
$$

Cela donne **4 lignes pour He et 197 pour Au**. Ce résultat découle de l'hypothèse de comptage ; il ne démontre ni 4 ou 197 sillons physiques, ni l'identité sillon=nucléon. Ces lignes ne sont pas les 2 et 79 électrons. Si les comptes de référence doivent être retrouvés à chaque colonne plutôt qu'au total, cette réduction par trois ne s'applique pas.

Pour construire un exemple lisible, GPT ajoute trois choix : des marges identiques aux trois colonnes ; un UP suivi d'un DOWN à la lecture suivante ; la possibilité qu'un DOWN reste DOWN avant un rebond ultérieur. Ils ne sont pas de nouvelles validations de Gabriel. Le maintien DOWN/DOWN dans le cas lourd est précisément une hypothèse supplémentaire à éprouver.

## Hélium-4 : un agencement simple

**[INFÉRENCE GPT — NON VALIDÉE] — exemple sous les hypothèses précédentes.**

| Identités de suivi | Nombre | t=x−1 | t=x | t=x+1 |
|---|---:|---|---|---|
| S001–S002 | 2 | DOWN | UP | DOWN |
| S003–S004 | 2 | UP | DOWN | UP |
| Total à cette lecture | 4 | 2 UP, 2 DOWN | 2 UP, 2 DOWN | 2 UP, 2 DOWN |

Au total de la fenêtre : **6 UP et 6 DOWN**. Chaque UP intérieur peut avoir le DOWN précédent de sa propre identité comme unique soutien. À chaque raccord, deux DOWN soutiennent deux UP. C'est une affectation conjointe dans le repère fixe ; elle ne suppose pas deux électrons dont on décale librement les cycles. L'égalité des comptes ne prouve pas une symétrie spatiale ou la stabilité de He.

## Or-197 : un agencement avec contributions doubles

**[INFÉRENCE GPT — NON VALIDÉE] — exemple retenu, pas solution unique.**

| Identités de suivi | Nombre | t=x−1 | t=x | t=x+1 |
|---|---:|---|---|---|
| S001–S092 | 92 | DOWN | UP | DOWN |
| S093–S171 | 79 | UP | DOWN | UP |
| S172–S184 | 13 | UP | DOWN | DOWN |
| S185–S197 | 13 | DOWN | DOWN | UP |
| Total à cette lecture | 197 | 92 UP, 105 DOWN | 92 UP, 105 DOWN | 92 UP, 105 DOWN |

Chaque ligne suit les mêmes identités. Ces regroupements résument leurs séquences dans cette fenêtre et ne sont pas des populations permanentes. Chaque case possède exactement un état. Le nombre d'occurrences dans la fenêtre vaut :

$$
U=3\times92=276,\qquad D=3\times105=315,\qquad D-U=39.
$$

Le choix de conserver l'excès de DOWN à chaque colonne n'est pas imposé par RV19 ; il fournit ici une construction possible répondant à la question historique RV14.

### Comment raccorder les DOWN aux UP

**[INFÉRENCE GPT — NON VALIDÉE]** Dans cet exemple, chaque DOWN contribue exactement une fois par raccord. Chaque futur UP inclut son propre DOWN parmi ses soutiens. Tous les liens sont énumérés dans le [résultat du calcul](calculs/RESULTATS_REPARTITION_REBONDS.json).

Entre x−1 et x : S001–S092 passent de DOWN à UP. Les treize DOWN S185–S197 apportent chacun un soutien supplémentaire, respectivement à S001–S013. Par exemple, **S001(DOWN) et S185(DOWN) soutiennent S001(UP)**. S185 reste DOWN en x et demeure identifiable ; la relation de soutien ne le fait pas disparaître.

Entre x et x+1 : S093–S171 et S185–S197 passent de DOWN à UP. Les treize DOWN S172–S184 apportent chacun un soutien supplémentaire, respectivement à S185–S197. Par exemple, **S185(DOWN) et S172(DOWN) soutiennent S185(UP)**. S172 reste DOWN en x+1.

À chacun de ces deux raccords, on peut ainsi former **79 rebonds soutenus par un DOWN et 13 rebonds soutenus par deux DOWN** :

$$
79+13=92\text{ UP},\qquad79+2\times13=105\text{ contributions DOWN}.
$$

Les nombres 79 et 13 résultent des marges choisies et du choix de n'utiliser que des soutiens simples ou doubles, chaque DOWN une seule fois. Leur occurrence ne prouve pas un lien avec les 79 électrons, une force ni un budget énergétique. Choisir précisément ces partenaires par numéros est une convention de construction ; la proximité réelle dans 4df reste à calculer.

## Ce que les contraintes déterminent, et ce qu'elles ne déterminent pas

**[INFÉRENCE GPT — NON VALIDÉE] — résultats mathématiques conditionnels.** Sous les marges 92 UP/105 DOWN à chaque colonne et l'absence de deux UP adjacents, les cinq motifs possibles sont DUD, UDU, UDD, DDU et DDD. Les multiplicités admissibles sont :

$$
(n_{DUD},n_{UDU},n_{UDD},n_{DDU},n_{DDD})
=(92,b,92-b,92-b,b-79),\quad79\le b\le92.
$$

Il existe donc **14 solutions de multiplicité**, avant même de choisir les identifiants et les liens de soutien. L'exemple prend b=79 afin que toutes les lignes aient un UP dans la fenêtre. Cette préférence de lisibilité ne définit pas une loi naturelle.

Une autre répartition, avec **118 DUD et 79 UDU**, respecte elle aussi les totaux 276 UP/315 DOWN. Ses marges sont 79 UP/118 DOWN, puis 118 UP/79 DOWN, puis 79 UP/118 DOWN : l'asymétrie s'inverse au centre. Les totaux cumulés seuls ne choisissent donc pas les marges. Une alternance stricte sur toutes les identités échoue à maintenir des marges asymétriques identiques d'une colonne à l'autre ; elle les échange. La persistance de certains DOWN est nécessaire dans le candidat à marges constantes présenté ici.

## Test du raccord avec l'hydrogène

**[GABRIEL_VALIDÉ]** Un adressage de H suit DUD dans le repère confirmé en [RV07](visuels/JOURNAL_REVISION_VISUELLE.md#rv07). Ce résultat reste prioritaire dans sa portée locale.

**[OUVERT] — point de contrôle indispensable.** DUD compte 1 UP et 2 DOWN, alors que le proton a pour inventaire de valence 2u et 1d. Si l'on identifie directement ce seul adressage à la ligne unique portant tout l'inventaire du proton dans la même fenêtre, le raccord échoue. Le calcul ne remplace donc pas DUD par UDU pour sauver cette identification. Il faut définir le lien entre l'adressage électronique de H, les identités nucléaires suivies et la mesure qui donne l'inventaire de valence. Ce contrôle empêche de promouvoir l'hypothèse des totaux cumulés en règle universelle déjà acquise.

## Vérification et suite

Le [calcul reproductible](calculs/VERIFICATION_REPARTITION_REBONDS.py) vérifie toutes les identités, les 603 cases des deux exemples, les marges, les 214 liens de soutien des deux raccords, l'éligibilité DOWN→UP, le nombre de soutiens par UP, les 14 solutions, l'alternative strictement alternée et le défaut du raccord direct avec H. [Résultats](calculs/RESULTATS_REPARTITION_REBONDS.json).

Les 603 cases sont 4×3+197×3 ; elles ne sont pas 603 objets. De même, une lecture commune à deux fenêtres superposées ne doit être comptée qu'une fois lorsque l'on réunit leurs événements. Le présent calcul traite une seule fenêtre ; il ne démontre pas une fermeture périodique ou un équilibre dynamique du noyau.

**[OUVERT]** Définir la mesure reliant les états V3 aux inventaires connus, sélectionner les soutiens par la géométrie/proximité, puis démontrer une continuation stable dans T. Voir la [dette D19](07_DETTES_ET_TESTS_ADVERSARIAUX.md#d19). La nouvelle règle permet déjà de construire et de tester des répartitions ; elle ne sélectionne pas encore une solution physique unique.

[Retour au synchronisme](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md) · [Atlas](visuels/00_ATLAS_VISUEL_V3.md)

## Continuation : lien orbital proposé par Gabriel

[RV21](visuels/JOURNAL_REVISION_VISUELLE.md#rv21) propose un lien entre orbitales occupées et rebonds doubles. Le [chapitre 12](12_ORBITALES_OCCUPEES_ET_REBONDS_DOUBLES.md) établit que R₁=Z et R₂=(N−Z)/3 sont déjà des conséquences des hypothèses comptables de cette grille ; le nombre 13 n'était pas une sortie d'un calcul orbital. Au possède aussi treize sous-couches fermées. L'égalité entre ces deux comptes ne se généralise pas à He/Pt. Le mécanisme de compatibilité entre orbitales et soutiens reste **[OUVERT]** ; la nouvelle proposition de Gabriel n'est pas une validation globale de I35/I36.

## Suite RV40 — portée de la dépendance réciproque

**[V3 — GABRIEL, à verrouiller]** Un DOWN existe grâce à un UP et inversement ; DOWN permet l'injection de e dans 4df(x) pour un UP d'adressage. Voir le [verbatim et sa lecture proposée](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md#dependance-reciproque).

La relation B et les motifs de ce chapitre restent des hypothèses GPT. La dépendance réciproque ne fixe ni les partenaires, ni une bijection, ni une égalité des comptes dans les colonnes. En particulier, « un DOWN dépend d'un UP » ne suffit pas à interdire les DOWN persistants en exigeant un UP dans la colonne immédiatement précédente. Il faudra préciser cette portée avant de tester de nouvelles contraintes sur les grilles. Aucun calcul existant n'est modifié ou annoncé comme nouvellement validé.

**Correction RV42/RV44 de la portée de RV40.** [V3 — GABRIEL, à verrouiller] : l'injection d'énergie peut produire un DOWN sans UP préalable, suivi d'un rebond UP. Voir [06](06_ACCELERATEURS_FUSION_REFUSION_SILLONS.md#down-injecte). La formule de réciprocité archivée ci-dessus ne doit plus devenir une contrainte universelle sur les DOWN entrants. La distinction proposée entre amorçage et maintien est une inférence ; les grilles antérieures et leurs valeurs ne sont pas recalculées ou validées par cet ajout.

## Précision d'identité avant reprise des comptes — RV131

Gabriel décrit, pour l'hydrogène, **un seul sillon** dont les quarks sont la traduction dans les trois états temporels de l'existence : [V105/V106](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#sillon-unique-traduction-quarks). Une lecture d'état ne doit donc pas devenir sans justification un sillon supplémentaire dans cet exemple. La correspondance précise entre lectures, noms des quarks et identités suivies reste à définir avant de reprendre D19. Cette précision ne recalcule pas les grilles antérieures et ne les transforme pas en prédictions physiques.
