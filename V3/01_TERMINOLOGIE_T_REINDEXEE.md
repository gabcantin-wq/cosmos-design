# 01 — Terminologie de T et réindexation V3

**Précision la plus récente — [adressages distincts, phases différentes et retours propres](#adressages-dephases).** Gabriel rejette les trois départs d'un seul adressage proposés par GPT. Il distingue plusieurs adressages, chacun avec son retour de 4df et son x+1, le mouvement étant lu dans x. V54 est précisé par V55 ; correspondance des indices, loi de retour et indépendance des directions restent à construire.

**Repère de version.** Le corps initial ci-dessous conserve la synthèse S01–S22. Les précisions S23–S67 sont signalées dans le complément en fin de chapitre et rassemblées dans [09](09_VERBATIMS_ET_CONCLUSIONS_POUR_CALCUL.md). Elles doivent être prises en compte pour le prochain calcul.

## Le socle et la correction de session

**[GABRIEL_VALIDÉ]** T est constant ; il n'y a qu'un seul `e`. Dans la formulation V2, T est circulaire et les positions de lecture coexistent structurellement. Les « avant » et « après » employés ici décrivent les relations entre ces positions. Sources : [C01](sources/EXTRAITS_V2_CITES.md#c01), [chaîne V2, maillons 1–2](sources/V2/03_CHAINE_STRUCTURELLE_MINIMALE_fr.md).

**[V3 — GABRIEL, à verrouiller]** La correction décisive de [S16](sources/SESSION_GABRIEL.md#s16) impose la grille suivante :

| Écriture V3 | Rôle explicitement posé ou précisé par Gabriel | Source |
|---|---|---|
| `T` | Totalité constante dans laquelle l'existence doit tenir structurellement | S13, S19 |
| `t=x-1` | Position de la structure existante en amont de la mesure ; DOWN de l'hydrogène | S16 |
| `4df(x-1)` | Formulation de l'existence du `e` nucléaire, antérieure structurellement à sa lecture locale | S16 |
| `t=x` | Fenêtre où l'on mesure ; manifestation locale et lecture vectorielle | S16, S18 |
| `4df(x)` | Calcul dans lequel la structure est influencée par les forces et dont les orbitales sont les réponses | S18, S20 |
| `t=x+1` | Maintien et conséquences de la structure ; balance en trois dimensions | S15, S18 |

**[OUVERT]** `4df(x-1)` n'a pas reçu de définition mathématique autonome. Le texte ne démontre ni qu'il s'agit du même opérateur évalué à un argument translaté, ni qu'il s'agit d'un domaine, d'un état ou d'une notation abrégée. Le lien avec `4df(x)` doit être écrit avant de manipuler ces symboles algébriquement.

## Ce que la réindexation change réellement

### Raccord local confirmé le 10 septembre 2026

**[GABRIEL_VALIDÉ]** Pour **un seul adressage de l'hydrogène**, Gabriel confirme explicitement :

| t=x−1 | t=x | t=x+1 |
|---|---|---|
| DOWN | UP | DOWN |

Source : [question précise et réponse « oui c'est ca », RV07](visuels/JOURNAL_REVISION_VISUELLE.md#rv07). Ce point lève l'incertitude sur les deux autres cases de ce cas local. Il ne fixe pas encore la traduction de tous les triplets V2 ni la règle de mesure. La [planche v03](visuels/01_HYDROGENE_TROIS_LECTURES_v03.png) utilise cette correspondance ; sa géométrie reste une **[INFÉRENCE GPT — NON VALIDÉE]**.

### Enchaînement précisé le 10 septembre 2026

**[V3 — GABRIEL, à verrouiller]** Le DOWN final en x+1 est le DOWN initial en x−1 du cycle suivant ; Gabriel demande de superposer ces deux lectures identiques à la jonction ([RV09](visuels/JOURNAL_REVISION_VISUELLE.md#rv09)).

**[INFÉRENCE GPT — NON VALIDÉE] — notation proposée pour distinguer les fenêtres.** Si x₁ et x₂ désignent les origines locales des cycles successifs, la relation est :

$$
x_1+1=x_2-1\quad\Longrightarrow\quad x_2=x_1+2.
$$

Les fenêtres {x₁−1, x₁, x₁+1} et {x₂−1, x₂, x₂+1} se recouvrent donc sur une position DOWN. Leur lecture commune est D–U–D–U–D, soit cinq positions distinctes pour ces deux fenêtres. Cette comptabilité découle de la notation proposée ; elle ne calcule ni une période physique, ni le nombre de particules. La [planche v04](visuels/01_CYCLES_SUPERPOSES_v04.png) rend le recouvrement visible.

### Raccord général aux archives V2 — portée restante

V2 porte déjà deux triplets : `x-1 / x / x+1`, pour l'amont, la lecture et l'aval ; `x / x+1 / x+2`, pour le trio du proton. Leur raccord est explicitement laissé ouvert dans l'audit, [C13, tension 6](sources/EXTRAITS_V2_CITES.md#c13). Le trio de septembre et ses positions sont conservés en [C08](sources/EXTRAITS_V2_CITES.md#c08).

**[V3 — GABRIEL, à verrouiller]** La grille de S16 devient la convention des nouveaux textes. Le noyau n'est plus situé simplement dans `t=x+1` : Gabriel le décrit comme du `e` existant dans `4df(x-1)`.

**[OUVERT]** Cela ne fournit pas une correspondance automatique entre toutes les phases anciennes et nouvelles. Un simple décalage `x_ancien = x_nouveau - 1` placerait l'ancien UP à `x-1` et l'ancien DOWN à `x`, alors que S16 situe le DOWN de H à `x-1`. Il faut donc préciser le choix de phase et de fenêtre de lecture ; soustraire 1 à tous les indices ne suffit pas.

La V3 préserve les citations anciennes dans leurs indices d'origine. Lorsqu'un ancien `x+2` apparaît dans une archive, il ne devient pas silencieusement un `x+1` V3. Aucune durée élémentaire ni période numérique du cycle ne découle des signes `+1` et `-1`.

## Noyau : une révision à montrer

**[GABRIEL_VALIDÉ] — état historique V2.** Q185/A40 contient explicitement : « Le noyau n'est pas du e ». La source précise aussi que noyau et lepton ne sont pas le même contenu. [C09](sources/EXTRAITS_V2_CITES.md#c09).

**[V3 — GABRIEL, à verrouiller] — proposition de remplacement pour cette session.** S16 affirme : « Le noyeau est du e a t=x-1 », puis « existe dans 4df(x-1) ». Cette correction est conservée telle quelle, avec sa provenance.

**[OUVERT]** Le raccord ontologique demeure à écrire : que signifie « réside dans la 4df » face au postulat de `e` à `t=0` ? La distinction entre présence fondamentale, adressage et manifestation pourrait aider, mais cette conciliation serait une inférence. La nouvelle formulation ne permet pas d'effacer l'ancienne ni de déclarer les deux équivalentes.

## Lexique de travail

| Terme | Usage dans le package | Portée |
|---|---|---|
| `e` | Entité énergétique unique du modèle | [GABRIEL_VALIDÉ], C01 ; distinct du symbole de charge élémentaire employé en physique standard. |
| Électron observé | Manifestation/adressage de cet unique `e` | Continuité du modèle ; ne désigne pas une population d'entités fondamentales `e` indépendantes. |
| Sillon | Pré-inscription permettant l'adressage ; description V3 en trous dans l'espace-temps suivant les électrons lors des UP | [GABRIEL_VALIDÉ] pour la pré-inscription C03 ; [V3 — GABRIEL, à verrouiller] pour la précision [RV04](visuels/JOURNAL_REVISION_VISUELLE.md#rv04). La traduction graphique en rainures/corridors physiques est corrigée. |
| Sillage | Trace résiduelle ; emploi collectif distingué du sillon individuel dans V2 | Distinction documentaire [C14](sources/EXTRAITS_V2_CITES.md#c14). Le raccord particulier aux « sillages d'existence » des hadrons reste ouvert dans C09. |
| UP / DOWN | Positions ou lectures du cycle dans le vocabulaire du modèle | Socle V2 Q185/A45, prolongé en S01 ; raccord D/U/D confirmé localement pour H en [RV07](visuels/JOURNAL_REVISION_VISUELLE.md#rv07), raccord général ouvert. |
| UD / DU | Deux arrangements candidats, chacun comportant U et D | [V3 — GABRIEL, à verrouiller], S13 ; aucune identité acquise avec le spin. |
| Perpendicularités leptoniques | Géométrie de l'adressage vers et depuis `t=0` | [V3 — GABRIEL, à verrouiller], [S14](sources/SESSION_GABRIEL.md#s14). |
| Géométrie orbitale | Famille de retours observables, à faire sortir de `4df` | Principe de Gabriel S20 ; réalisation mathématique [OUVERT]. |
| Valence | Terme à préciser selon le contexte électronique, chimique ou nucléaire | [OUVERT], doute de S03 et dette A47 de [C12](sources/EXTRAITS_V2_CITES.md#c12). |

## Mesure et maintien

**[V3 — GABRIEL, à verrouiller]** S15 insiste sur les mesures « par leurs effets sur `t=x+1` », alors que S16 appelle `t=x` « là où on mesure ». S18 situe la balance permettant l'existence dans `t=x+1`.

**[INFÉRENCE GPT — NON VALIDÉE]** On peut distinguer le nom de la fenêtre de mesure (`x`) de la relation structurelle dont elle lit les effets (`x` et `x+1`). C'est une proposition de clarification, pas une résolution acquise. **[OUVERT]** Une définition de l'observable doit fixer la position de l'événement, celle du détecteur et la règle qui les relie.

## Précisions de la continuation S23–S67

**[V3 — GABRIEL, à verrouiller].** S28 corrige l'image d'un contact avec t=0 : « tu ne touche pas a t=0 car ca n'existe pas ». S31 réemploie « existe en t=0 » pour la lumière/énergie libre. Lire ces formulations avec l'interdiction de spatialiser t=0, sans déclarer leur raccord mathématique résolu. Les indices du triplet restent structurels ; la durée mesurée n'est pas définie par le seul +1.

S58 précise que la perpendiculaire appartient au sillon ; S64 qu'elle n'existe pas dans T comme un objet autonome. S33 place la vitesse parmi les résultats. **[OUVERT]** La table précédente conserve les rôles de S16 ; elle ne fournit toujours pas la définition d'un opérateur. Voir les [verbatims et nuances](09_VERBATIMS_ET_CONCLUSIONS_POUR_CALCUL.md#k01) et le [dictionnaire préparatoire](10_CAHIER_DU_PROCHAIN_CALCUL_4DFX.md).

## Précision RV31 — manifestation et lecture DOWN

**[V3 — GABRIEL, à verrouiller]** L'électron est toujours manifesté, y compris lors d'un DOWN que Gabriel rattache à x−1. La formulation « là sans être là » et sa [source directe](visuels/JOURNAL_REVISION_VISUELLE.md#rv31) sont développées dans [02](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#manifestation-down). La table des indices ne doit donc pas être interprétée comme une alternance entre existence et disparition de l'électron. La distinction proposée entre manifestation et adressage reste **[INFÉRENCE GPT — NON VALIDÉE]**, avec le sens des deux emplois de « là » encore **[OUVERT]**. Aucun indice du DUD local ou de l'enchaînement n'est déplacé par cet ajout.

## Précision RV40 — rôle des lectures

**[V3 — GABRIEL, à verrouiller]** La nouvelle [dépendance réciproque](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md#dependance-reciproque) précise que DOWN permet l'injection de e dans 4df(x) pour l'adressage UP. Elle ne déplace pas les indices du DUD local confirmé. L'interprétation des flèches comme dépendances de fonctionnement est **[INFÉRENCE GPT — NON VALIDÉE]** ; les identités liées, les délais éventuels et le mécanisme de retour UP → DOWN restent ouverts. T constant ne devient pas un réservoir auquel des instants sont ajoutés.

**Correction RV42/RV44 de la portée de RV40.** [V3 — GABRIEL, à verrouiller] : un DOWN peut être produit par injection d'énergie sans UP préalable, puis rebondir en UP. Le [chapitre 06](06_ACCELERATEURS_FUSION_REFUSION_SILLONS.md#down-injecte) conserve le cas d'accélérateur. Cette exception à la condition universelle d'antécédent ne déplace pas les indices du DUD de H. Les lettres U/D restent des lectures du modèle ; aucun instant absolu d'origine de T n'est introduit.

<a id="up-seul-t1"></a>
## Un UP arrive seul à t=1 — RV46

**Clarification ultérieure RV48.** Gabriel définit t=1 comme t=x sans t=x−1 et l'identifie au Big Bang. Les questions et inférences ci-dessous décrivent l'étape précédant cette réponse ; voir la [formulation actuelle](#t1-bigbang).

**[V3 — GABRIEL, à verrouiller] — V47.** Gabriel écrit : « un  UP arrive seul, a t=1 ». Le [verbatim RV46](visuels/JOURNAL_REVISION_VISUELLE.md#rv46) est conservé avec son indice exact. Aucune substitution de t=x+1 à t=1 n'est faite.

**Rapprochement documentaire.** V2 décrit un point d'adressage initial structurel en t=0+1 dans son [glossaire](sources/V2/02_GLOSSAIRE_CANONIQUE_fr.md), entrée t=0+1. [C05/A9](sources/EXTRAITS_V2_CITES.md#c05) distingue la génération sans e embouteillé préalable à cet adressage initial des émissions ultérieures. Le [chapitre 11 V2, §1.4, A17/A18](sources/V2/11_MUON_SILLON_ET_COUT_fr.md) emploie explicitement t=1. Ces références motivent un raccord ; elles ne démontrent pas que les termes « seul », UP et « sans embouteillé préalable » sont interchangeables. La question ancienne [S24](sources/SESSION_GABRIEL.md#s24) abordait déjà t=1 et x−1.

**[INFÉRENCE GPT — NON VALIDÉE] — I49.** Lire ce t=1 comme un repère d'adressage initial structurel est une possibilité appuyée par le vocabulaire de V2. Lire « seul » comme « sans DOWN préalable » serait une seconde précision à confirmer. Sous cette dernière lecture, le UP de t=1 ne serait pas un rebond exigeant un DOWN antérieur ; les règles du cycle maintenu auraient donc un domaine distinct de ce cas. Aucune origine absolue dans un temps extérieur à T n'est ainsi déduite.

**[OUVERT]** Fixer le sens de t=1 et de « seul », puis la relation de cet UP avec un éventuel sillon, une source ou un DOWN. La question adressée à Gabriel en [RV47](visuels/JOURNAL_REVISION_VISUELLE.md#rv47) n'est pas une réponse validée. Le message ne donne ni unité de durée, ni identité physique standard, ni stabilité du UP isolé. Les anciennes inférences Claude I14/I15 sur UP/photon à t=0+1 restent non validées en [C23](sources/EXTRAITS_V2_CITES.md#c23).

Le DUD local de H, le DOWN partagé entre cycles et le DOWN produit par injection d'énergie conservent chacun leur portée. Ils ne suffisent pas à imposer leur schéma au cas t=1 encore à préciser.

<a id="t1-bigbang"></a>
## t=1 : t=x sans t=x−1 — Big Bang dans V3

**Historique corrigé par RV50/RV51.** Cette section conserve la lecture produite après RV48. Gabriel confirme ensuite qu'il existe un DOWN global sur T et restreint le « sans » au DOWN local d'un cycle précédent. La lecture d'I50 excluant tout amont x−1 est retirée. Voir la [formulation actuelle](#down-global-t0).

**[V3 — GABRIEL, à verrouiller] — V48.** Le [verbatim RV48](visuels/JOURNAL_REVISION_VISUELLE.md#rv48) précise : t=1 est t=x, mais sans t=x−1 ; Gabriel appelle ce cas le Big Bang. Lu avec [RV46](visuels/JOURNAL_REVISION_VISUELLE.md#rv46), cet énoncé précise le UP qui arrive seul à t=1. L'indice n'est plus laissé indéterminé entre t=x+1 et un cas initial : c'est une lecture x dont l'amont x−1 est absent selon la proposition de Gabriel.

**[INFÉRENCE GPT — NON VALIDÉE] — I50.** Traiter ce cas comme une condition d'adressage initiale permettrait de distinguer la présence de l'UP à t=1 des UP obtenus par rebond d'un DOWN. La règle ordinaire utilisant une entrée en x−1 ne pourrait pas être appliquée telle quelle là où cet amont est déclaré absent. Il faut définir une condition particulière ou limiter le domaine de cette règle. Ce besoin de formalisation ne fournit pas encore l'état initial ni une loi cosmologique.

L'absence de x−1 dans ce cas n'est pas une soustraction numérique « t=x moins quelque chose ». Elle ne fixe pas un pas d'une seconde et ne doit pas être remplacée sans hypothèse par une entrée nulle. Aucun état du type DOWN(0)=0, aucune énergie initiale et aucune identification de t=0 à un lieu spatial ne sont déduits.

**Raccord au corpus.** Le [glossaire V2](sources/V2/02_GLOSSAIRE_CANONIQUE_fr.md), entrée t=0+1, associait déjà l'adressage initial structurel au terme Big Bang. [C05/A9](sources/EXTRAITS_V2_CITES.md#c05) distinguait un adressage initial sans e embouteillé préalable. [11 V2, A17/A18](sources/V2/11_MUON_SILLON_ET_COUT_fr.md) disait « Il n'y a pas de Big Bang, seulement son t=1 ». V48 apporte maintenant une définition directe de l'absence de x−1 ; les formulations historiques restent inchangées, avec leur sens structurel et leurs tensions propres. Cette clarification ne valide pas toutes les anciennes inférences UP/photon/neutrino.

**[OUVERT]** Donner le domaine des indices et le sens opératoire de l'absence d'amont. Le socle V2 pose T circulaire et constant : un prédécesseur défini partout sur un cercle ne peut pas simplement disparaître d'un calcul. Il faut préciser si l'absence porte sur l'adressage, sur une donnée, sur le domaine de la règle ou sur la structure des indices elle-même ; aucune de ces solutions n'est choisie par GPT. La règle de manifestation à t=1, son rapport à un éventuel x+1 et le raccord aux observables cosmologiques restent à construire.

<a id="down-global-t0"></a>
## DOWN global sur T et repère t=0 lorsque x=1 — RV50/RV51

**[V3 — GABRIEL, à verrouiller] — V49.** Gabriel associe le DOWN à l'énergie noire et à la matière noire, existant en t=x−1 sur l'entière étendue de T. Il attribue l'intensité du Big Bang à sa balance avec la structure de T en entier. Le [verbatim RV50](visuels/JOURNAL_REVISION_VISUELLE.md#rv50) préserve exactement ses mots. Cette proposition corrige l'interprétation précédente de GPT qui supprimait tout DOWN ou tout amont structurel du cas t=1.

**[GABRIEL_VALIDÉ] — portée limitée de V50.** À la question distinguant « sans DOWN local d'un cycle précédent » et « DOWN global inscrit sur tout T », Gabriel répond « exact » puis précise l'indice. La [question et la réponse exactes RV51](visuels/JOURNAL_REVISION_VISUELLE.md#rv51) constituent la source de cette confirmation interne au modèle. Ce qui était une conciliation proposée par GPT est désormais confirmé pour cette distinction précise ; aucune loi globale ni ancienne inférence cosmologique n'est validée en bloc.

**[V3 — GABRIEL, à verrouiller] — précision de V50.** Gabriel ajoute : « t=x-1 quand x=1 ca donne t=0, donc e ». La substitution de l'indice s'écrit simplement :

$$
x=1\quad\Longrightarrow\quad t=x-1=0.
$$

Dans cette même notation, la fenêtre x−1 / x / x+1 devient 0 / 1 / 2. Cette substitution n'attribue pas d'elle-même un état à la troisième position ni une durée physique aux écarts d'indices. Le « donc e » se raccorde au postulat V2 de l'unique e à t=0 ; il ne constitue pas l'égalité numérique 0=e et n'introduit pas un nouveau e. Le statut structurel de t=0 est conservé, sans le transformer en lieu 3D.

**Renvois précis au corpus V2.** Le [glossaire V2](sources/V2/02_GLOSSAIRE_CANONIQUE_fr.md), entrées t=0, t=x−1, t=0+1, Q137 et Q140, place e à t=0, décrit les sillages cumulés en x−1 sur T entier et relie les sillages à matière noire/énergie noire. La [chaîne V2, maillons 1–2](sources/V2/03_CHAINE_STRUCTURELLE_MINIMALE_fr.md) conserve e unique et T constant/circulaire. Ce sont des propositions historiques du corpus, non une vérification physique externe. [C14](sources/EXTRAITS_V2_CITES.md#c14) distingue le sillon individuel de la trace appelée sillage : V49 ne permet pas de remplacer silencieusement tous ces termes par DOWN.

**[INFÉRENCE GPT — NON VALIDÉE] — I51.** Pour le calcul, chercher une condition de cohérence reliant l'UP à t=1 à la configuration entière de T, tout en distinguant cette dépendance globale d'un DOWN local précédent. Cette proposition formaliserait la balance indiquée par Gabriel, mais ne fournit encore ni opérateur, ni mesure sur T, ni loi reliant la structure à une intensité observable. Elle ne suppose pas que les contributions de T s'additionnent linéairement.

**[OUVERT]** Définir le lien entre DOWN, sillons, sillages et les deux lectures matière noire/énergie noire ; expliciter le raccord de leur inscription sur T au repère t=0 de ce cas. Définir ce que mesure « intense », puis la règle qui le calcule. T entier n'est pas transformé en énergie infinie ou en somme de copies de e. La confirmation locale/globale lève cette ambiguïté de lecture, mais ne résout pas tout le domaine des indices ni les tensions S28/S31 sur le langage de t=0.

<a id="rebond-perpendiculaires"></a>
## Espace de t=1 et rebond entre t=1 et t=2 — RV53/RV54

**[V3 — GABRIEL, à verrouiller] — V51.** Gabriel met en rapport l'« espace » occupé par t=1 avec l'énergie noire et la matière noire de l'univers sur toute son existence. Il précise que la proximité à t=0 dans 4df(x) a un impact sur son calcul. Le [verbatim RV53](visuels/JOURNAL_REVISION_VISUELLE.md#rv53) conserve sa phrase, y compris sa formulation elliptique sur cet espace. V51 prolonge la balance globale V49 ; il ne fournit pas une taille, une unité, une densité ou une loi de proximité.

**[V3 — GABRIEL, à verrouiller] — V52.** Le rebond entre t=1 et t=2 donne ses perpendiculaires à l'adressage de e ; les premiers DOWN apparaissent entre ces deux repères. Cette proposition attribue une origine aux perpendiculaires. Le nombre, les directions, les angles et la manière dont le rebond les produit ne sont pas encore donnés.

**[GABRIEL_VALIDÉ] — V53, portée précise.** À la question distinguant ces premiers DOWN du DOWN global associé au secteur noir sur tout T, Gabriel répond : « Oui, les premiers DOWN locaux ». La [question et la réponse RV54](visuels/JOURNAL_REVISION_VISUELLE.md#rv54) confirment qu'il parle des premiers DOWN locaux issus de cet UP. Le DOWN global reste inscrit sur T ; la distinction confirmée en RV51 est donc conservée.

| Repère | Proposition actuellement retenue dans le modèle | Limite de lecture |
|---|---|---|
| T entier | DOWN global associé à matière noire/énergie noire ; balance globale de V49 | Aucun total énergétique ou volume calculé. |
| t=0 lorsque x=1 | x−1=0, « donc e », selon V50 | Repère structurel ; pas une localisation 3D ajoutée par GPT. |
| t=1 | UP sans DOWN local d'un cycle précédent ; espace occupé mis en rapport avec le secteur noir de toute l'existence de l'univers | Le sens mathématique d'« espace occupé » reste ouvert. |
| Entre t=1 et t=2 | Rebond donnant les perpendiculaires ; premiers DOWN locaux | « Entre » est conservé : aucune case DOWN exactement à t=2 ni phase intermédiaire chiffrée n'est imposée. |

**Renvois V2.** Le [glossaire V2](sources/V2/02_GLOSSAIRE_CANONIQUE_fr.md), entrées « proximité à t=0 » et « gradient de répulsion noire », décrit déjà une modulation structurelle liée à la profondeur. Q126 rapproche deux positions structurelles, t=0+1/t=0+2, de la représentation vectorielle et des perpendiculaires ; Q138 situe l'adressage initial à t=0+1. Ces rapprochements sont documentaires : ils ne valident pas automatiquement les correspondances historiques avec neutrinos/quarks, ni les valeurs de calibration anciennes. Le nouveau rôle générateur du rebond est celui de RV53, avec sa propre portée.

**[INFÉRENCE GPT — NON VALIDÉE] — I52.** Pour chercher l'origine de cette géométrie, faire des perpendiculaires une configuration à déterminer par le calcul du rebond. Un calcul conditionnel d'un état déjà formé peut encore utiliser une géométrie donnée ; il ne doit pas être présenté comme une dérivation de son origine. Si la réponse de 4df dépend elle-même des perpendiculaires, il faudra définir les relations couplées et chercher une solution commune, plutôt que faire dépendre chaque grandeur d'une autre sans règle qui les détermine.

**[OUVERT]** « Espace » désigne-t-il une occupation dans 4df, une étendue observable ou une autre grandeur du modèle ? La proximité structurelle à t=0 ne reçoit pas automatiquement une distance en mètres ni une dépendance en 1/x. Définir aussi le sens de « entre 1 et 2 » : des indices entiers seuls ne décrivent pas une phase intermédiaire ; une relation de transition ou un paramètre interne pourrait le faire, sans que l'un soit choisi ici. Enfin, définir dans quel espace et selon quelle règle deux directions sont perpendiculaires, puis ce qui sélectionne leur nombre et leur orientation. Aucun angle de l'éventail du muon ni second IN/OUT indépendant n'est fixé par ce nouvel énoncé.

<a id="trois-departs"></a>
## Trois moments et trois départs — 17 septembre 2026

**[V3 — GABRIEL, à verrouiller] — V54.** Après sa [question RV56](visuels/JOURNAL_REVISION_VISUELLE.md#rv56) sur l'origine des triplets spatial et temporel, Gabriel propose : les trois moments existant dans le temps produisent trois départs différents dans le temps. Il y voit une piste pour le lien espace-temps. Son [verbatim RV58](visuels/JOURNAL_REVISION_VISUELLE.md#rv58) conserve « je crois » : la proposition demeure une hypothèse de l'auteur, et non une démonstration.

**Correction reçue en RV60.** Gabriel rejette la lecture « trois départs du même adressage » soumise en RV59. Il décrit plusieurs adressages répartis dans les phases, avec un retour de 4df et un x+1 pour chacun. La précision V55 ci-dessous remplace cette interprétation de GPT ; le sens opératoire des indices reste à formaliser.

**[INFÉRENCE GPT — NON VALIDÉE] — I53/I54.** Rapprocher ces départs du rebond générateur de perpendiculaires de V52 est une piste de construction. Il faut toutefois définir une lecture spatiale des réponses avant d'en conclure à des directions indépendantes. Trois origines temporelles ne sont pas, par leur seul nombre, trois axes spatiaux. Les perpendiculaires du modèle, les orbitales et les dimensions spatiales ne sont pas identifiées automatiquement.

**Raccord au corpus.** Le [glossaire V2](sources/V2/02_GLOSSAIRE_CANONIQUE_fr.md), entrée « triplet temporel », décrit x−1 comme position relative à la lecture. Q126 rapproche des positions structurelles et la représentation vectorielle. Ces sources fournissent du contexte ; elles ne démontrent pas trois départs ni une correspondance un moment/un axe. T constant et e unique restent le socle ; aucune multiplicité nouvelle de e n'est introduite.

**[OUVERT]** Définir la relation entre les trois départs, les états UP/DOWN d'une même identité et l'UP seul à t=1. « Départ » n'est pas automatiquement synonyme de UP ; aucune case DOWN du DUD local de H n'est changée. Pour expliquer les trois dimensions, montrer comment la règle produit exactement trois directions spatiales indépendantes, puis relier la géométrie ainsi obtenue aux observables.

<a id="adressages-dephases"></a>
## Correction : adressages distincts et retours propres — RV60

**[V3 — GABRIEL, à verrouiller] — V55.** À la question « trois départs du même adressage », Gabriel répond « non ». Il parle de e_addres1 en x−1 et de e_adres2 en x, puis d'un troisième dans « l'autre moment du temps ». Chaque existence/adressage possède un retour de 4df induisant un vecteur de mouvement ; à chacun correspond un x+1 résultant de 4df, avec déplacement dans x. Le [verbatim RV60](visuels/JOURNAL_REVISION_VISUELLE.md#rv60) conserve cette formulation exacte. V54 doit désormais être lu à travers cette correction.

**[INFÉRENCE GPT — NON VALIDÉE] — I55.** Pour calculer, distinguer l'identité de l'adressage, sa phase et le repère commun sur T. Un indice i pourrait identifier chaque adressage et ses données de retour ; la correspondance des indices locaux avec T doit ensuite être fournie par une règle. Cette notation n'est pas encore validée par Gabriel. Le troisième adressage n'est pas placé arbitrairement dans une case, et les trois phases ne sont pas identifiées aux trois directions spatiales.

**[OUVERT]** Déterminer si le même repère sur T porte simultanément des rôles x−1/x/x+1 différents selon l'adressage, ou si la description requiert une autre correspondance entre phases et repères. Définir ce que signifie « x+1 résulte de 4df » et comment le retour produit un déplacement lu en x. Plusieurs adressages conservent l'unique e du modèle. Le DUD confirmé pour un adressage de H et les identités nucléaires restent des contraintes distinctes à respecter ; aucun décalage arbitraire de leurs symétries n'est ajouté.

<a id="chaleur-definition-gabriel"></a>
## Chaleur — définition de Gabriel, 22 septembre 2026

**[GABRIEL_VALIDÉ] — V67, portée terminologique interne.** Dans le modèle de Gabriel, **la chaleur désigne l'émission de e libre**. Source explicite : [RV90](visuels/JOURNAL_REVISION_VISUELLE.md#rv90). Cette définition précise le sens de son exemple du tungstène et corrige une lecture de GPT qui traitait sa demande uniquement à partir du vocabulaire thermodynamique.

Le mot conserve un autre sens lorsqu'il est cité dans une référence de physique externe. La rédaction doit indiquer le registre employé. Le statut ici donné atteste la définition de l'auteur, pas une équivalence expérimentale établie entre rayonnement, chaleur thermodynamique et énergie noire.

**[OUVERT]** Définir les grandeurs qui décrivent cette émission dans 4df et leur correspondance aux mesures. Les énoncés V65/V66 sur énergie noire et effets de x−1 restent conservés dans le [chapitre 19](19_CONSCIENCE_AUTO_PROGRESSION_CHEMINS_E.md#definition-chaleur-emission), sans les compléter silencieusement.

<a id="chaleur-accumulation-rayonnement"></a>
## Chaleur : accumulation avec rayonnement — précision RV92

**[GABRIEL_VALIDÉ] — V69, portée terminologique interne.** Gabriel précise : « la chaleur est une accumulation de e libre avec rayonnement ». Cette formulation complète V67 en donnant une place explicite à l'accumulation. La définition de travail doit conserver celle-ci et l'émission, avec leur ordre de clarification dans [RV90](visuels/JOURNAL_REVISION_VISUELLE.md#rv90) et [RV92](visuels/JOURNAL_REVISION_VISUELLE.md#rv92).

**[V3 — GABRIEL, à verrouiller] — V68.** Cinétique et chaleur permettent une accumulation en t=x+1 sans changer la nature de l'énergie embouteillée. La portée de « nature » et le raccord avec l'existence en x−1 et la récupération en x+1 de S47 restent ouverts. Le [chapitre 20](20_ACCUMULATION_TRANSMISSION_ET_CHIMIE.md) conserve les distinctions et la lecture chimique de la photosynthèse/combustion (V70).

<a id="chimie-conversion-e"></a>
## Chimie — conversion de e

**[GABRIEL_VALIDÉ] — V72, portée interne au modèle.** Gabriel confirme que la chimie est de la conversion de e, [RV96](visuels/JOURNAL_REVISION_VISUELLE.md#rv96). Le parcours temporel photosynthèse/pétrole/extraction/transformation précise la succession des transformations et ne retire pas cette conversion. Le [chapitre 20](20_ACCUMULATION_TRANSMISSION_ET_CHIMIE.md#chimie-conversion-e) conserve ces deux aspects ; mécanisme et bilan restent à formaliser.

<a id="watt-poids-structurel"></a>
## « Watt » et poids structurel de l'inférence

**[GABRIEL_VALIDÉ] — V95, clarification de vocabulaire interne.** En [RV120](visuels/JOURNAL_REVISION_VISUELLE.md#rv120), Gabriel décrit l'usage de l'inférence donnant une structure à e et présente « watt » comme une simplification. **[V3 — GABRIEL, à verrouiller] — V96/V97.** Il relie le poids évoqué aux activités présentes des fourmis et à leur historique en x−1.

La définition SI du watt reste celle de la puissance physique. Aucun remplacement de cette unité, équivalent numérique ou conversion depuis le poids structurel n'est établi. Le [chapitre 19](19_CONSCIENCE_AUTO_PROGRESSION_CHEMINS_E.md#poids-historique-inference) conserve cette distinction et la correction de la lecture GPT centrée sur le compteur électrique.

<a id="enchainement-contexte-xplus1"></a>
## Enchaînement en x+1 et contexte personnel

**[V3 — GABRIEL, à verrouiller] — V98 à V100.** En [RV122](visuels/JOURNAL_REVISION_VISUELLE.md#rv122), Gabriel situe le lien entre les schémas évoqués et leur suite dans la structure d'enchaînement en t=x+1. Il distingue faim et soif anciennes des envies particulières de sushi ou d'alcool liées à l'expérience et au contexte. Le [chapitre 19](19_CONSCIENCE_AUTO_PROGRESSION_CHEMINS_E.md#besoins-enchainement-contexte) conserve les exemples et sépare la lecture du triplet proposée par GPT (I73). Aucune équation de transition ou action inévitable n'est fixée.

## Masse comme source dans l'exemple de l'hydrogène — RV129

Gabriel identifie la source à la masse (V103, [GABRIEL_VALIDÉ] pour le sens du terme), décrite comme le sillon résidant dans **4df(x)** et permettant l'observation de l'électron en **t=x** (V104, [V3 — GABRIEL, à verrouiller]). Les [mots exacts et les trois quarks évoqués](02_EXISTENCE_STRUCTURELLE_ET_SILLONS.md#source-masse-trois-quarks) sont conservés. **[OUVERT]** Le lien de cette notation avec le noyau situé dans 4df(x−1) en S16 n'est pas décidé : ni correction automatique de x en x−1, ni équivalence des notations n'est introduite.

## « Vers t=0 », puis « vers t=x » — RV134

**[V3 — GABRIEL, à verrouiller] — V107.** La [description de chute et de rebond répétés](05_SYNCHRONISME_UP_DOWN_ET_FORCE_FORTE.md#chute-rebond-repetition) emploie « vers » dans les deux directions. Elle n'affirme pas une arrivée à t=0 à chaque cycle et ne fixe pas une métrique ou une durée. Le DUD local et T constant restent conservés ; la notation n'est pas transformée en un voyage spatial vers t=0 ou en une variation de T. L'association DOWN/descente et UP/rebond est la reformulation I76 de GPT.
