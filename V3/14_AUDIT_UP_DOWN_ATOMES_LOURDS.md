# 14 — Audit UP/DOWN des atomes lourds et recherche d'un invariant orbital

**10 septembre 2026. Audit textuel, sans génération d'image.** 30 éléments et 110 isotopes tabulés sont examinés. Le comptage UP/DOWN de référence est distingué de sa répartition temporelle candidate.

## Demande et portée

Verbatim exact de Gabriel, également conservé dans [RV27](visuels/JOURNAL_REVISION_VISUELLE.md#rv27) :

> *[Verbatim de Gabriel conservé localement — accessible sous sa supervision.]*

Il s'agit d'une demande de vérification et de recherche. L'intuition de Gabriel ne vaut pas validation préalable d'un rapport précis. Les hypothèses de répartition qui suivent restent **[INFÉRENCE GPT — NON VALIDÉE]**. Les identités arithmétiques sur les données externes sont démontrées comme telles.

L'échantillon comprend les éléments Z=55 à 83, hors Pm, ainsi que Th et U, avec tous les isotopes répertoriés dans leurs tables NIST Handbook consultées. Le tableau de synthèse retient pour chaque élément l'isotope dont l'abondance affichée est la plus grande ; les tests portent sur les 110 cas, y compris les autres isotopes. Ce choix est reproductible et ne sélectionne pas les isotopes en fonction du rapport recherché.

Les [références structurées](sources/REFERENCES_AUDIT_ATOMES_LOURDS.json) conservent URL, Z, configurations, nombres de masse A, fragments sources et empreintes des pages. Les abondances historiques servent seulement à choisir une ligne de synthèse. Aucune masse atomique moyenne n'est utilisée comme nombre entier A.

## Trois résultats

1. **Une relation exacte avec l'occupation électronique :** 2u−d = 6O₂+3O₁, où O₂ compte les orbitales spatiales doublement occupées et O₁ les simplement occupées dans la description choisie d'un atome neutre. C'est une identité de comptage issue de la composition de valence et de la neutralité, pas une nouvelle constante physique de 4df.
2. **La relation « trois orbitales doublement occupées par rebond double » ne reste pas constante.** Elle coïncide pour Au-197, mais les isotopes du mercure donnent déjà des contre-exemples sans ambiguïté de couche ouverte.
3. **La règle des trois colonnes identiques n'est pas générale : 77 cas sur 110 donnent des comptes non entiers.** Une construction à colonnes différant d'au plus une unité fournit des grilles entières et une continuation avec bord commun pour les 110 cas. Cette cohérence combinatoire ne valide pas le raccord physique des comptes à des lectures dans T.

## 1. Comptages externes et invariant exact

Notons Z les protons, N les neutrons, A=Z+N ; u et d désignent ici les **nombres de quarks de valence**, pas des forces ni des amplitudes. Avec uud par proton et udd par neutron :

$$
u=2Z+N,\qquad d=Z+2N.
$$

Ces compositions sont des données du cadre physique usuel. [DOE — quarks de valence du proton et du neutron](https://www.energy.gov/science/doe-explainsprotons).

On en déduit :

$$
u+d=3A,\qquad d-u=N-Z,\qquad \boxed{2u-d=3Z}.
$$

Dans un atome neutre, le nombre d'électrons est Z. Avec O₂ orbitales spatiales doubles et O₁ simples :

$$
Z=2O_2+O_1,
$$

donc :

$$
\boxed{2u-d=6O_2+3O_1}.
$$

La même relation peut se normaliser en un coefficient 3 par électron, ou 6 par orbitale double après correction des occupations simples :

$$
K_e=\frac{2u-d}{2O_2+O_1}=3,
\qquad
K_2=\frac{2u-d-3O_1}{O_2}=6\quad(O_2>0).
$$

**Ce sont deux écritures du même invariant.** Le coefficient 6 ne signifie pas six rebonds physiques par orbitale. Ni la neutralité ni la capacité de deux électrons par orbitale n'ont été dérivées de 4df. La représentation orbitale et l'exclusion sont ici des entrées de comparaison. [NIST — états, configurations et exclusion](https://www.nist.gov/pml/atomic-spectroscopy-compendium-basic-ideas-notation-data-and-formulas/atomic-spectroscopy-10).

Exemple Au-197 : u=276, d=315, O₂=39, O₁=1. Alors 2×276−315=237=6×39+3×1. Le comptage des occupations part de la configuration Au I documentée par le [NIST](https://physics.nist.gov/PhysRefData/Handbook/Tables/goldtable1.htm).

### Pourquoi cette combinaison est sélectionnée

Pour une combinaison linéaire à coefficients constants αu+βd :

$$
\alpha u+\beta d=(2\alpha+\beta)Z+(\alpha+2\beta)N.
$$

Si l'on veut qu'elle reste inchangée entre isotopes d'un même élément alors que leurs comptes d'occupation restent les mêmes, le coefficient de N doit s'annuler : α+2β=0. À un facteur multiplicatif près, **2u−d est donc la seule combinaison linéaire non nulle de cette classe indépendante de N**.

Cette sélection est algébrique. Elle explique pourquoi une normalisation électronique peut être exacte pour cette combinaison, tandis que d−u conserve une dépendance à l'isotope. Elle ne démontre pas une relation dynamique entre les quarks et chaque orbitale.

## 2. Orbitales, occupations simples et sous-couches

L'audit compare quatre dénominateurs : nombre de sous-couches fermées ; nombre de sous-couches occupées ; nombre d'orbitales spatiales occupées ; nombre d'orbitales spatiales doublement occupées.

Pour les couches ouvertes d'atomes lourds, le calcul ne force pas une décomposition spatiale unique de l'état corrélé. À configuration nl fixée, il utilise les bornes combinatoires suivantes. Une sous-couche contient g=2l+1 orbitales spatiales ; pour q électrons :

$$
\max(0,q-g)\le O_{2,nl}\le\lfloor q/2\rfloor,
\qquad O_{1,nl}=q-2O_{2,nl}.
$$

Les intervalles résultants sont des possibilités de comptage dans cette représentation, pas un intervalle expérimental d'incertitude. Les configurations fermées et les exemples Au/Pt fixent leurs comptes sans cette ambiguïté. Par exemple, Hg neutre a quarante orbitales spatiales doubles et aucune simple, pour chacun des isotopes comparés dans cette configuration. [NIST — Hg I et isotopes](https://physics.nist.gov/PhysRefData/Handbook/Tables/mercurytable1.htm).

## 3. Audit de la méthode temporelle précédente

**[INFÉRENCE GPT — NON VALIDÉE]** Le chapitre 11 assimilait les inventaires u/d aux totaux d'une fenêtre de trois lectures remplies. Cette identification reste une hypothèse. Avec A identités présentes à chaque lecture, notons Uⱼ le nombre de cases UP à la colonne j et Dⱼ=A−Uⱼ.

Les colonnes identiques exigeraient Uⱼ=u/3 et Dⱼ=d/3. Elles ne donnent des nombres entiers que si N−Z est divisible par trois. Sur les **110 isotopes**, **77 échouent à cette condition**. Arrondir les colonnes séparément sans conserver les sommes ne résout pas le problème.

Le précédent r₂=(N−Z)/3 désigne donc un compte de doubles par raccord seulement dans le cas particulier à marges identiques et entières, sous les autres hypothèses de soutien. Lorsqu'il est fractionnaire, il reste un indice algébrique de l'ancien schéma ; il ne désigne pas un événement fractionné et n'est pas la moyenne des deux raccords effectivement dessinés.

### Construction entière proposée

Poser u=3q+r, avec r=0,1,2. Choisir U₀,U₁,U₂ aussi proches que possible, de somme u : placer q+1 dans les r premières colonnes et q dans les autres. Cet ordre des restes est une **convention de construction**, pas une origine déplacée séparément pour chaque identité.

Pour N≥Z, les quatre multiplicités ci-dessous sont non négatives :

| Motif dans la fenêtre x−1/x/x+1 | Nombre d'identités |
|---|---:|
| DUD | U₁ |
| UDU | Z |
| UDD | U₀−Z |
| DDU | U₂−Z |

Le total vaut A. Chaque identité a une seule valeur par lecture, les marges sont U₀/U₁/U₂, et les totaux sont u/d. Ce choix donne au moins un UP dans chaque ligne de la fenêtre ; ce critère n'a pas été imposé par Gabriel. D'autres répartitions peuvent exister.

### Soutiens entre colonnes

En gardant le choix d'utiliser chaque DOWN source une fois et de donner un ou deux soutiens à chaque UP cible :

$$
R_{2,j}=D_j-U_{j+1}=A-U_j-U_{j+1},
\qquad
R_{1,j}=2U_{j+1}-D_j.
$$

Pour les deux raccords de la fenêtre :

$$
R_{2,0}=U_2-Z,\qquad R_{2,1}=U_0-Z.
$$

Chaque UP reçoit le DOWN de sa propre identité comme soutien. Les autres DOWN peuvent ajouter un deuxième soutien à certaines cibles, tout en conservant leur identité. L'existence des appariements est vérifiée dans les 110 cas ; leurs partenaires sont choisis pour construire un exemple, sans géométrie de proximité calculée.

Exemple Hg-200 :

| Lecture | x−1 | x | x+1 |
|---|---:|---:|---:|
| UP | 94 | 93 | 93 |
| DOWN | 106 | 107 | 107 |

Les totaux sont 280 UP et 320 DOWN. Le premier raccord utilise 13 doubles et 80 simples ; le second 14 doubles et 79 simples. Un nombre constant de doubles par raccord n'est plus imposé. Ces valeurs sont des résultats du candidat, pas des mesures de rebonds.

### Deux fenêtres qui se recouvrent

On peut prolonger les quatre motifs en DUDU, UDUD, UDDD, DDUD et répéter ces quatre positions. Les fenêtres (0,1,2) et (2,3,4) partagent **la même lecture 2**, avec 4 égal à 0 dans ce candidat. Les deux fenêtres possèdent les mêmes totaux u/d ; aucune identité n'est à la fois UP et DOWN ; aucun UP n'est immédiatement suivi d'un UP, y compris à la jonction.

Cette construction respecte le bord commun demandé dans [RV09](visuels/JOURNAL_REVISION_VISUELLE.md#rv09). La répétition sur quatre positions est une **[INFÉRENCE GPT — NON VALIDÉE]**, pas une période physique mesurée, une variation de T ou une preuve de stabilité. Elle autorise la persistance de certains DOWN.

À l'inverse, identifier directement le triplet à une période de longueur trois, tout en interdisant deux UP adjacents, serait impossible ici : chaque identité aurait au plus un UP, donc au plus A occurrences UP, alors que u=A+Z>A. Une fenêtre de trois lectures et une période ne sont pas interchangeables.

## 4. Test de la constante liée aux rebonds doubles

Le rapprochement suggéré par Au est O₂/R₂=39/13=3. L'audit l'examine ainsi que les rapports avec les trois autres dénominateurs. Aucun de ces quatre rapports ne possède une valeur universelle dans l'échantillon, même en autorisant les bornes d'occupation des couches ouvertes.

Le contrôle le plus simple utilise un même élément :

| Isotope | Orbitales spatiales doubles O₂ | Doubles au premier raccord | Doubles au second raccord |
|---|---:|---:|---:|
| Hg-198 | 40 | 12 | 13 |
| Hg-200 | 40 | 13 | 14 |
| Hg-202 | 40 | 14 | 14 |
| Hg-204 | 40 | 14 | 15 |

Les isotopes et la configuration de référence sont ceux du [NIST — mercure](https://physics.nist.gov/PhysRefData/Handbook/Tables/mercurytable1.htm) ; les colonnes de rebonds sont calculées. Les ensembles possibles de doubles de Hg-198 et Hg-204 restent disjoints dans les raccords de cette construction. Leur différence ne vient ni d'un changement d'occupation électronique ni d'un choix entre occupations de couches ouvertes.

Le même témoin existe avec U-235 et U-238 : même configuration de référence, mais respectivement 17 et 18 doubles dans le candidat à colonnes égales. [NIST — uranium](https://physics.nist.gov/PhysRefData/Handbook/Tables/uraniumtable1.htm).

**Portée du verdict :** le nombre de rebonds doubles de cette méthode n'est pas déterminé par le seul nombre d'orbitales ou de sous-couches occupées. Le lien général proposé par Gabriel en [RV21](visuels/JOURNAL_REVISION_VISUELLE.md#rv21) reste possible comme contrainte à définir ; ces tests éliminent les normalisations simples examinées, pas toutes les relations imaginables.

Pour l'ancien indice r₂, la dépendance s'écrit explicitement :

$$
\frac{r_2}{O_2}=\frac{N-Z}{3O_2}
=\frac{2}{3}\frac{N/Z-1}{1-O_1/Z}.
$$

La valeur 1/3 demande N−Z=O₂. La coïncidence de Au traduit cette condition particulière ; ni elle ni N/Z ne sont imposés par la seule occupation orbitale.

## 5. Tableau des cas représentatifs

O₂ et O₁ sont les comptes d'orbitales spatiales doubles et simples dans les bornes définies plus haut. Une plage n'est pas une incertitude mesurée. R₂(0→1 ; 1→2) correspond aux deux raccords du candidat entier. Chaque nom renvoie à sa table NIST ; les 110 lignes complètes sont dans les résultats JSON.

| Isotope (source) | u | d | O₂ | O₁ | R₂ (0→1 ; 1→2) |
|---|---:|---:|---:|---:|---|
| [Cs-133](https://physics.nist.gov/PhysRefData/Handbook/Tables/cesiumtable1.htm) | 188 | 211 | 27 | 1 | 7 ; 8 |
| [Ba-138](https://physics.nist.gov/PhysRefData/Handbook/Tables/bariumtable1.htm) | 194 | 220 | 28 | 0 | 8 ; 9 |
| [La-139](https://physics.nist.gov/PhysRefData/Handbook/Tables/lanthanumtable1.htm) | 196 | 221 | 28 | 1 | 8 ; 9 |
| [Ce-140](https://physics.nist.gov/PhysRefData/Handbook/Tables/ceriumtable1.htm) | 198 | 222 | 28 | 2 | 8 ; 8 |
| [Pr-141](https://physics.nist.gov/PhysRefData/Handbook/Tables/praseodymiumtable1.htm) | 200 | 223 | 28–29 | 1–3 | 7 ; 8 |
| [Nd-142](https://physics.nist.gov/PhysRefData/Handbook/Tables/neodymiumtable1.htm) | 202 | 224 | 28–30 | 0–4 | 7 ; 8 |
| [Sm-152](https://physics.nist.gov/PhysRefData/Handbook/Tables/samariumtable1.htm) | 214 | 242 | 28–31 | 0–6 | 9 ; 10 |
| [Eu-153](https://physics.nist.gov/PhysRefData/Handbook/Tables/europiumtable1.htm) | 216 | 243 | 28–31 | 1–7 | 9 ; 9 |
| [Gd-158](https://physics.nist.gov/PhysRefData/Handbook/Tables/gadoliniumtable1.htm) | 222 | 252 | 28–31 | 2–8 | 10 ; 10 |
| [Tb-159](https://physics.nist.gov/PhysRefData/Handbook/Tables/terbiumtable1.htm) | 224 | 253 | 30–32 | 1–5 | 9 ; 10 |
| [Dy-164](https://physics.nist.gov/PhysRefData/Handbook/Tables/dysprosiumtable1.htm) | 230 | 262 | 31–33 | 0–4 | 10 ; 11 |
| [Ho-165](https://physics.nist.gov/PhysRefData/Handbook/Tables/holmiumtable1.htm) | 232 | 263 | 32–33 | 1–3 | 10 ; 11 |
| [Er-166](https://physics.nist.gov/PhysRefData/Handbook/Tables/erbiumtable1.htm) | 234 | 264 | 33–34 | 0–2 | 10 ; 10 |
| [Tm-169](https://physics.nist.gov/PhysRefData/Handbook/Tables/thuliumtable1.htm) | 238 | 269 | 34 | 1 | 10 ; 11 |
| [Yb-174](https://physics.nist.gov/PhysRefData/Handbook/Tables/ytterbiumtable1.htm) | 244 | 278 | 35 | 0 | 11 ; 12 |
| [Lu-175](https://physics.nist.gov/PhysRefData/Handbook/Tables/lutetiumtable1.htm) | 246 | 279 | 35 | 1 | 11 ; 11 |
| [Hf-180](https://physics.nist.gov/PhysRefData/Handbook/Tables/hafniumtable1.htm) | 252 | 288 | 35–36 | 0–2 | 12 ; 12 |
| [Ta-181](https://physics.nist.gov/PhysRefData/Handbook/Tables/tantalumtable1.htm) | 254 | 289 | 35–36 | 1–3 | 11 ; 12 |
| [W-184](https://physics.nist.gov/PhysRefData/Handbook/Tables/tungstentable1.htm) | 258 | 294 | 35–37 | 0–4 | 12 ; 12 |
| [Re-187](https://physics.nist.gov/PhysRefData/Handbook/Tables/rheniumtable1.htm) | 262 | 299 | 35–37 | 1–5 | 12 ; 13 |
| [Os-192](https://physics.nist.gov/PhysRefData/Handbook/Tables/osmiumtable1.htm) | 268 | 308 | 36–38 | 0–4 | 13 ; 14 |
| [Ir-193](https://physics.nist.gov/PhysRefData/Handbook/Tables/iridiumtable1.htm) | 270 | 309 | 37–38 | 1–3 | 13 ; 13 |
| [Pt-195](https://physics.nist.gov/PhysRefData/Handbook/Tables/platinumtable1.htm) | 273 | 312 | 38 | 2 | 13 ; 13 |
| [Au-197](https://physics.nist.gov/PhysRefData/Handbook/Tables/goldtable1.htm) | 276 | 315 | 39 | 1 | 13 ; 13 |
| [Hg-202](https://physics.nist.gov/PhysRefData/Handbook/Tables/mercurytable1.htm) | 282 | 324 | 40 | 0 | 14 ; 14 |
| [Tl-205](https://physics.nist.gov/PhysRefData/Handbook/Tables/thalliumtable1.htm) | 286 | 329 | 40 | 1 | 14 ; 15 |
| [Pb-208](https://physics.nist.gov/PhysRefData/Handbook/Tables/leadtable1.htm) | 290 | 334 | 40–41 | 0–2 | 14 ; 15 |
| [Bi-209](https://physics.nist.gov/PhysRefData/Handbook/Tables/bismuthtable1.htm) | 292 | 335 | 40–41 | 1–3 | 14 ; 15 |
| [Th-232](https://physics.nist.gov/PhysRefData/Handbook/Tables/thoriumtable1.htm) | 322 | 374 | 44–45 | 0–2 | 17 ; 18 |
| [U-238](https://physics.nist.gov/PhysRefData/Handbook/Tables/uraniumtable1.htm) | 330 | 384 | 44–45 | 2–4 | 18 ; 18 |

## 6. Vérification, statut et prochain calcul

Le [calcul reproductible](calculs/AUDIT_UP_DOWN_ATOMES_LOURDS.py) vérifie les configurations et Z, les identités de valence, les bornes d'occupation, les deux écritures de l'invariant, les grilles entières, les deux fenêtres et les quatre raccords de leur continuation. **75 812 cases** et **40 285 liens de soutien** sont contrôlés sur l'ensemble. Les résultats incluent les quatre tests de rapports et les témoins isotopiques. [Résultats détaillés](calculs/RESULTATS_AUDIT_ATOMES_LOURDS.json).

Les sources V2 restent intactes : leur distinction entre comptes et mécanismes, les synchronismes de [C10](sources/EXTRAITS_V2_CITES.md#c10), les limites de ratios dans [C11](sources/EXTRAITS_V2_CITES.md#c11) et la dette de lien avec les occupations [C12](sources/EXTRAITS_V2_CITES.md#c12) sont conservés.

**[OUVERT]** Le pont qui identifie des inventaires de valence à trois lectures de sillons doit encore être établi. Le test H de [11](11_REPARTITION_ET_REBONDS_UP_DOWN.md) reste actif ; cette extension N≥Z ne le résout pas. Le facteur 3 de 2u−d=3Z provient ici de la composition de valence, pas d'une preuve de trois positions de T.

Pour la suite, l'invariant 2u−d=6O₂+3O₁ peut servir de contrôle de cohérence d'un calcul. Pour produire les occupations ou expliquer les partenaires DOWN, une règle de 4df doit les sélectionner avant comparaison, conformément à [S20](sources/SESSION_GABRIEL.md#s20). L'audit n'a dérivé ni Pauli, ni une constante physique nouvelle, ni une loi de stabilité nucléaire.
