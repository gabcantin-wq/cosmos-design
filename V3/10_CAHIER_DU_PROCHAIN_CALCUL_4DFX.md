# 10 — Cahier du prochain calcul de 4df(x)

**Cahier conservé dans sa version de préparation.** La demande ultérieure de Gabriel a maintenant lancé le travail : [première passe mathématique](V3_4dfx_FORMALISATION_LEPTONS.md). Les mentions « non lancé » ci-dessous décrivent l'état de ce cahier à sa livraison initiale, pas l'état actuel du dossier.

**État : PRÉPARÉ — FORMALISATION NON LANCÉE.**

Gabriel a demandé de préparer le dossier pour le prochain calcul. Ce cahier organise les sources, les candidats déjà formulés et les critères de réussite ; il n'exécute pas le prompt. Voir le [cadrage dans Codex](sources/CADRAGE_GABRIEL_CODEX.md).

Le [prompt original joint](sources/PROMPT_CHANTIER_4DFX_ORIGINAL.md) est conservé octet pour octet. Il correspond au prompt rédigé par GPT à la fin de la [conversation S67](sources/SESSION_COMPLETE.md#s67). Son transfert par Gabriel fournit un cahier de travail souhaité, pas une validation globale de ses affirmations.

<a id="mission"></a>
## 1. Mission de la prochaine séance

Construire et tester une première formalisation de 4df(x), avec priorité aux leptons électron, muon, tau et neutrino. Chercher une relation explicite entre structure du sillon et observables de masse, quantité de mouvement, vitesse, rayon d'un état lié et durée de vie.

Le document futur demandé s'appellera **V3_4dfx_FORMALISATION_LEPTONS.md**. Il n'est pas créé comme résultat dans cette livraison. Il devra dire **NON DÉRIVÉ** pour chaque grandeur que les hypothèses ne permettent pas de calculer.

### Discipline commune

Les quatre statuts de la V3 demeurent exactement :

- **[GABRIEL_VALIDÉ]** : acquis attribué et sourcé, avec sa portée historique.
- **[V3 — GABRIEL, à verrouiller]** : proposition ou correction directe de Gabriel dans la session.
- **[INFÉRENCE GPT — NON VALIDÉE]** : correspondance, mécanisme ou équation de GPT.
- **[OUVERT]** : définition absente, raccord, contradiction ou test restant.

Les étiquettes différentes du prompt et de V2 restent dans leurs archives. Dans les nouveaux textes, un fait externe doit être identifié comme repère externe, avec sa source et son domaine. Une mention historique « canonique » ne dispense pas d'examiner son auteur et les rétractations. Une inférence de Claude conserve cette attribution.

## 2. Ordre de lecture utile

1. [README V3](00_README_V3.md), puis [09 — verbatims et conclusions pour calcul](09_VERBATIMS_ET_CONCLUSIONS_POUR_CALCUL.md). C'est l'entrée pour les corrections S28, S33, S47, S58, S62 et S64.
2. [11 V2 — muon, sillon et coût](sources/V2/11_MUON_SILLON_ET_COUT_fr.md), en distinguant les acquis du §1, l'équation ouverte du §2, la rétractation du §3 et les inférences du §5.
3. [C20 — inconnues de la formule du muon](sources/EXTRAITS_V2_CITES.md#c20), [C21 — masse et durée](sources/EXTRAITS_V2_CITES.md#c21), [C22 — retrait de X = 2/α](sources/EXTRAITS_V2_CITES.md#c22), [C23 — doutes](sources/EXTRAITS_V2_CITES.md#c23) et [C24 — cibles historiques](sources/EXTRAITS_V2_CITES.md#c24).
4. [C25 — formulations de la masse](sources/EXTRAITS_V2_CITES.md#c25), [C26 — intégrale candidate](sources/EXTRAITS_V2_CITES.md#c26), [C27 — architecture historique](sources/EXTRAITS_V2_CITES.md#c27), [C28 — occupation/Q44](sources/EXTRAITS_V2_CITES.md#c28), [C29 — neutrino](sources/EXTRAITS_V2_CITES.md#c29).
5. [07 — dettes et tests adversariaux](07_DETTES_ET_TESTS_ADVERSARIAUX.md) et [08 — registre](08_REGISTRE_ET_SOURCES.md). Consulter les verbatims complets avant de déclarer une proposition validée.
6. [Prompt joint](sources/PROMPT_CHANTIER_4DFX_ORIGINAL.md), puis corpus V2 selon les renvois. Les 18 fichiers originaux sont inclus ; ce parcours priorise la lecture sans remplacer l'audit du corpus nécessaire à une nouvelle équation.

## 3. Contraintes de construction tirées des sources

| Contrainte | Statut et origine | Conséquence pour la séance future |
|---|---|---|
| T constant, e unique | [GABRIEL_VALIDÉ], C01 ; précisions V3 S28 | Distinguer T, indice structurel et temps observable. |
| Triplet x-1 / x / x+1 | [V3 — GABRIEL, à verrouiller], S16/S31 | Donner une convention explicite ; ne pas décaler les indices V2 mécaniquement. |
| Sillon pré-inscrit | [GABRIEL_VALIDÉ], C03 ; S25 | Définir ce qui est pré-inscrit sans ajouter un second e. |
| Vitesse et orbitales comme résultats | [V3 — GABRIEL, à verrouiller], S33/S20 | Ne pas donner la réponse recherchée comme donnée primitive. |
| Boost cinétique sans puiser davantage de e | [V3 — GABRIEL, à verrouiller], S47 | Définir le budget et son bilan, sans multiplication ontologique. |
| Masse du muon comme budget minimal de la deuxième perpendiculaire | [V3 — GABRIEL, à verrouiller], S53 | Définir coût, minimum et conversion en masse. |
| Perpendiculaire appartenant au sillon | [V3 — GABRIEL, à verrouiller], S58 | Distinguer géométrie interne et projection spatiale. |
| Même structure de nuage, rapprochement du noyau | [V3 — GABRIEL, à verrouiller], S62 | Définir le rayon observé et le système lié. |
| Désintégration : différence x/x+1 | [V3 — GABRIEL, à verrouiller], S64 | Définir une relation entre configurations, puis une loi de transition. |
| Masse = lecture du volume du sillon à x | [INFÉRENCE GPT — NON VALIDÉE] pour ce raccord complet, S59/S63 ; C25 | Ne pas traiter comme acquise l'égalité entre toutes les définitions historiques de masse. |

## 4. Dictionnaire préparatoire minimal

**[INFÉRENCE GPT — NON VALIDÉE]** pour la normalisation des symboles et unités possibles ci-dessous. Ce tableau n'impose pas de variables fondamentales supplémentaires. Une case « à définir » signale une dette, pas une invitation à ajuster un coefficient.

| Symbole de travail | Sens issu du corpus / du prompt | Domaine ou unité possible | Problème à résoudre |
|---|---|---|---|
| T ; x | totalité structurelle ; indice de lecture | À définir ; ne pas présumer des secondes pour T | Ordre, métrique et rapport au temps mesuré. |
| e | unique fondement du modèle | Ne pas assimiler à la charge élémentaire | Définir une mesure d'adressage sans compter plusieurs e. |
| S_géom | géométrie du sillon | Espace de configurations à définir | Le S du prompt mélange géométrie, volume et budget. |
| P_perp | nombre/configuration de perpendiculaires | Compte sans dimension, géométrie supplémentaire à définir | Le nombre 1/2/3 ne remplace pas une orientation ou une topologie. |
| V₄df ; B_e | mesure d'occupation ; budget d'adressage | Unités non fixées | Sont-ils distincts ou redondants ? Quel lien avec énergie et masse ? |
| ρ ; G | proximité ; entourage/géométrie collective | À définir, sans supposer que ρ est une densité SI | Recouvrement possible avec S_géom ; voisinage local ou contrainte globale. |
| X ; u | lame propre et coût de retour V2 | Rapports normalisés dans C20, sous convention | Deux inconnues ; définition intrinsèque et angle non fixés. |
| r_V2 | rapport L/(2w), sous angle π/2 | Sans dimension | Ne pas confondre avec une longueur orbitale ou le r de l'intégrale historique. |
| m₀ ; p ; v | observables de masse au repos, impulsion et vitesse | Masse ; impulsion ; longueur/temps | Définir système et référentiel ; ne pas réinjecter les sorties ciblées. |
| r_orb ; μ_red | rayon d'un état lié ; masse réduite de comparaison | Longueur ; masse | Choisir l'état, le centre et la définition du rayon. |
| Δ_S ; Δ_E | écarts candidats de configuration/budget ou d'énergie | Dépend de la grandeur soustraite | Les S et E de S64/S67 ne sont pas interchangeables. |
| τ_vie ; t_obs | durée de vie ; temps de mesure | Temps observable | Ne pas confondre avec la particule tau ni avec T. |
| C_obs ; d_min ; t_min | limite lue et unités minimales candidates | Longueur/temps ; longueur ; temps | Éviter une définition circulaire de C. |

Les symboles m, p, v et τ_vie sont des sorties souhaitées. Le rayon ne constitue une sortie pertinente que pour un problème où sa définition a été donnée. Le système d'entrées devra être réduit après examen, pas multiplié jusqu'à pouvoir reproduire toute donnée.

<a id="candidats"></a>
## 5. Candidats déjà présents — à examiner, pas à annoncer comme résultats

### A. Forme d'opérateur du prompt

**[INFÉRENCE GPT — NON VALIDÉE]**, prompt S67 :

$$
4df(x):\mathcal I_{x-1}\longrightarrow
(\mathcal O_x,\mathcal O_{x+1}),\qquad
\mathcal I_{x-1}=\{S,P,\rho,B_e,G\}.
$$

Sorties souhaitées : m, p, v, r et un écart entre x et x+1. C'est une signature de fonction, pas une équation de mouvement ou une loi de calcul. Le domaine, les relations entre variables et les conditions aux limites manquent.

### B. Forme géométrique historique et verrou du muon

Dans [C26](sources/EXTRAITS_V2_CITES.md#c26), V2 conserve une **forme intégrale candidate historique** :

$$
4df(x)=\int_T K(\text{position})\,r^4\,f(\text{profondeur})\,d(t=x).
$$

Son statut ne devient pas [GABRIEL_VALIDÉ] par citation. Les pièces d'architecture de [C27](sources/EXTRAITS_V2_CITES.md#c27) portent leurs validations historiques ; elles ne fixent ni cette mesure, ni cet intégrand. Le r de cette expression doit être défini avant de le relier à r_V2 ou r_orb.

État du calcul du muon dans [C20](sources/EXTRAITS_V2_CITES.md#c20) :

$$
I_2=\frac{\pi}{4}X(1-6u).
$$

La source pose X(1−6u) = 2r ≈ 262 à partir des valeurs de référence. **Deux inconnues pour une équation : la masse n'est pas dérivée.** Certaines pièces géométriques sont validées séparément ; l'angle de l'éventail reste à trancher. Ne pas présenter le produit mesuré comme une prédiction.

Le rapport total m_μ/m_e ≈ 206,768 correspond à **1 + I₂**, avec I₂ ≈ 205,768. Le rapport d'incréments I₃/I₂ ≈ 15,894 et le rapport de masses m_τ/m_μ ≈ 16,82 ne sont pas la même cible. Ces nombres sont ceux des sources, pas des résultats nouveaux.

**Rétractation à respecter :** X = 2/α, la forme I₂ = π/(2α) − 3π et leurs chiffres dépendants sont retirés dans [C22](sources/EXTRAITS_V2_CITES.md#c22). Un changement de notation ne les réhabilite pas. Les comptages de phases 97 ns / 265 fs restent des chiffres historiques suspendus, [C21](sources/EXTRAITS_V2_CITES.md#c21).

### C. Raccord cinétique et invariant importé

**[INFÉRENCE GPT — NON VALIDÉE]**, réponses [S46](sources/SESSION_COMPLETE.md#s46), [S48](sources/SESSION_COMPLETE.md#s48) et [S49](sources/SESSION_COMPLETE.md#s49) :

$$
M_{4df}=m_0+\frac{K}{C^2},\qquad
m^2c^4=E^2-p^2c^2.
$$

Ces relations ont été proposées en partant de la cinématique externe. Leur réécriture ne démontre pas qu'elles sortent de 4df. M₄df est la variable définie par GPT en S46 ; ne pas la confondre avec m₀ ou avec le volume structurel.

**Contrôles à effectuer.** Annoncer si l'identité relativiste est importée comme contrainte ou obtenue par dérivation. Identifier ce que E et p mesurent dans le modèle. Éviter de traiter pc comme une énergie cinétique additive : le prompt parle d'une partition qu'il faut justifier, alors que l'expression écrite est quadratique. Vérifier le bilan de l'objet, puis celui du système contenant l'énergie transférée.

L'exemple des deux photons de S49 est un **test de comparaison proposé par GPT**. Il devra distinguer masse individuelle, masse du système et bilan vectoriel ; aucune masse leptonique n'en a été déduite dans la session.

### Relations auxiliaires du prompt

**[INFÉRENCE GPT — NON VALIDÉE]**, non des candidats supplémentaires déjà achevés :

- m r ≈ constante, ou relation avec μ_red : définir l'état lié et vérifier si ce lien est produit par 4df ou importé d'une formule externe.
- Δ = S_x − S_x+1 et τ_vie = F(Δ) : définir S, F, unités et mécanisme de transition. S64 écrivait plutôt Δ = E_x − E_x+1.
- A_c ∝ |N_UP − N_DOWN| et ω_c ∝ N_UP + N_DOWN : extension nucléaire, pas ingrédients ajustables du calcul leptonique.
- N_angulaire = l, N_radial = n−l−1 et N_total = n−1 : repères nodaux du prompt ; vérifier le domaine avant d'en exiger la reproduction.
- C_obs = d_min/t_min : candidat de lecture ; ne pas le déclarer dérivé par simple réarrangement de d_min = C t_min.

## 6. Données de comparaison à préparer lors du calcul

**Provenance : prompt joint et V2.** Les valeurs ci-dessous sont transcrites pour retrouver les cibles de la séance. Elles n'ont pas été actualisées ni revérifiées dans cette préparation. Avant calcul, sélectionner des sources primaires datées, conserver leurs incertitudes, conventions et unités.

| Cible | Valeur indiquée dans le prompt / V2 | Usage futur |
|---|---:|---|
| Masse de l'électron | 0,51099895 MeV/c² | Référence : annoncer si elle fixe l'unité de masse. |
| Masse du muon | ≈ 105,6584 MeV/c² | Sortie à tester ; ne pas dissimuler son emploi pour fixer X ou u. |
| m_μ/m_e | ≈ 206,768 | Rapport total, distinct de I₂. |
| Masse du tau | ≈ 1776,86 MeV/c² | Valeur du prompt à actualiser si nécessaire. |
| m_τ/m_μ | ≈ 16,82 | Test distinct du rapport des incréments V2. |
| I₃/I₂ dans V2 | ≈ 15,894 | Conserver la comptabilité d'incréments qui définit I₃. |
| Vie du muon | ≈ 2,197 μs | Test après définition d'une loi de transition. |
| Vie du tau | ≈ 2,90 × 10⁻¹³ s | Même méthode et constantes que pour le muon. |
| Rayon muonique | Pas de cible unique fixée ici | Définir le noyau, l'état et l'observable radiale ; traiter μ_red. |
| Neutrinos | Pas de masse absolue chiffrée retenue ici | Distinguer états de masse, saveurs et régime cinématique avant comparaison. |

**[OUVERT] — Indépendance des tests.** Si m_e définit l'échelle, sa valeur absolue est une calibration. Si le muon fixe X ou u, la restitution de 206,768 est une calibration. Si un rayon est obtenu en remplaçant la masse dans une relation connue, il ne ferme pas à lui seul une nouvelle inconnue structurelle. Le futur rapport doit annoncer ces dépendances.

**[OUVERT] — Rayon.** V2 écrit environ 206,8 ou 207 dans [C23](sources/EXTRAITS_V2_CITES.md#c23), tandis que GPT S61 mentionne environ 186 pour l'hydrogène muonique. Garder cet écart visible et le résoudre en précisant la masse du centre et le recours à la masse réduite ; ne choisir aucun chiffre pour son accord avec le ratio muon/électron.

**[OUVERT] — Neutrino.** Le prompt généralise « masse non nulle, déplacement proche de C ». Avant d'utiliser cette phrase comme donnée, préciser quel état et quel régime elle décrit, et vérifier ce que les mesures contraignent. Le neutrino « ne se déplace pas » de V2 concerne un vocabulaire structurel à raccorder à sa vitesse lue, [11 V2](sources/V2/11_MUON_SILLON_ET_COUT_fr.md) §1.3 et [C29](sources/EXTRAITS_V2_CITES.md#c29).

## 7. Déroulement attendu et critères d'arrêt

| Étape future | Travail attendu | Livrable / condition pour continuer |
|---|---|---|
| Extraction critique | Reprendre ce dictionnaire à partir des passages primaires, arbitrer les redondances | Chaque variable a une définition, un statut et une unité, ou une dette explicite. |
| 1 à 3 formes candidates | Construire un calcul minimal avec équation, termes, domaine, unités, limites et sorties | Un tiers peut reproduire les opérations sans lire les réponses recherchées. |
| Tests leptoniques | Comparer électron, muon, tau, neutrino ; rayon lié et durées lorsque définis | Séparer dérivation, calibration, comparaison et grandeur non calculable. |
| Attaque adversariale | Chercher circularité, double comptage, paramètre caché, contradiction et échec prédictif | Garder les échecs ; restreindre ou abandonner une candidate si nécessaire. |

**[OUVERT]** Si l'intégrand de X, la mesure ou la loi de transition manque, identifier cette pièce précisément et écrire **NON DÉRIVÉ** pour la sortie concernée. Ne pas inventer une loi pour remplir toutes les rubriques. Un formalisme partiel peut être utile si ses limites sont explicitement indiquées.

## 8. Tests adversariaux prioritaires

Tous sont **[OUVERT]** ; ils n'ont pas été exécutés dans cette préparation.

| Test | Question décisive |
|---|---|
| Dimensions | Peut-on produire une masse et une durée avec les seules unités déclarées ? |
| Entrées/sorties | m, v, r ou τ_vie recherchés sont-ils réintroduits dans l'intégrand ? |
| Muon libre / lié | La règle exige-t-elle à tort un noyau accompagnant le muon ? Voir C23. |
| Incréments / masses | A-t-on confondu 206,768 avec 205,768, ou 16,82 avec 15,894 ? |
| Rayon | Le r interne sans dimension a-t-il été substitué à r_orb ? Le rayon est-il une donnée indépendante ? |
| Vie | Un Δ statique est-il arbitrairement converti en secondes ? Une énergie libérée est-elle prise pour un taux ? |
| Limites | Les cas électron, photon, neutrino, v→0 et v→C sont-ils définis dans le même formalisme ? |
| Conservation | Quel système conserve l'énergie et la quantité de mouvement ? Qu'emportent les produits ? |
| Deux photons | La formule distingue-t-elle la masse des constituants de celle du système ? |
| T et temps observé | La durée de vie nécessite-t-elle subrepticement un T qui s'écoule ? |
| C | La métrique contient-elle déjà la vitesse que l'on prétend obtenir ? |
| Rétractation | Une forme dérivée de X = 2/α a-t-elle été réintroduite sans nouvelle justification ? |
| Pouvoir prédictif | Le test tau utilise-t-il les mêmes ingrédients, sans nouveau coefficient choisi après observation ? |

La dette orbitale demeure : capacités 2,6,10,14, périodes 2,8,8,18,18,32 et binaire UD/DU ne sont pas déduits par le seul travail sur les leptons. Ne pas identifier automatiquement les perpendiculaires leptoniques aux orbitales p ni UD/DU à m_s. Voir [03](03_TABLEAU_PERIODIQUE_GEOMETRIE_V3.md) et [04](04_ORBITALES_COMME_REPONSES_4DF.md).

## 9. Rubriques du futur résultat

Le fichier V3_4dfx_FORMALISATION_LEPTONS.md devra contenir, selon le prompt :

1. Axiomes utilisés, avec sources et statuts.
2. Dictionnaire mathématique.
3. Équation candidate principale.
4. Dérivation, ou emplacement exact où elle s'arrête.
5. Tests électron/muon/tau/neutrino.
6. Lien entre masse et rayon.
7. Lien entre déséquilibre x/x+1 et durée de vie.
8. Contradictions restantes.
9. Prédictions falsifiables, distinctes des données de calibration.
10. Liste précise des propositions à soumettre à Gabriel pour validation.

**Prochaine action préparée :** reprendre le dictionnaire et le verrou X/u avec les corrections V3, avant de proposer une équation. L'exécution de cette séance reste à venir.

## Complément RV48 — domaine du calcul et cas t=1

**Historique corrigé par RV50/RV51.** Le paragraphe I50 ci-dessous décrit la lecture précédente. La suppression de tout amont x−1 est retirée : Gabriel distingue maintenant DOWN local précédent et DOWN global sur T, puis précise x−1=0 pour x=1. Le complément suivant fixe l'état actuel du cahier.

**[V3 — GABRIEL, à verrouiller]** Gabriel définit t=1 comme t=x sans t=x−1 et appelle ce cas le Big Bang, en précisant son UP seul : [01](01_TERMINOLOGIE_T_REINDEXEE.md#t1-bigbang).

**[INFÉRENCE GPT — NON VALIDÉE] — I50.** La signature candidate utilisant des données en x−1 ne suffit pas telle quelle pour un cas sans cet amont. Le prochain calcul devra délimiter son domaine et définir une condition d'adressage initiale, ou une règle particulière, sans remplacer automatiquement une entrée absente par zéro. **[OUVERT]** État initial, variables, raccord au régime maintenu et compatibilité avec T constant/circulaire. Ce complément ne fournit aucune équation cosmologique ou quantité initiale.

## Complément RV50/RV51 — intégrer la contrainte globale sans supprimer t=0

**[GABRIEL_VALIDÉ] — portée limitée de RV51.** Le cas « sans DOWN local d'un cycle précédent » conserve le DOWN global inscrit sur tout T. **[V3 — GABRIEL, à verrouiller]** V49 l'associe à matière noire/énergie noire et attribue l'intensité du Big Bang à sa balance avec T entier. Gabriel complète : x=1 ⇒ t=x−1=0, « donc e ». [Sources et précision des indices](01_TERMINOLOGIE_T_REINDEXEE.md#down-global-t0).

**[INFÉRENCE GPT — NON VALIDÉE] — I51.** Construire une condition reliant la configuration entière de T à l'UP en x=1. La distinction local/global est confirmée ; la traduction en contrainte mathématique, le choix des variables et la loi de réponse restent des propositions à construire. La formule éventuelle doit conserver l'unicité de e et distinguer ses inscriptions de quantités physiques mesurées.

**[OUVERT] — données nécessaires au calcul.** Définir la variable de structure globale ; le lien DOWN/sillages ; le rôle opératoire de e à t=0 ; la grandeur visée par « intensité » ; et la règle reliant ces objets. Une somme ou une intégrale sur T ne peut pas être calculée sans contenu, mesure et normalisation définis. Aucun facteur de proportionnalité ni budget cosmologique n'est fixé par cette précision. L'état des calculs leptoniques et des audits atomiques antérieurs reste inchangé.

<a id="origine-perpendiculaires"></a>
## Complément RV53/RV54 — faire calculer la géométrie du rebond

**[V3 — GABRIEL, à verrouiller] — V51/V52.** L'espace occupé par t=1 est mis en rapport avec le secteur noir de toute l'existence de l'univers ; la proximité à t=0 agit sur 4df ; le rebond entre t=1 et t=2 donne les perpendiculaires de l'adressage de e. **[GABRIEL_VALIDÉ] — V53 :** les premiers DOWN ainsi évoqués sont locaux, avec maintien du DOWN global. [Verbatims et limites](01_TERMINOLOGIE_T_REINDEXEE.md#rebond-perpendiculaires).

**[INFÉRENCE GPT — NON VALIDÉE] — I52.** La signature candidate de la section 5 inclut P parmi les données de 4df. Pour un état déjà formé, cette géométrie peut être une condition de calcul. Pour expliquer son origine conformément à V52, P devient une inconnue à déterminer conjointement avec le rebond. Une dépendance mutuelle de 4df et de P exige des relations qui permettent de calculer une solution commune ; la seule écriture de cette dépendance n'est pas une solution.

| Pièce à définir | Travail mathématique nécessaire | Ce qui manque encore |
|---|---|---|
| Occupation associée à t=1 | Définir domaine, grandeur et mesure, en lien avec T entier | « Espace » n'a pas encore un sens quantitatif univoque. |
| Proximité à t=0 | Définir la relation structurelle et son rôle dans l'opérateur | Aucune loi numérique de pondération fournie par RV53. |
| Rebond entre t=1 et t=2 | Définir ses données, son évolution ou sa relation de transition | Sens de « entre », données aux bornes et règle de réponse. |
| Perpendiculaires produites | Définir l'espace des directions et la règle d'orthogonalité ; sélectionner une configuration | Nombre, orientations et condition de sélection non dérivés. |
| Premiers DOWN locaux | Relier leur apparition à la même construction, avec identités et états compatibles | Quantité, phase exacte et règle de maintien. |

**[OUVERT]** Relier cette construction aux surfaces et aux modes d'adressage de [M02/M03](sources/SESSION_MATHEMATIQUES_CODEX.md#m02), puis aux configurations leptoniques ou orbitales observées. V52 ne fixe ni l'angle de l'éventail, ni un second IN/OUT, ni une masse. L'intégrale historique de C26 et les valeurs V2 proches de t=0 ne deviennent pas des lois calculées par cette proposition. Aucun nouveau résultat numérique n'est annoncé.

## Complément du 17 septembre 2026 — trois départs, puis leur lecture spatiale

**[V3 — GABRIEL, à verrouiller] — V54.** Les trois moments produiraient trois départs différents dans le temps. Le [verbatim et la question de clarification](01_TERMINOLOGIE_T_REINDEXEE.md#trois-departs) conservent cette proposition comme hypothèse, sans assimiler immédiatement les départs à trois axes spatiaux.

**[INFÉRENCE GPT — NON VALIDÉE] — I54.** Définir les départs et leur relation à un adressage, puis la réponse de 4df et sa lecture spatiale. Comparer les réponses pour identifier ce qui diffère : phase, origine, trajet ou direction. Leur nombre ne détermine pas à lui seul la dimension de la géométrie obtenue. La loi de lecture doit permettre d'établir le nombre de directions spatiales indépendantes sans introduire d'emblée la réponse recherchée.

**[OUVERT]** Sens du départ, correspondance aux trois repères, relation au rebond et aux états UP/DOWN ; définition de la lecture spatiale. La différence de phase n'est pas automatiquement une différence de direction. Le calcul d'une origine commune des perpendiculaires et des relations temporelles reste une piste I53, non une validation de V54. Aucun état ou résultat numérique supplémentaire calculé.

## Correction RV60 — plusieurs adressages, chacun son retour

**[V3 — GABRIEL, à verrouiller] — V55.** Gabriel rejette trois départs d'un seul adressage et précise plusieurs adressages répartis dans les phases. Chacun possède son x+1 résultant de 4df ; son retour induit un vecteur de mouvement lu dans x. [Source et limites du repérage](01_TERMINOLOGIE_T_REINDEXEE.md#adressages-dephases).

**[INFÉRENCE GPT — NON VALIDÉE] — I55.** Repérer séparément identité, phase, données de retour et déplacement observable pour chaque adressage. Définir ensuite la relation entre les phases locales et T commun. La loi doit calculer le déplacement à partir des données structurelles ; écrire un vecteur cible par adressage ne le dérive pas. Une fois les vecteurs définis dans un espace linéaire de lecture, leur rang peut servir à compter leurs directions indépendantes. Ce critère mathématique n'établit pas à lui seul la dimension de tout l'espace : il faut aussi justifier la portée générale de la règle et l'exhaustivité des directions permises.

**[OUVERT]** Le troisième adressage, la lecture de x+1 dans x, l'évolution des phases et leurs contraintes mutuelles restent à fixer. Départs distincts, réponses différentes et directions indépendantes sont des notions à relier, pas des synonymes. Aucun vecteur numérique ou angle n'est inventé ; les calculs antérieurs restent inchangés.

## Complément RV62 — calculer ensemble maintien de la source et nuage

**[V3 — GABRIEL, à verrouiller] — V56.** Les nuages probabilistes suivraient les agencements des trois temps maintenant la source de l'adressage de e au même endroit. Gabriel rappelle le statut de piste. [Source et raccords documentaires](04_ORBITALES_COMME_REPONSES_4DF.md#nuage-source-maintenue).

**[INFÉRENCE GPT — NON VALIDÉE] — I56.** Définir la source et son repère ; établir une condition de maintien à travers les lectures ; chercher les retours admissibles ; construire leur lecture spatiale et leur pondération. L'objectif serait de calculer, pour une même solution, le maintien de la source et la forme du nuage. Une source maintenue peut servir de condition dans un premier calcul conditionnel ; ce calcul ne démontrerait pas pourquoi elle est maintenue.

**[OUVERT]** Le maintien et la distribution sont deux exigences distinctes. Un retour au même centre ne prouve pas à lui seul la stabilité, et une liste de retours possibles ne définit pas leurs probabilités. Choisir d'abord le cas et les conditions extérieures, puis définir la loi, les identités et la mesure de lecture. Les formes orbitales connues restent des cibles de comparaison ; elles ne doivent pas être imposées dans les entrées puis annoncées comme dérivées. Aucune règle un temps/un lobe ou aucune probabilité égale à un tiers n'est introduite.

## Complément RV64 — faire de la stabilité un critère de calcul

**[V3 — GABRIEL, à verrouiller] — V57.** La stabilité définit l'existence selon l'énoncé de Gabriel. [Source et raccords](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#stabilite-definit-existence).

**[INFÉRENCE GPT — NON VALIDÉE] — I57.** Définir les configurations candidates et les relations de retour, puis rechercher celles qui satisfont une condition de maintien. Séparer trois étapes : existence d'une solution aux relations, maintien de la configuration sur l'étendue considérée, comportement sous les perturbations retenues. Les deux premières ne suffisent pas à garantir la troisième. Cette méthode est proposée pour rendre le principe opératoire ; les relations ne sont pas encore fixées.

**[OUVERT]** Objet, repère, étendue, conditions extérieures et sens de « stabilité ». Le test doit pouvoir distinguer des configurations admissibles et inadmissibles sans utiliser « elle existe » comme unique justification. La portée pour les manifestations à étendue finie et le lien à une durée observée restent à définir. Aucun résultat numérique ou critère déjà vérifié n'est ajouté.
