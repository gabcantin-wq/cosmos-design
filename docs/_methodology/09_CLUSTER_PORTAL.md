# Portail et deux présentations des Clusters Couleur

Édition du 5 novembre 2026. Ce document est public dans Git ; il ne contient pas
de captures brutes, de secrets ou de copie du corpus interne.

## Périmètre

- `docs/index.html` : portail général ; Clusters Couleur et Univers sont les deux
  entrées développées. Les quatre rubriques encore vides restent identifiées.
- `docs/clusters-couleur/index.html` : découverte grand public sans comparaison
  avec une entreprise, fonctions, mémoire, coopération, évolution et preuves.
- `docs/clusters-couleur/vision/index.html` : présentation satirique et prospective,
  inspirée des codes des pages de plateforme IA. Textes et illustrations propres ;
  aucune affiliation, témoignage inventé ou promesse d’équivalence globale.
- `docs/assets/site.css`, `site.js` et les SVG : socle partagé, sans dépendance ni
  suivi externe. Les contenus restent lisibles sans JavaScript.
- `docs/univers/` : conservé tel quel.

Le site reste statique. GitHub Pages publie `main` / `docs`. Une poussée d’une
branche de travail ne remplace pas le déploiement de la production. Préparer et
relire la réalisation avant l’intégration dans `main`.

## Deux rythmes de publication

Décision de Gab du 5 novembre 2026 : la documentation suit l'évolution du cluster
et de oMaster ; la présentation commerciale reste plus stable et soignée.

| Publication | Sélection des captures | Déclencheur |
|---|---|---|
| Documentation vivante | `docs/clusters-couleur/media/documentation/captures.json` | Évolution observée de l'interface, de la structure, d'une fonction ou de ses preuves. |
| Vitrine commerciale | `docs/clusters-couleur/media/commercial/edition-2026-11/captures.json` | Nouvelle édition cohérente choisie volontairement, ou correction d'une information devenue inexacte. |

Chaque page référence explicitement son manifeste. Les chemins d'images doivent
rester dans le répertoire de ce manifeste : une édition commerciale ne peut pas
pointer vers une capture documentaire qui changera au prochain rafraîchissement.
Il n'existe aucun repli vers l'autre sélection. Le chargeur et le vérificateur
contrôlent cette séparation. Les styles et le JavaScript restent communs : leurs
modifications demandent de vérifier le rendu et le comportement des deux pages.

### Actualiser la documentation

1. Relever le changement observé et les explications qu'il rend nécessaires.
2. Choisir les captures utiles parmi les originaux privés. Examiner ce qu'elles
   montrent avant copie publique ; conserver les originaux sans les écraser.
3. Ajouter chaque image sous un nouveau nom daté, par exemple
   `omaster-memory-20261105-092916.png`. Ne pas réécrire une ancienne image.
4. Mettre à jour les entrées du manifeste documentaire, sa `revision` et sa date
   `updated_on`. Chaque capture porte `src`, `alt`, `caption`, `observed_on` et
   `context` (interface/version/parcours, selon ce qui est effectivement connu).
5. Mettre à jour les textes et le journal visible dans « Le cluster évolue » ;
   distinguer changement d'interface, proposition et fonction effectivement vérifiée.
6. Régénérer la galerie statique et le compagnon texte, vérifier, puis commettre
   les seuls fichiers concernés sur la branche et vérifier le SHA poussé.

Les anciennes sélections restent retrouvables dans Git. Une nouvelle capture
n'élargit pas la portée d'une preuve. Une correction de fond met aussi à jour les
explications concernées ; changer une image seule ne suffit pas dans ce cas.

### Renouveler la vitrine

Préparer une série lisible et cohérente pour une édition. Copier les images
sélectionnées dans le répertoire propre à cette édition, même si leur origine
est documentaire. Renseigner ses légendes et dates ; changer délibérément la
référence du manifeste dans la page commerciale lors de l'adoption de l'édition.
Le texte, les visuels et les promesses se relisent ensemble. Une correction
nécessaire n'attend pas une refonte graphique. Les changements documentaires
ordinaires ne modifient ni cette sélection ni son compagnon textuel.

La première sélection documentaire comporte trois captures du 5 novembre 2026 :
recherche mémoire, télémétrie et doctrine proposée. La vitrine conserve ses
illustrations conceptuelles tant que sa série de captures n'est pas choisie.

Les cinq identifiants disponibles sont `overview`, `memory`, `cooperation`,
`actions`, `evolution`, indépendamment dans chaque sélection. Formats : PNG,
JPEG ou WebP ; noms alphanumériques avec tirets ou underscores. Un champ absent
ou une image inaccessible laisse la capture statique ou le schéma en place.

Ce circuit est une publication Git. Il n'active aucun rafraîchissement autonome
du cluster ni prise de contrôle de oMaster. Un futur maintien par oDOC pourra
appliquer ce même parcours à partir d'observations et de reçus vérifiés.

## Textes et preuves

Les textes publics sont des synthèses des neuf chapitres du dossier documentaire
et des précisions de Gab. `documents/reperes.txt` en nomme la provenance et les
limites. Les reçus et les sources internes ne sont pas recopiés dans le dépôt.

Le cas mémoire de 875 tokens est historique ; les rappels sont de laboratoire,
sur une situation stable. Le travail de 500 itérations est une cible à mesurer.
Les scénarios hospitaliers et les familles de couleur sont des exemples.

Après édition du HTML, régénérer les compagnons complets :

```text
python tools/build_cluster_captures.py
python tools/build_cluster_texts.py
python tools/check_cluster_site.py
node --check docs/assets/site.js
```

Prévisualisation locale depuis la racine, pour un utilisateur qui l’ouvre :

```text
python -m http.server 8765 --bind 127.0.0.1 --directory docs
```

Vérifier les trois routes, le menu mobile, les onglets (clic et clavier), le
schéma de coopération, les liens, les téléchargements et l’absence de débordement.
Examiner le rendu avec et sans JavaScript. Aucun bouton ne prétend lancer une
opération sur un cluster vivant.

Pour la séparation des publications, vérifier qu'un nouveau manifeste documentaire
ne change pas le rendu de la vitrine, qu'une référence croisée est rejetée et
qu'une image indisponible conserve la présentation précédente. Avant intégration
dans `main`, actualiser le lien public vers l'historique de préparation.

Les réglages de protection de `main`, de domaine et de redirection HTTPS restent
ceux de l’hébergement existant ; cette contribution ne les modifie pas.
