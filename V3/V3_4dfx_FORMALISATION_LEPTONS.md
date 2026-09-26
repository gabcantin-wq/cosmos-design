# V3 — Première formalisation mathématique des leptons

**État : première passe partielle.** Le travail mathématique est lancé à la demande de Gabriel. Cette passe produit des définitions candidates, des calculs conditionnels et des tests adversariaux. **Les masses et les durées de vie ne sont pas encore dérivées de 4df(x).**

La précision reçue pendant le travail change le point de départ : Gabriel parle d'une **surface dans 4df(x)**, lue à x comme un cycle supplémentaire, puis précise que **la deuxième perpendiculaire adresse e différemment**. Aucun angle et aucun second IN/OUT indépendant n'ont été confirmés. Les [verbatims M01–M03](sources/SESSION_MATHEMATIQUES_CODEX.md) sont conservés séparément de la conversation ChatGPT S01–S67.

## 1. Axiomes et propositions effectivement utilisés

| Élément | Statut et source | Portée retenue |
|---|---|---|
| T constant ; e unique | [GABRIEL_VALIDÉ], [C01](sources/EXTRAITS_V2_CITES.md#c01) | Les calculs ne multiplient pas e et ne font pas s'écouler T. |
| Sillon pré-inscrit ; déplacement comme résultat | [GABRIEL_VALIDÉ], [C03](sources/EXTRAITS_V2_CITES.md#c03) | Géométrie et adressage précèdent la définition des observables recherchées. |
| Orbitales comme réponses, vitesse comme sortie | [V3 — GABRIEL, à verrouiller], S20/S33 | Pas d'orbitales ni de vitesse cible cachées dans les entrées. |
| Masse du muon : budget minimal de la deuxième perpendiculaire | [V3 — GABRIEL, à verrouiller], [S53](sources/SESSION_GABRIEL.md#s53) | Motivation d'une formulation en budget ; fonction de coût non donnée. |
| Perpendiculaire appartenant au sillon ; rayon modifié | [V3 — GABRIEL, à verrouiller], S58/S62 | Séparer structure interne et projection. |
| Désintégration : différence x/x+1 | [V3 — GABRIEL, à verrouiller], S64 | Chercher une règle de transition, sans supposer une durée de survie d'un objet dans T. |
| Surface dans 4df ; adressage différent par la deuxième perpendiculaire | [V3 — GABRIEL, à verrouiller], [M02–M03](sources/SESSION_MATHEMATIQUES_CODEX.md#m02) | L'angle du secteur et le nombre de couples IN/OUT restent ouverts. |

La validation interne par l'auteur ne constitue pas une validation expérimentale. Toutes les nouvelles correspondances mathématiques proposées ici portent **[INFÉRENCE GPT — NON VALIDÉE]**. Les démonstrations qui suivent établissent leurs conséquences sous hypothèses explicites ; elles ne valident pas ces hypothèses comme lois physiques.

Les anciennes formulations du volume intégré et des chemins restent consultables dans [C30](sources/EXTRAITS_V2_CITES.md#c30). Le corpus y laissait déjà ouvertes la géométrie exacte, la contraction et la métrique. La correction de t=0 en S28 doit être appliquée à toute reprise de ce vocabulaire.

## 2. Dictionnaire mathématique proposé

**[INFÉRENCE GPT — NON VALIDÉE] — notation de travail.**

| Symbole | Sens précis dans cette passe | Unité / condition |
|---|---|---|
| σ_j | configuration structurelle complète du régime j | Objet à définir ; ne se réduit pas au compte des perpendiculaires. |
| Σ_μ | surface associée au régime muonique dans l'espace structurel | Aucune métrique euclidienne ni forme circulaire supposée. |
| η | entourage et conditions de maintien | Variables structurelles à définir ; pas un coefficient de fit. |
| A[σ;η] | règle d'adressage associée à une configuration | Fonction encore inconnue, commune aux régimes. |
| Π_x | règle de lecture à x | Produit des observables ; aucune formule fournie par le corpus. |
| B[σ;η] | budget structurel au repos dans le raccord candidat | Énergie si l'on adopte le raccord à m c². |
| ν_σ | mesure de l'occupation structurelle | À définir ; elle n'est pas supposée égale à une aire 3D. |
| b(z;η) | densité de budget par unité de ν_σ | Énergie / unité de mesure structurelle. |
| A_j admissible | ensemble des configurations du régime j compatibles avec ses contraintes | À définir sans sélectionner celles qui donnent la masse voulue. |
| X, u | lame propre et coût de retour historiques | Sans dimension dans la convention V2 ; pas encore des entrées dérivées. |
| R, Q | rapports m_μ/m_e et m_p/m_e, réservés aux comparaisons | Sans dimension ; données externes lorsqu'ils sont chiffrés. |
| r_V2 ; a_j | rapport interne L/(2w) ; échelle radiale coulombienne de comparaison | Sans dimension ; longueur. Deux objets distincts. |
| t_obs, δt_obs, τ_vie | temps observable, intervalle de lecture, durée de vie | Secondes ; distincts de T et de ses indices. |
| p_sortie | probabilité conditionnelle de quitter un régime par intervalle de lecture | Sans dimension ; aucune égalité supposée avec le coût u. |

**Point de vocabulaire.** « Mode d'adressage » est proposé pour exprimer M03. Ce n'est pas l'affirmation d'un mode propre spectral, d'une particule supplémentaire ou d'une copie de e.

## 3. Trois formes candidates et leur domaine

### Candidate A — Structure, adressage et budget

**[INFÉRENCE GPT — NON VALIDÉE].** La première séparation utile s'écrit :

$$
\mathcal A_e=\mathcal A[\sigma_e;\eta],
\qquad
\mathcal A_\mu=\mathcal A[\sigma_\mu;\eta],
\qquad
\mathcal O_j(x)=\Pi_x\!\left(\mathcal A_j\right).
$$

La configuration σ_μ comporte la surface décrite par Gabriel. La règle A exprime comment cette configuration modifie l'adressage du même e. La lecture Π_x devra rendre compte du « cycle supplémentaire ». Ces notations ne présument pas que A_μ soit la somme de deux adressages indépendants.

Une écriture possible du budget est :

$$
\mathcal B[\sigma;\eta]
=\int_{\Omega_\sigma}b(z;\eta)\,d\nu_\sigma(z).
$$

Le domaine Ω_σ peut être une surface ou un espace de configurations ; le choix reste à établir. Si l'on emploie une aire, il faut aussi sa mesure et une densité de budget par unité d'aire. **Compter des dimensions ne fournit pas cette densité.**

Pour traduire le « budget minimal », on peut proposer :

$$
B_j^{\min}(\eta)
=\inf_{\sigma\in\mathscr A_j(\eta)}
\mathcal B[\sigma;\eta],
\qquad
\boxed{\frac{m_\mu}{m_e}
=\frac{B_\mu^{\min}}{B_e^{\min}}}.
$$

Le rapport exige B_e^min > 0. Le lien m_j c² = B_j^min est un raccord proposé avec l'énergie au repos, pas une identité géométrique dérivée. L'existence d'un minimum, sa positivité et sa pertinence pour un régime instable restent à montrer. « Minimal » dans la phrase de Gabriel ne suffit pas à choisir automatiquement ce principe variationnel pour tous les leptons.

**Sorties accessibles si les fonctions étaient connues :** budgets et rapports de masse ; observables via Π_x. **État actuel : NON DÉRIVÉ**, car les ensembles admissibles, la mesure, b, A et Π_x ne sont pas fixés.

### Candidate B — Raccord cinétique externe, après détermination d'une masse

Les relations ci-dessous sont importées pour un test de compatibilité. Leur interprétation comme lecture de sillons reste **[INFÉRENCE GPT — NON VALIDÉE]**. Source externe : [PDG, Kinematics](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-kinematics.pdf).

Pour un objet de masse au repos m > 0, auquel une énergie cinétique K ≥ 0 est associée dans un référentiel donné :

$$
E=mc^2+K,\qquad
p=\frac{\sqrt{E^2-m^2c^4}}{c},
\qquad
\boxed{v=\frac{c^2p}{E}
=c\sqrt{1-\left(\frac{mc^2}{mc^2+K}\right)^2}}.
$$

Conséquences calculées : K→0 donne v→0 ; K→∞ donne v→c. La direction de la vitesse exige aussi celle de l'impulsion. Pour un photon avec E>0, la branche externe est m=0 et E=pc ; ne pas employer la forme indéterminée m=K=0.

**Ce qui est obtenu :** une vitesse à partir de m et K donnés. **Ce qui ne l'est pas :** la masse, c ou le budget structurel qui produirait ces grandeurs. Ce module ne peut donc pas remplacer la candidate A.

Pour un ensemble :

$$
M^2c^4=E_{\rm total}^2-c^2|\mathbf P_{\rm total}|^2.
$$

Deux photons d'énergie ε chacun donnent M=0 s'ils sont parallèles, et M=2ε/c² s'ils sont opposés. C'est un calcul de masse de système, sans masse individuelle des photons. Une explication par 4df devra rendre ces bilans ; les reproduire par l'identité importée ne constitue pas une prédiction nouvelle.

### Candidate C — Loi de survie conditionnelle dans le temps observable

**[INFÉRENCE GPT — NON VALIDÉE].** Supposons des intervalles de lecture égaux δt_obs et une probabilité conditionnelle constante p_sortie de quitter le régime à chaque intervalle. Après N intervalles :

$$
P_{\rm surv}(N)=(1-p_{\rm sortie})^N.
$$

La constante de décroissance exponentielle équivalente est :

$$
\boxed{
\tau_{\rm exp}
=-\frac{\delta t_{\rm obs}}{\ln(1-p_{\rm sortie})}
},
\qquad 0<p_{\rm sortie}<1.
$$

Pour p_sortie petit, τ_exp ≈ δt_obs/p_sortie. Dans un modèle strictement discret où les événements sont placés aux fins d'intervalles, l'espérance du premier temps de sortie vaut δt_obs/p_sortie ; elle n'est pas exactement τ_exp. Une comparaison avec une durée de vie continue exige donc une limite ou une règle de lecture explicite.

Il s'agit d'une statistique des observations, sans changement de T. La stationnarité du risque, l'intervalle de lecture et leur origine structurelle sont des hypothèses supplémentaires. À p_sortie=0, la survie est constante dans ce modèle.

**NON DÉRIVÉ :** p_sortie et δt_obs. La phrase « x et x+1 diffèrent » ne les fournit pas. Aucune égalité p_sortie=u, 6u ou Δ/B n'est adoptée.

## 4. Dérivations effectuées et endroits où le calcul s'arrête

### 4.1 Pourquoi « surface » et « cycle » ne fixent pas une masse

Dans la candidate A, conserver les configurations et multiplier la densité de budget du régime muonique par un facteur positif a multiplie son budget par a. Le nombre de perpendiculaires et la description « surface » ne changent pas.

Ce contre-exemple ne propose pas d'ajuster a : il montre ce qu'une règle universelle de budget doit interdire ou déterminer. **Sans cette règle, les seules descriptions géométriques ne sélectionnent pas le rapport 206,768…** La mesure ou le couplage entre géométrie et budget constitue une pièce mathématique nécessaire.

De même, des longueurs, des temps et des constantes sans dimension ne peuvent produire une unité de masse par seuls produits et puissances : la dimension M manque. Pour une masse absolue, il faut une échelle de masse/énergie ou d'action, fournie ou dérivée. Un rapport de masses peut en revanche éliminer une échelle commune. Utiliser m_e comme unité constitue alors une calibration déclarée.

### 4.2 Audit conditionnel de l'ancien secteur V2

**Cette section examine la candidate historique ; elle n'impose pas un secteur à la surface de M02.** Source : [C31](sources/EXTRAITS_V2_CITES.md#c31).

Si deux lames rectangulaires identiques ont chacune une aire Lw et si deux secteurs identiques ont chacun une aire θL²/2, le rapport des aires est :

$$
G=\frac{2(\theta L^2/2)}{2Lw}
=\frac{\theta L}{2w}.
$$

Le facteur deux apparaît au numérateur et au dénominateur ; il s'annule. Deux contributions IN/OUT ne suffisent donc pas, dans cette géométrie, à doubler le rapport.

Sous la comptabilité V2, et en conservant son hypothèse de coût uniforme :

$$
R=1+\frac{\theta}{2}X(1-6u).
$$

À R fixé par la mesure :

$$
\boxed{X(u,\theta)=\frac{2(R-1)}{\theta(1-6u)}}.
$$

Pour θ=π/2 et sous les hypothèses X>0, 0≤u<1/6, une infinité de couples sont compatibles. Exemples calculés à partir de R=206,7682827 :

| u choisi uniquement comme témoin mathématique | X correspondant |
|---:|---:|
| 0 | 261,992315 |
| 0,01 | 278,715228 |
| 0,05 | 374,274735 |
| 0,10 | 654,980786 |

Ces couples sont des contre-exemples à l'unicité, pas des paramètres physiques retenus. La borne conditionnelle est X≥261,992315 pour cet angle. À θ=π, le produit X(1−6u) serait 130,996157. **La précision de Gabriel n'a choisi aucun de ces angles.**

Le nombre 262 de V2 est un arrondi du produit, pas X calculé. Le retrait de X=2/α demeure effectif, [C22](sources/EXTRAITS_V2_CITES.md#c22). Compter six contributions ne démontre pas non plus qu'elles se combinent en 1−6u : des pertes fractionnelles successives donneraient une autre composition. Le mécanisme d'addition reste à justifier.

### 4.3 Pourquoi écrire une intégrale ne détermine pas son intégrand

[C32](sources/EXTRAITS_V2_CITES.md#c32) propose L/w = ∫g(θ)dθ. Connaître seulement la valeur de cette intégrale ne permet pas de retrouver g : on peut ajouter toute fonction h d'intégrale nulle, sous réserve de conserver les éventuelles contraintes de positivité.

Même si la mesure est connue, une seule intégrale ne fixe donc pas un champ de budget. Dire que le problème est « bien posé » exigerait des conditions supplémentaires d'existence, d'unicité et de stabilité. Les poids près de t=0 devront aussi rendre les intégrales finies ; aucune singularité régularisée par un seuil choisi pour reproduire une masse n'est introduite.

## 5. Tests électron, muon, tau et neutrino

Les données de comparaison et leurs incertitudes sont conservées dans les [références externes](sources/REFERENCES_CALCUL_LEPTONS.md). Les calculs utilisent les valeurs centrales, sans ajustement statistique.

| Régime | Résultat de cette passe | Verdict limité à ce qui a été fait |
|---|---|---|
| Électron | Référence de normalisation disponible ; aucun budget propre calculé | Masse absolue NON DÉRIVÉE ; stabilité microscopique NON DÉRIVÉE. |
| Muon | Famille continue X/u de l'ancien modèle explicitée ; nouvelle surface séparée de sa lecture | 206,768… est une contrainte externe, pas une sortie. |
| Tau | Comptabilité des incréments vérifiée ; test d'incréments égaux effectué | Loi structurelle du troisième régime NON DÉRIVÉE. |
| Neutrinos | Les candidats ne déterminent ni états de masse ni mélange | Masses et vitesses structurelles NON DÉRIVÉES. |
| Photon | Limite cinématique importée identifiable | m=0 et v=c ne sont pas dérivés de la candidate A. |

Pour les neutrinos, les oscillations contraignent des différences de masses au carré et le mélange ; elles ne fixent pas seules l'échelle absolue. La vitesse proche de c exige un régime relativiste approprié. Ne pas attribuer d'emblée une masse commune aux saveurs. [PDG, §14.9](https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrino-mixing.pdf).

**Comptabilité avec les références choisies :**

$$
I_2=R-1=205{,}7682827,
$$

$$
I_3=\frac{m_\tau}{m_e}-\frac{m_\mu}{m_e}
\approx3270{,}59698.
$$

On obtient m_τ/m_μ ≈ 16,81769, alors que I₃/I₂ ≈ 15,89456. Le tau utilisé ici est 1776,93 MeV/c², source PDG 2025 ; V2 et le prompt conservent leur ancienne référence.

**Test adverse d'une hypothèse simplificatrice — [INFÉRENCE GPT — NON VALIDÉE].** Si l'on ajoutait deux incréments identiques, I₃=I₂, alors :

$$
m_\tau^{\rm test}=(1+2I_2)m_e
\approx210{,}806\ {\rm MeV}/c^2.
$$

Le résidu relatif à 1776,93 MeV/c² est −88,14 %. **L'hypothèse d'incréments égaux est rejetée.** Elle n'était pas un acquis de Gabriel ; son échec ne réfute pas toute géométrie de surface ou de troisième perpendiculaire.

## 6. Lien masse–rayon : résultat calculé et indépendance

**Repère externe utilisé comme comparaison.** Pour un problème coulombien à deux corps, avec noyau ponctuel de charge Z, l'échelle radiale est :

$$
a_j=\frac{\hbar}{Z\alpha c\,\mu_j},
\qquad
\mu_j=\frac{m_jM}{m_j+M}.
$$

Les mêmes états réduits peuvent avoir une forme comparable en r/a_j tout en ayant une échelle spatiale différente. Ce calcul ne démontre pas la projection de 4df. Le rôle de la masse réduite dans les atomes muoniques est documenté par [FAMU](https://doi.org/10.1140/epja/s10050-020-00195-9).

Pour un proton comme centre, R=m_μ/m_e et Q=m_p/m_e :

$$
\boxed{
\frac{a_e}{a_\mu}
=\frac{\mu_\mu}{\mu_e}
=\frac{R(1+Q)}{R+Q}
\approx185{,}942
}.
$$

Valeurs centrales calculées : a_e ≈ 5,29465×10⁻¹¹ m et a_μ ≈ 2,84748×10⁻¹³ m. Ce sont des échelles coulombiennes, pas le rayon de charge du proton. En comparant au rayon de Bohr a₀ d'un centre infiniment lourd plutôt qu'à a_e, le quotient est légèrement différent.

**Correction de portée :** le facteur proche de 207 s'obtient dans la limite M→∞. Pour le proton, le rapport des échelles est proche de 186. Le produit m a n'est pas constant exactement : (m_μ a_μ)/(m_e a_e) ≈ 1,11200, tandis que μ a est constant dans cette approximation.

**Résultat d'indépendance, démontré.** Si la masse prédite est R=F(X,u), puis si le rayon est calculé uniquement par H(R)=R(1+Q)/(R+Q), alors :

$$
\nabla_{X,u} H(F)=H'(F)\,\nabla_{X,u} F.
$$

Les deux lignes du jacobien sont proportionnelles, son déterminant est nul et son rang est au plus un. **Ce rayon recalculé ne sépare pas X et u.** Une mesure radiale indépendante peut tester la relation masse–rayon ; elle ne fournit une nouvelle direction de contrainte structurelle que si la prédiction du rayon dépend d'autre chose que du seul F déjà fixé.

Cela précise l'inférence S63, sans supprimer la proposition de Gabriel S62 : une même modification structurelle peut produire masse et rayon, mais il reste à écrire deux règles de sortie informatives.

## 7. Déséquilibre x/x+1 et durée de vie

**[OUVERT]** Soustraire deux configurations demande de définir leur espace et leur correspondance. Un Δ de configuration, un déficit de budget, une énergie libérée et un taux de sortie ne sont pas la même grandeur.

Si Δ_E désigne la différence entre les **énergies totales de deux états d'un même système fermé**, la conservation impose un bilan nul après inclusion des produits et de leur mouvement. Un budget propre au régime parent peut changer sans que l'énergie totale disparaisse. La distinction doit être inscrite avant de définir τ=F(Δ).

La candidate C montre la pièce manquante : une règle produisant une probabilité ou un taux et son échelle de temps observable. Une différence statique ne donne pas automatiquement cette règle.

**Fermeture et stabilité sont distinctes.** Sous une hypothèse de carte de retour mathématique R_s, les cartes R_s(z)=z/2 et R_s(z)=2z ont toutes deux z=0 comme point fixe. Les perturbations s'y contractent dans le premier cas et s'amplifient dans le second. Le seul écart R_s(z)−z nul au point fixe ne démontre donc pas la stabilité. Cette illustration concerne une règle candidate de retour ; elle n'affirme pas un T qui évolue.

**Test adverse du produit constant**, déjà signalé comme doute dans [C23](sources/EXTRAITS_V2_CITES.md#c23). Sous l'hypothèse I₂τ_μ=I₃τ_τ :

$$
\tau_\tau^{\rm test}
=\tau_\mu\frac{I_2}{I_3}
\approx1{,}38222\times10^{-7}\ {\rm s}.
$$

La référence est 2,903×10⁻¹³ s : le résultat est environ **4,76×10⁵ fois trop grand**. Le produit constant est rejeté dans cette comptabilité. Une nouvelle loi devra expliquer cette différence ; changer arbitrairement la durée d'une phase pour chaque espèce serait une calibration supplémentaire.

## 8. Contradictions et insuffisances restantes

Toutes les lignes suivantes sont **[OUVERT]**.

| Pièce | Problème précis restant |
|---|---|
| Surface et mode d'adressage | La surface n'a pas encore de mesure ni de règle de lecture produisant le cycle. |
| IN/OUT | M03 ne choisit pas un deuxième couple indépendant ; aucun facteur deux ajouté pour cette raison. |
| Mesure du budget | Une surface ou un nombre de chemins ne fixe ni une densité énergétique ni une échelle absolue. |
| Masse, volume, coût | Le raccord global entre les trois formulations historiques reste candidat, C25. |
| X/u | La masse seule fixe un produit ; le rayon importé ne supprime pas la dégénérescence. |
| Largeur | A12 relie w au voisinage ; A19 dit que les sillons changent la position OUT, pas sa largeur. Préciser s'il s'agit de variations et d'objets différents, C04. |
| T et t=0 | Les intégrales historiques vers t=0 exigent un domaine structurel compatible avec S28, sans lieu visité. |
| Désintégration | Δ, règle de sortie et temps observable manquent ; ni le coût ni le nombre de perpendiculaires n'est un taux. |
| Cinétique | Le raccord externe comporte m et c ; il ne les prédit pas. Un ralentissement partiel peut transférer une part de K : préciser la portée de « ramasser le sillon ». |
| Minimum | Définir contraintes, existence d'un minimum non nul et traitement des états instables. |
| Neutrino | Raccord entre absence de déplacement structurel, vitesse lue, états de masse et saveurs. |
| Unification | Les trois candidats sont des modules partiels ; aucune fonction universelle calculable les reliant n'a été obtenue. |

## 9. Prédictions falsifiables et tests disponibles

**Aucune nouvelle prédiction numérique propre à V3 n'est obtenue dans cette passe.** Les résultats numériques sont des comparaisons externes ou des tests d'hypothèses simplificatrices, avec les entrées annoncées.

Les prochaines prédictions recevables seraient :

1. Un rapport muon/électron à partir d'une mesure et d'une règle de budget fixées avant comparaison.
2. Le rapport tau/muon avec la même règle, sans nouvelle constante choisie pour le tau.
3. Une observable de forme ou de rayon qui contraint la surface autrement que par une substitution de la masse mesurée.
4. Les durées et canaux de sortie avec une même règle de transition et une horloge observable définie.
5. Une variation prévue lorsque l'entourage change, en distinguant régime libre et état lié.

Les familles et capacités orbitales restent des cibles ultérieures. Rien ici ne déduit n, l, m_l, m_s ni n'identifie UD/DU au spin.

## 10. Points à construire avec Gabriel et trace des calculs

La dernière précision directe est : « la deuxieme perpendiculaire addresse le e differament ». **Elle est conservée comme [V3 — GABRIEL, à verrouiller].**

Les propositions suivantes appartiennent à GPT et attendent une définition ou une validation ciblée :

- Employer « mode d'adressage » pour distinguer le changement de géométrie de sa lecture en cycle.
- Décrire le muon par une configuration de surface σ_μ et une application commune A[σ;η], sans addition présumée de deux IN/OUT.
- Représenter le budget par une mesure pondérée ; préciser ce qui compte un élément de surface ou un ensemble de retours.
- Traduire « budget minimal » par le minimum d'une fonction sous contraintes, en donnant ces contraintes.
- Définir quel changement de l'adressage peut se lire comme une différence entre x et x+1, avant d'y attacher une durée.

Aucune validation de vocabulaire ne remplacera la définition d'une mesure ou d'une règle. Inversement, Gabriel peut préciser le mécanisme avec ses mots avant qu'une notation soit choisie.

Les [résultats numériques](calculs/RESULTATS_PREMIERE_PASSE.json) conservent entrées et sorties. Le [calcul reproductible](calculs/VERIFICATION_PREMIERE_PASSE.py) vérifie les identités algébriques, les limites, la famille X/u et le défaut de rang du test masse–rayon. Ces vérifications ne sont pas des validations physiques de V3.

**Prochain objet de travail : la règle d'adressage modifiée par la surface.** Le secteur circulaire reste une candidate historique testée, et le nombre de couples IN/OUT reste ouvert.

## Complément RV53/RV54 — origine proposée de la géométrie

**[V3 — GABRIEL, à verrouiller]** Gabriel attribue au rebond entre t=1 et t=2 les perpendiculaires de l'adressage de e ; il relie le calcul à la proximité structurelle à t=0 et à l'espace occupé associé à t=1. **[GABRIEL_VALIDÉ] — portée limitée :** les premiers DOWN évoqués sont locaux, avec maintien du DOWN global. [Source complète](01_TERMINOLOGIE_T_REINDEXEE.md#rebond-perpendiculaires).

**[INFÉRENCE GPT — NON VALIDÉE] — I52.** Ajouter un problème d'origine des perpendiculaires au calcul des états qui les utilisent. Les calculs conditionnels de cette première passe ne résolvent pas ce problème ; ils ne sont ni validés ni réfutés par le seul nouvel énoncé. Le [cahier de calcul](10_CAHIER_DU_PROCHAIN_CALCUL_4DFX.md#origine-perpendiculaires) distingue les deux portées et les définitions manquantes. L'angle de l'éventail, le comptage des cycles et la dérivation des masses/durées restent ouverts. Scripts et résultats numériques antérieurs conservés sans modification.
