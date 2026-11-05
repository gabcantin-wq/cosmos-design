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

## Captures réelles

Les schémas sont des illustrations de concepts, pas des faux tableaux de bord.
Le fichier `docs/clusters-couleur/media/captures.json` prépare cinq emplacements
communs : `overview`, `memory`, `cooperation`, `actions`, `evolution`.

Pour un emplacement, placer une image publique préparée dans ce répertoire,
puis renseigner `src` (chemin absolu du site), `alt`, `caption`, `observed_on`.
Formats : PNG, JPEG ou WebP. Nom de fichier alphanumérique, tirets ou underscores.
Exemple de chemin : `/clusters-couleur/media/vue-cluster.png`.

Un champ absent ou une image inaccessible conserve le schéma. Les images brutes
restent dans l’espace privé local avant sélection ; ne pas forcer leur ajout Git.
Une capture nouvelle ne doit pas élargir la portée de la légende sans preuve.

## Textes et preuves

Les textes publics sont des synthèses des neuf chapitres du dossier documentaire
et des précisions de Gab. `documents/reperes.txt` en nomme la provenance et les
limites. Les reçus et les sources internes ne sont pas recopiés dans le dépôt.

Le cas mémoire de 875 tokens est historique ; les rappels sont de laboratoire,
sur une situation stable. Le travail de 500 itérations est une cible à mesurer.
Les scénarios hospitaliers et les familles de couleur sont des exemples.

Après édition du HTML, régénérer les compagnons complets :

```text
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

Les réglages de protection de `main`, de domaine et de redirection HTTPS restent
ceux de l’hébergement existant ; cette contribution ne les modifie pas.
