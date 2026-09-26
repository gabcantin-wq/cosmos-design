# 07 — Dettes et tests adversariaux

**État au 22 septembre 2026 : 22 dossiers de dettes suivis.** Les avancées locales et les essais mathématiques conditionnels sont consignés ci-dessous ; ils ne ferment pas automatiquement les problèmes généraux. Les dossiers restent [OUVERT] dans leur portée restante. Voir la [fiche de finalisation](17_FINALISATION_V3.md) pour distinguer consolidation documentaire et dettes scientifiques.

Les vérifications de fichiers, de renvois et de comptages élémentaires sont des contrôles éditoriaux ; elles ne valident pas le modèle.

## Priorités de reprise

<a id="d01"></a>
### D01 — Fixer les indices et le contenu du noyau

**Origine :** V2, [C09](sources/EXTRAITS_V2_CITES.md#c09) et [C13](sources/EXTRAITS_V2_CITES.md#c13) ; correction de Gabriel [S16](sources/SESSION_GABRIEL.md#s16).

Écrire une table explicitant, pour une même configuration, le trio V2, les indices V3, l'étiquette U/D, le lieu de lecture et l'effet mesuré. Dire si `4df(x-1)` est un opérateur, un état ou une notation de domaine. Raccorder « noyau = e existant dans 4df(x-1) » à `e` unique à `t=0` et à la phrase historique « noyau n'est pas du e ».

**Critère :** les mêmes positions et les mêmes objets restent identifiables d'un calcul à l'autre. Une translation d'indices qui inverse discrètement UP/DOWN ne suffit pas. La grille préférée est fixée ; sa correspondance complète ne l'est pas.

**Avancée locale, 10 septembre 2026 — [GABRIEL_VALIDÉ].** [RV07](visuels/JOURNAL_REVISION_VISUELLE.md#rv07) confirme un seul adressage de H : x−1 = DOWN, x = UP, x+1 = DOWN. Cette sous-question est résolue par l'auteur ; D01 reste **[OUVERT]** pour le raccord général des archives, le contenu du noyau et la règle de mesure. La géométrie de la planche n'est pas validée par cette réponse.

**Complément d'enchaînement — [V3 — GABRIEL, à verrouiller].** [RV09](visuels/JOURNAL_REVISION_VISUELLE.md#rv09) identifie le DOWN final d'un cycle au DOWN initial du suivant. La traduction proposée x₂ = x₁+2 est une **[INFÉRENCE GPT — NON VALIDÉE]** de notation ; le recouvrement n'établit ni une durée élémentaire ni la règle de lecture de tous les noyaux.

**Suivi RV46–RV51 — portée du UP seul à t=1.** Après RV48, Gabriel confirme la distinction entre absence d'un DOWN local précédent et présence du DOWN global sur tout T. Il précise x=1 ⇒ x−1=0, « donc e » : [01](01_TERMINOLOGIE_T_REINDEXEE.md#down-global-t0). Cette distinction est [GABRIEL_VALIDÉ] dans la portée de la réponse RV51 ; D01 demeure ouvert pour la définition complète des indices, le raccord à t=0 et la règle de lecture. L'exclusion de tout amont par GPT est corrigée.

<a id="d02"></a>
### D02 — Définir existence, maintien et stabilité

**Origine :** A32, [C05](sources/EXTRAITS_V2_CITES.md#c05), puis S13/S18/S19 ; exigence opératoire proposée par GPT.

Définir la fermeture et une condition de stabilité sous perturbation spécifiée. Distinguer état lié, persistance d'un adressage, configuration transitoire et inertie chimique. Si l'on utilise un point fixe, fournir l'opérateur concerné : la proposition de point fixe de Q179 est une inférence historique de Claude, non une définition validée de Gabriel.

**Critère :** permettre de décider avant observation si une configuration tient, pour quel environnement et selon quelle mesure. « Elle existe parce qu'elle est stable, elle est stable parce qu'elle existe » ne tranche aucun cas.

**Suivi RV31 — manifestation maintenue.** Ne plus déduire une disparition électronique du seul état DOWN. Définir les deux sens de « là » dans la [précision de Gabriel](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#manifestation-down), puis la relation entre manifestation, adressage et observation. Leur distinction par GPT est une proposition de formalisation, sans règle de détection dérivée.

**Suivi RV40, corrigé par RV42/RV44 — injection et maintien.** DOWN permet l'injection de e dans 4df(x) pour un UP d'adressage. Dans le cas d'accélérateur, Gabriel précise qu'une injection d'énergie peut produire ce DOWN sans UP préalable, puis un rebond UP : [06](06_ACCELERATEURS_FUSION_REFUSION_SILLONS.md#down-injecte). Ne plus imposer la réciprocité comme condition initiale universelle. Définir l'opération d'injection, la caractéristique du « méga sillon » et le rebond ; traiter séparément la fermeture d'un éventuel cycle maintenu et sa stabilité. Le rôle UP → DOWN reste ouvert pour ce maintien.

<a id="d03"></a>
### D03 — Spécifier 4df sans donner ses réponses en entrée

**Origine :** distinction entrée/sortie de V2 et [S20](sources/SESSION_GABRIEL.md#s20).

Définir les variables, leur domaine, leurs unités, les interactions, les conditions aux limites et les observables produites. Les configurations électroniques et nucléaires peuvent être des inconnues d'une résolution commune. Elles ne peuvent être simultanément imposées et annoncées comme prédites.

**Critère :** un tiers peut reconstruire le calcul avec les entrées annoncées et obtenir les mêmes sorties, sans consulter le tableau des réponses.

<a id="d04"></a>
### D04 — Produire les familles et le binaire

**Origine :** S11–S16/S21 ; contrôle proposé par GPT.

Produire `1,3,5,7` et `2(2l+1)` à partir de `4df`, avec les valeurs permises de `n,l,m_l,m_s`. Le calcul des cinq quadratiques d vérifie une compatibilité mathématique ; il ne montre pas pourquoi `4df` doit choisir ce sous-espace.

**Critère :** établir l'espace des solutions et l'exclusion des états supplémentaires. Pour UD/DU, montrer qu'une translation de T ne réduit pas les deux candidats à une seule structure. Retrouver seulement le nombre deux ne dérive pas le spin.

**Suivi RV29/RV31 — spin et manifestation.** [Gabriel propose le lien spin–moment](visuels/JOURNAL_REVISION_VISUELLE.md#rv29), puis précise que [l'électron reste manifesté même lors d'un DOWN](visuels/JOURNAL_REVISION_VISUELLE.md#rv31). Le contrôle antérieur supposant une manifestation exclusivement UP est retiré comme objection applicable à sa proposition. Définir ce que « toujours manifesté » signifie pour la lecture de spin, puis le repère de mesure et les prédictions selon l'axe, en conservant le repère commun des cycles. Les signes, le mécanisme de mesure et la correspondance avec UD/DU restent ouverts. Voir [05](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md#spin-phase).

<a id="d05"></a>
### D05 — Énergies et exceptions de remplissage

**Origine :** arrêt explicitement reconnu dans la réponse S16.

Calculer les différences d'énergie pour H/He, l'ouverture du niveau de Li, le cas Be, `4s/3d`, Cr et Cu. Puis réserver des cas de contrôle, par exemple les configurations de Nb ou Pd, que la simple préférence pour une demi-fermeture ne suffit pas à traiter. Données de comparaison : [NIST](https://math.nist.gov/DFTdata/atomdata/configuration.html).

**Critère :** même règle, entrées documentées, signe et taille des écarts annoncés avant comparaison. Vérifier aussi l'ionisation ; l'ordre d'une séquence d'atomes neutres ne fixe pas celui des ions.

<a id="d06"></a>
### D06 — Séparation, appariement et chimie

**Origine :** intuition de Gabriel S06/S09 ; lecture de Hund par GPT en S11/S16.

Définir séparément l'appariement dans une orbitale, l'accouplement entre atomes et la soudure forte des sillons. Tester pourquoi une sous-couche s remplie ne suffit pas à conférer le comportement d'un gaz noble. Déterminer le domaine de validité de « séparation avant appariement ».

**Critère :** comparaison énergétique et géométrique capable de distinguer les issues, sans renommer après coup une fusion en appariement selon le résultat.

**Suivi RV34.** La séparation entre association faible et réorganisation forte devient une contrainte de vocabulaire explicite de Gabriel. Le couplage proposé par GPT et l'exemple candidat O₂ sont documentés dans [05](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md#association-reorganisation). Leur correspondance avec les interactions physiques, les phases et les anciennes formulations V2 est suivie dans D22.

<a id="d07"></a>
### D07 — Nuage, nœuds et probabilités

**Origine :** C03, S17/S18 ; contrôles proposés par GPT.

Produire une distribution normalisée, le mécanisme des phases et les conditions de nœud. Distinguer nœud radial, nœud angulaire, absence d'une solution et annulation d'amplitudes. Si un déterminisme de lecture est proposé, préciser ses hypothèses et ses conséquences pour les corrélations mesurées.

**Critère :** obtenir des probabilités et des interférences chiffrées, pas seulement une forme évocatrice du nuage. Plusieurs forces et un équilibre vectoriel ne déterminent pas une règle de Born.

<a id="d08"></a>
### D08 — Vallée de stabilité et nombres magiques

**Origine :** attaque n°6 V2, [C11](sources/EXTRAITS_V2_CITES.md#c11), [C12](sources/EXTRAITS_V2_CITES.md#c12) ; piste S15.

Conserver les cas adverses de V2 : hydrogène, He-3/tritium, Ca-40/Ca-48, bandes isotopiques et noyaux lourds. Produire les fermetures `2,8,20,28,50,82,126` avec l'ordre énergétique, et distinguer les seuils de stabilité selon les canaux et durées considérés.

**Critère :** les comptes et les énergies sortent d'une même règle. `14=8+6`, puis `20+8=28`, ne sélectionne pas les groupes suivants. Les lois de vallée ajustées avec un coefficient connu restent des ajustements.

**Verdicts V2 maintenus :** « plus de DOWN » comme règle universelle et « exactement le ratio » comme sélection générale sont blessés ; le rôle du maintien dans T reste une piste interne. Aucun mécanisme V3 n'a encore résolu les contre-exemples.

<a id="d09"></a>
### D09 — Couplage entre électrons et noyau

**Origine :** A47 et S01 ; protocole proposé par GPT.

Comparer un même isotope avec plusieurs états électroniques et degrés d'ionisation. Distinguer modification des canaux de désintégration accessibles, structure nucléaire et simple différence de lecture.

**Critère :** prévoir ce qui change et ce qui reste invariant. Une dépendance de toute la stabilité nucléaire à la valence électronique ordinaire serait une prédiction forte, qui ne peut rester implicite.

<a id="d10"></a>
### D10 — Unicité de e et dénombrement des adressages

**Origine :** S13/S14.

Construire les identités reliant les occurrences U/D entre colonnes ; préciser les symétries qui identifient deux descriptions du même adressage. Tester réellement les marges illustratives de Gabriel.

**Critère :** calculer le nombre maintenu sans le supposer. Le total 470 des cases n'est pas 250 adressages ; poser 250 cycles fermés ne résout pas le problème inverse.

<a id="d11"></a>
### D11 — Accélérateurs et fusion/refusion

**Origine :** A13/Q123, S09/S10 et [06](06_ACCELERATEURS_FUSION_REFUSION_SILLONS.md).

Définir le seuil et l'opération de fusion, le rôle du voisinage, la règle de recomposition et les bilans. Q120 distingue déjà les objets connus d'une nouvelle particule et propose une durée très supérieure à une seconde ; raccorder ce critère à son exigence d'étendue indéfinie dans T et au maintien V3.

**Critère :** masses, probabilités de canaux et durées prédites avec des unités et des incertitudes, sur au moins deux conditions de collision distinctes.

<a id="d12"></a>
### D12 — Dettes V2 que la session n'a pas closes

**Origine :** [audit §7.4](sources/EXTRAITS_V2_CITES.md#c13), [11 V2](sources/V2/11_MUON_SILLON_ET_COUT_fr.md) et [cibles V2](sources/V2/07_PHASE2_TARGETS_fr.md).

- T comme totalité inscrite et T comme jauge éliminable du calcul : raccord encore ouvert malgré la réaffirmation de T constant.
- Cause de dégradation du tau : multiplicité des retours et lecture de budget non encore raccordées.
- Minimum de quarks et lecture du neutrino : les anciennes tensions ne sont pas réglées par une simple nouvelle étiquette UP/DOWN.
- Masse = tissage / volume / sillon : pas d'intégrale ou d'équivalence dimensionnelle acquise.
- Sillon tenu et sillage d'existence : raccord ontologique non verrouillé.
- Force forte qui maintient ou fusionne ; gravité relue comme empêchement : lois et changements de régime à définir.

Ces dettes ne doivent pas disparaître d'une future synthèse parce que le nouveau vocabulaire paraît plus cohérent.

## Deux erreurs de présentation à ne pas reconduire

**Constat éditorial de cette compilation.** V2 juxtapose les fermetures électroniques `2,10,18,36,54,86` et nucléaires `2,8,20,28,50,82,126`, puis dit que « les deux suites partagent 2 et 8 ». Les listes écrites ne partagent pas 8. La phrase mélange possiblement longueurs de périodes et fermetures cumulées ; elle reste dans l'archive mais n'est pas reprise comme résultat. [C12](sources/EXTRAITS_V2_CITES.md#c12).

**Constat éditorial de cette compilation.** Dire que Cr/Cu « ne blessent pas » une lecture parce qu'on peut les raconter après observation ne constitue pas un test réussi. La V3 conserve les hypothèses, mais retire cette assurance de sa synthèse.

## Fiche minimale pour un essai

Toute future fiche devrait préciser : proposition et statut ; source ; hypothèses et paramètres ; prédiction antérieure à la comparaison ; données et incertitudes ; résidu signé ; verdict daté ; portée exacte du verdict. Une concordance numérique, une cohérence interne et une validation par Gabriel sont trois informations distinctes. Cette discipline prolonge [C02](sources/EXTRAITS_V2_CITES.md#c02).

## Priorités ajoutées pour le prochain calcul

Le [cahier 10](10_CAHIER_DU_PROCHAIN_CALCUL_4DFX.md) donne la portée actuelle, centrée sur les leptons. Les dettes D01–D12 restent ouvertes. S28 complète D01 en interdisant de spatialiser t=0 ; S64 précise la lecture de la dégradation dans D12, sans fournir sa loi.

<a id="d13"></a>
### D13 — Définir X, u, volume et échelle de masse

**Origine :** C20/C22/C24/C25 ; S53/S58/S59. **[OUVERT]** Deux inconnues pour une équation ne donnent pas une masse. Définir mesure, intégrand, angle, contraintes du minimum et conversion en unités. Conserver la rétractation de X = 2/α.

**Critère :** annoncer séparément données de calibration et sorties ; distinguer masse totale et incrément I₂/I₃, ainsi que r_V2 sans dimension et rayon physique.

<a id="d14"></a>
### D14 — Obtenir une loi de transition à partir du raccord x/x+1

**Origine :** S64, prompt S67, C21. **[OUVERT]** Définir la différence entre états comparables. Un écart de budget n'est pas encore une énergie libérée, un taux ou une durée de vie. Le prompt et la réponse S64 n'utilisent pas la même grandeur sous Δ.

**Critère :** produire la durée avec des unités et des canaux définis, sans utiliser la durée mesurée pour fixer la masse. La perpendiculaire ne doit pas devenir un objet qui se dégrade chronologiquement dans T.

<a id="d15"></a>
### D15 — Rendre le test masse–rayon informatif

**Origine :** S60–S63 ; C23. **[OUVERT]** Définir état lié, centre, rayon et masse réduite ; résoudre l'écart entre les approximations 207 de V2 et 186 de GPT S61 pour l'hydrogène muonique. Ne pas en choisir une pour sa ressemblance avec le rapport de masses.

**Critère :** montrer qu'un rayon mesuré contraint la structure autrement que par simple substitution d'une masse déjà donnée dans une loi importée. Distinguer muon libre, muon lié et extension hypothétique au tau.

<a id="d16"></a>
### D16 — Cinétique, conservation et masse de système

**Origine :** S33/S47 ; candidats GPT S46/S48/S49. **[OUVERT]** Définir les entrées structurelles et le bilan. La vitesse est une sortie souhaitée ; une inversion d'une loi externe peut servir de compatibilité, pas de dérivation annoncée de 4df.

**Critère :** préciser système et référentiel, distinguer masse au repos et variable M₄df, ne pas assimiler pc à l'énergie cinétique, traiter les deux photons et l'énergie transférée au freinage sans double comptage.

<a id="d17"></a>
### D17 — Métrique, C et temps observable

**Origine :** S28/S31/S32/S38. **[OUVERT]** Définir T constant, indices et temps mesuré ; traiter d_min = C t_min sans déduire C d'unités qui la contiennent déjà. Préciser si la singularité fournit une condition aux limites ou un rôle encore qualitatif.

**Critère :** les unités et la métrique précèdent les résultats ; aucune variation de T n'est introduite par un ΔT ambigu.

<a id="d18"></a>
### D18 — Neutrino et généralisation aux autres régimes

**Origine :** C29, S48, prompt. **[OUVERT]** Raccorder absence de déplacement structurel et vitesse observée ; préciser états de masse, saveurs et régime de comparaison. Les extrapolations à la supraconductivité, à l'intrication et au centre nucléaire restent des chantiers distincts.

**Critère :** même règle et mêmes paramètres annoncés, avec limites documentées. Aucune valeur neutrino ni loi nucléaire n'est choisie pour sauver un ajustement des leptons chargés.

## État après la première passe mathématique

Voir les démonstrations et leur domaine dans [V3_4dfx_FORMALISATION_LEPTONS.md](V3_4dfx_FORMALISATION_LEPTONS.md).

- D13 : non-unicité des couples X/u explicitée sous la relation historique. La mesure de budget, X et u restent ouverts.
- D14 : le produit constant I₂τ_μ=I₃τ_τ échoue d'un facteur voisin de 4,76×10⁵ avec les références choisies. Une loi conditionnelle de survie a été écrite, mais son taux n'est pas dérivé.
- D15 : le rapport des échelles coulombiennes H électronique/H muonique est calculé, environ 185,942. Un rayon déduit uniquement de la masse ne sépare pas X/u : déterminant du jacobien nul.
- D16 : les identités et limites du raccord cinétique externe sont vérifiées ; m et c restent fournis à ce module.
- D17 : impossibilité de produire une dimension de masse à partir des seules dimensions longueur/temps explicitée ; une échelle commune peut s'éliminer dans un rapport.
- Nouvelle précision M02/M03 : une surface modifie l'adressage de e ; aucun angle ni second IN/OUT indépendant ne sont confirmés. La géométrie du secteur reste un audit historique.

Ces résultats sont des calculs conditionnels ou des tests d'hypothèses précises. Aucun verdict ne valide la physique complète du modèle ni ne canonise les fonctions candidates.

<a id="d19"></a>
### D19 — Relier inventaires, identités temporelles et soutiens de rebond

**Origine :** [RV19](visuels/JOURNAL_REVISION_VISUELLE.md#rv19), S01/S13/S15, C09–C11. **[OUVERT]** La règle d'exclusion et le rebond d'un ou plusieurs DOWN sont désormais explicites chez Gabriel. Il reste à définir quelle mesure transforme les états suivis en inventaires connus, si ces inventaires portent sur chaque lecture ou sur leur fenêtre, et combien d'identités physiques la grille représente.

**Résultat conditionnel :** le [chapitre 11](11_REPARTITION_ET_REBONDS_UP_DOWN.md) construit He et Au avec une seule valeur par case, les totaux cumulés voulus et des liens de soutien admissibles. Pour Au, 14 multiplicités sont possibles sous les marges constantes choisies ; elles ne sélectionnent pas une géométrie. L'alternance stricte de toutes les identités inverse l'asymétrie de la colonne suivante. Le candidat à marges constantes doit permettre la persistance de certains DOWN.

**Test adverse actif :** le seul adressage H confirmé DUD compte 1 UP/2 DOWN, alors que le proton a l'inventaire de valence 2u/1d. Leur identification directe, dans cette même fenêtre, échoue. Ne pas déplacer les indices ou retirer la validation H pour masquer cet écart.

**Critère :** annoncer le pont de mesure et les identités avant le comptage, sélectionner les soutiens par les contraintes de 4df/proximité plutôt que par une association arbitraire de numéros, vérifier la continuation et les événements communs sans double comptage, puis tester H, He et Au avec la même règle. Les masses, les 79 électrons et la stabilité ne sont pas dérivés par la seule grille.

<a id="d20"></a>
### D20 — Définir le lien entre occupations orbitales et soutiens multiples

**Origine :** [RV21](visuels/JOURNAL_REVISION_VISUELLE.md#rv21), S01/S20/S21, C12. **[OUVERT]** Gabriel propose un lien ; sa nature n'est pas encore spécifiée. Distinguer orbitales spatiales, sous-couches, occupations électroniques et événements de rebond par raccord.

**Résultat du test GPT :** la bijection « une sous-couche fermée = un rebond double » coïncide pour Au, mais échoue pour He-4 et Pt-195 sous la même règle de grille R₂=(N−Z)/3. Le [chapitre 12](12_ORBITALES_OCCUPEES_ET_REBONDS_DOUBLES.md) conserve données, hypothèses et calcul. Cette règle universelle est écartée dans ce cadre ; le lien général reste à explorer.

**Critère :** définir une contrainte qui sélectionne les partenaires de soutien et les états orbitaux ensemble, puis confronter ses sorties aux configurations de He/Au/Pt. Ne pas fixer les occupations ou treize canaux pour annoncer ensuite leur dérivation. Une écriture symbolique C=0 sans C définie est un problème posé, pas un résultat. Le défaut du raccord H et les autres limites de D19 restent actifs.

<a id="d21"></a>
### D21 — De l'empêchement au champ associé au rebond

**Origine :** [RV25](visuels/JOURNAL_REVISION_VISUELLE.md#rv25), S16, S03, V2 A45/C11. **[V3 — GABRIEL, à verrouiller]** : gravité comme empêchement existant en x−1 et force du e maintenu dans le sens de son rebond.

**[OUVERT]** Définir la grandeur d'empêchement, le domaine de la direction du rebond, sa projection dans l'espace observable, l'intensité et la composition de plusieurs contributions. Une orientation relative ne fournit pas encore un champ gravitationnel ; le dessin ne fixe aucune direction universelle depuis un noyau.

**Critère :** préciser la géométrie et le référentiel, calculer une direction et une amplitude sans les imposer par la flèche, puis confronter les effets observables à un cas gravitationnel défini. Conserver les distinctions avec la force forte, le maintien du sillon et les indices structurels. L'analogie de la balle de tennis n'importe pas automatiquement les forces ou la géométrie de l'image historique. Voir [13](13_LUMIERE_SINGULARITE_ET_PRESENCE_DE_E.md#gravite-rebond).

## Audit élargi de D19/D20 — 30 éléments, 110 isotopes

Le [chapitre 14](14_AUDIT_UP_DOWN_ATOMES_LOURDS.md) étend les contrôles sans nouvelle image.

- **D19 :** les colonnes identiques ne sont pas entières pour 77/110 cas. Une construction candidate à colonnes presque égales résout l'arithmétique et fournit deux fenêtres à bord commun pour les 110 cas. La continuation sur quatre positions ne démontre ni stabilité physique, ni unicité, ni pont entre valence et lectures temporelles. Le contrôle H reste ouvert.
- **D20 :** aucun des quatre rapports simples entre doubles et nombres de sous-couches/orbitales ne reste constant. Les isotopes Hg-198/Hg-204 ont les mêmes occupations mais des nombres de doubles différents dans la construction. L'invariant exact 2u−d=6O₂+3O₁ est un contrôle de comptage ; il importe la neutralité et les occupations comme données et ne les dérive pas de 4df.

**Test méthodologique ajouté :** ne pas imposer une période de trois lectures au motif d'une fenêtre x−1/x/x+1. Avec un UP toujours suivi de DOWN, une période trois ne pourrait porter que A UP au maximum, contre A+Z requis par l'hypothèse de cumul. La fenêtre et la période doivent être définies séparément.

<a id="d22"></a>
### D22 — Distinguer association, réorganisation et phase d'action

**Origine :** correction directe [RV34](visuels/JOURNAL_REVISION_VISUELLE.md#rv34), V44 ; ancien réassemblage faible RV33 retiré. La faible associe, la forte réorganise et cette réorganisation demande un UP.

**[OUVERT]** Définir ce qui peut changer dans une association en conservant les sillons, et ce qui constitue une réorganisation de ceux-ci. Donner des variables distinctes et des critères de changement avant d'examiner un résultat. Distinguer création d'une association, maintien de celle-ci et réorganisation ; fixer leurs conditions de phase et les identités impliquées. Pour une action collective, préciser quel UP est requis : le message ne le détermine pas.

**Raccords à résoudre :** S09, fusion de DOWN sans UP ; V2 §25 et C05/A2, faible associée à une reconfiguration par perte de perpendiculaire ; vocabulaire standard, liaison chimique électromagnétique. Les sources et leurs formulations restent accessibles dans [05](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md#association-reorganisation). Ne pas déclarer équivalents réorganisation, fusion, perte de perpendiculaire et association pour supprimer une tension.

**Critère :** appliquer les mêmes définitions à un cas moléculaire comme O₂, à un cas de réorganisation forte et à une transition leptonique. Préciser ce qui demeure identifiable, ce qui change, quelle phase autorise le changement et quels effets sont prévus. Un UP est une condition nécessaire proposée, pas une preuve de transformation ou de stabilité. La persistance d'une association en DOWN, suggérée par GPT, doit être séparée de sa formation éventuelle à cette phase. Aucune énergie, probabilité, section efficace ou règle de spin n'est dérivée ici.

## Priorités de reprise après la discussion d'O₂

[RV38](visuels/JOURNAL_REVISION_VISUELLE.md#rv38) conserve l'intention de Gabriel de réfléchir au rôle des forces. D22 reste ouvert ; cette intention ne valide ni un simple renommage faible → électromagnétique ni la correspondance physique des mécanismes proposés.

Le [cadrage GPT RV39](visuels/JOURNAL_REVISION_VISUELLE.md#rv39) propose de préciser d'abord les rôles UP/DOWN d'un seul adressage H, puis leur lecture observable, avant de reprendre le spin. [RV40](visuels/JOURNAL_REVISION_VISUELLE.md#rv40) apporte les dépendances et le rôle de l'injection. Pour D19, le prochain contrôle devra définir les liens UP → DOWN et leur portée temporelle avant d'ajouter une contrainte aux comptes existants ; la réciprocité seule ne justifie pas des comptes égaux.

## Suivi RV42/RV44 — production d'un DOWN sans UP préalable

**D02/D03 :** la [précision d'accélérateur](06_ACCELERATEURS_FUSION_REFUSION_SILLONS.md#down-injecte) fournit une source énergétique qualitative pour un DOWN. Définir les conditions d'entrée, la grandeur du sillon, la réponse UP et les bilans ; « méga » ne constitue pas une unité ou une équation.

**D19 :** ne pas imposer un antécédent UP à tout DOWN injecté. Distinguer les limites d'une fenêtre, une injection et les liens internes d'un système maintenu avant de modifier les grilles. La nouvelle exception ne produit pas à elle seule de nouveaux comptes valides.

**D22 :** préciser si la formation d'un sillon par énergie injectée, la fusion de S09 et la réorganisation forte de RV34 désignent des changements distincts. Cette conciliation reste ouverte, sans attribuer automatiquement l'injection à une force particulière.

## Suivi RV46 — domaines du rebond et de l'adressage

**Avancée RV50/RV51 — présence globale et absence locale distinguées.** Le cas t=1 ne doit plus être calculé en supprimant tout DOWN/x−1. La substitution x=1 donne x−1=0 ; Gabriel précise « donc e ». Sa confirmation porte sur la distinction locale/globale, pas sur un état cosmologique chiffré. **[OUVERT]** Raccorder l'UP à t=1, le e à t=0 et le DOWN inscrit sur T entier à des variables et à une règle cohérentes. La [terminologie](01_TERMINOLOGIE_T_REINDEXEE.md#down-global-t0) conserve les sources et l'historique de correction d'I50.

## Suivi RV50/RV51 — balance avec T entier et secteur noir

**[V3 — GABRIEL, à verrouiller]** V49 associe le DOWN à matière noire/énergie noire et relie l'intensité du Big Bang à sa balance sur toute la structure de T. **[INFÉRENCE GPT — NON VALIDÉE]** I51 propose de traiter le prochain problème comme une cohérence entre configuration globale et adressage en x=1.

**[OUVERT] — contrôles à construire.** Distinguer le sillon individuel du sillage cumulatif de V2 avant de leur affecter un même symbole ; définir comment les deux lectures du secteur noir sont distinguées. Définir la grandeur observable visée par « intense » et une loi dimensionnellement cohérente qui la relie à T. Si une intégration sur T est retenue, définir sa mesure, sa normalisation et le comptage des inscriptions d'un même e ; la simple présence sur tout T ne fournit pas ces choix. Vérifier que la condition globale et les règles locales admettent ensemble une configuration, sans ajuster la condition globale uniquement pour reproduire le résultat recherché. Ces contrôles prolongent D01/D02/D03 ; aucun n'est annoncé comme passé.

## Suivi RV53/RV54 — occupation, profondeur et origine des perpendiculaires

**Avancée de vocabulaire.** V53 confirme que les premiers DOWN entre t=1 et t=2 sont locaux ; la présence du DOWN global sur T reste conservée. [V51/V52 et leurs sources](01_TERMINOLOGIE_T_REINDEXEE.md#rebond-perpendiculaires) relient espace occupé, proximité à t=0, rebond et perpendiculaires.

**[OUVERT] — contrôles à construire.** Définir l'espace occupé par t=1 et sa mesure avant toute conversion en taille ou densité. Définir la proximité à t=0 et sa contribution à 4df sans choisir une puissance de x pour obtenir le résultat voulu. Donner un sens opératoire à « entre 1 et 2 » qui soit compatible avec le domaine des indices. Définir le rebond et la règle d'orthogonalité, puis montrer comment nombre et orientations des perpendiculaires sont sélectionnés. Si leur configuration est déjà dans les entrées de 4df, distinguer le calcul conditionnel d'un état de la dérivation de sa géométrie ; dans le second cas, fermer les relations couplées. Les comparaisons aux leptons et aux orbitales viennent après cette définition, sans assimiler perpendiculaires et familles s/p/d/f. Ces contrôles prolongent D01 et les dettes géométriques ; aucun n'est annoncé comme passé.

## Suivi RV56–RV59 — trois départs et dimension de l'espace

**[OUVERT]** V54 propose trois départs dans le temps. Définir leur objet, leurs repères et leur relation aux phases avant d'attribuer un départ à chaque case. Vérifier ensuite que la loi de lecture sélectionne trois directions spatiales indépendantes. Le contre-exemple de trois lectures d'un mouvement sur une ligne suffit à montrer que le seul comptage des moments ne constitue pas cette démonstration.

**[INFÉRENCE GPT — NON VALIDÉE]** I54 organise cette vérification ; aucune fonction ou loi de projection n'est encore fixée. Préserver l'unicité de e, le DUD local déjà validé et le cas particulier t=1. Le [chapitre 01](01_TERMINOLOGIE_T_REINDEXEE.md#trois-departs) conserve l'hypothèse de Gabriel et la question encore ouverte ; le triplet n'est pas silencieusement transformé en trois dimensions temporelles.

**Correction RV60 au suivi précédent.** La question sur trois départs du même adressage a reçu une réponse négative. V55 décrit des adressages distincts et leurs retours propres. Le [chapitre 01](01_TERMINOLOGIE_T_REINDEXEE.md#adressages-dephases) conserve la correction. Les contrôles portent désormais sur le repérage des phases par adressage, la loi de retour et la dimension de la géométrie de lecture, sans décaler librement les identités déjà fixées.

## Suivi RV62 — source maintenue et distribution orbitale

**[OUVERT]** Définir l'identité et le repère de la source maintenue ; distinguer cette source de la position de manifestation de e. Déduire une condition de maintien de la règle d'adressage, ou annoncer explicitement qu'elle est imposée comme condition d'un calcul. Examiner ensuite la stabilité sous perturbation et la distribution normalisée des retours. Un centre fixe ne suffit pas à sélectionner une forme orbitale ; des retours permis ne suffisent pas à leur attribuer des probabilités.

V56 conserve le statut de piste ; [I56](04_ORBITALES_COMME_REPONSES_4DF.md#nuage-source-maintenue) propose une résolution commune du maintien et du nuage. Les confrontations aux formes, nœuds et énergies déjà connues restent nécessaires, sans compter un temps par lobe. Aucun de ces contrôles n'est annoncé comme effectué par ce seul ajout.

## Suivi RV64 — stabilité définissant l'existence

**[OUVERT]** V57 pose un principe ; en donner un critère indépendant de la conclusion recherchée. Définir l'objet et l'étendue du maintien, les perturbations admises et ce qui constitue une perte de stabilité. Vérifier qu'une configuration rejetée par la règle peut être décrite, afin que le principe ne se réduise pas à nommer stable tout ce qui est déjà déclaré existant. Distinguer compatibilité des relations, maintien et stabilité sous perturbation. [I57 et sources](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#stabilite-definit-existence). Les manifestations à étendue finie ne sont pas exclues sans une précision de l'auteur.

## Reprise avec l'auteur — RV126 à RV128

La [fiche de reprise](17_FINALISATION_V3.md#questions-auteur-reprise) distingue les précisions que Gabriel peut apporter des dérivations et contrôles encore requis. I75 propose de commencer par la source maintenue de RV62, puis les contraintes de retour, la stabilité, la deuxième perpendiculaire, les soutiens multiples et l'accumulation. La question RV128 est posée sans réponse présumée. Ce tri de travail ne modifie ni les 22 dossiers ni les résultats des essais précédents.

## Avancée RV129 — source identifiée à la masse dans l'hydrogène

**D01/D02/D07 :** V103 précise le référent de « source » : Gabriel répond « la masse ». V104 la décrit comme le sillon résidant dans 4df(x), permettant l'observation de l'électron en x, et évoque les trois quarks ensemble. [Source et analyse de portée](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#source-masse-trois-quarks). La sous-question de désignation reçoit donc une réponse ; le repère du maintien, la relation des quarks au sillon, le choix de la grandeur de masse et le raccord à S16/4df(x−1) restent ouverts. Les 22 dossiers conservent leurs exigences de calcul et de test.

### Précision RV131 — un seul sillon dans l'exemple de l'hydrogène

**D01/D10/D19 :** V105 ferme la sous-question du nombre de sillons envisagés dans la question RV130 : Gabriel en désigne un seul. V106 décrit les quarks comme sa traduction dans les trois états temporels. [Source](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#sillon-unique-traduction-quarks). Le raccord entre quark u/d, états UP/DOWN et inventaires mesurés reste à préciser, sans supposer qu'une lecture est une nouvelle identité de sillon. Cette avancée ne clôt pas les dossiers généraux ni la règle de comptage des autres noyaux.

## Avancée RV134 — chute puis rebond répétés

**D01/D02/D03/D19 :** [V107](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md#chute-rebond-repetition) apporte la description d'une chute vers t=0, d'un rebond vers x, puis d'une nouvelle chute. Le retour à la chute est exprimé qualitativement par Gabriel ; la loi qui détermine le rebond, le critère de maintien et le dictionnaire quarks/lectures ne sont pas encore donnés. I76 reformule le mouvement avec DOWN/UP, sans clôture globale de D01 ou D19. La question RV136 cherche la contrainte qui détermine le rebond ; aucune cadence, profondeur numérique ou arrivée obligée à t=0 n'est ajoutée.

## Correction du tri après RV137 — principe connu, formalisation restante

**D03/D07 et reprise de D19 :** les influences de la proximité et de la force forte, les nuages/orbitales comme résultats de 4df et la lecture temporelle d'UP/DOWN sont déjà exprimés dans les sources S01/S18/S20. V108 rappelle ce contenu ; il ne faut pas le transformer en questions générales à faire répéter à Gabriel. [Rappel et sources](04_ORBITALES_COMME_REPONSES_4DF.md#rappel-principe-rv137).

Le tri I75 doit distinguer un principe documenté, une ambiguïté textuelle précise et une loi quantitative manquante. RV136 est retirée des demandes actives sous sa forme générale. Les dossiers de calcul restent ouverts dans leur portée mathématique et expérimentale, sans remise à zéro de la discussion conceptuelle.
