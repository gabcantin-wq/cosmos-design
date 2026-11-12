# Refonte du site — 12 novembre 2026

Livrable : vitrine commerciale et parcours technique, vérifiés avant publication.
Les reçus GitHub Pages et HTTP sont rattachés au suivi ORG-14829 après déploiement.

Mandat de Gab : refaire la page et publier sur le domaine existant, avec une
vitrine commerciale visuelle et une section technique descriptive. Les dix images
ont été fournies pour cette refonte. Coordination : ORG-14829, liée à la
nomenclature ORG-14828 et au mandat de publication ponctuel ORG-14689.

## Sources et construction

- `tools/prism/brand.json` définit une fois l'entreprise, la marque et le domaine.
- `tools/prism/{shell,home,technical}.html` sont les gabarits éditables.
- `python tools/prism/build.py` produit `docs/index.html` et
  `docs/technique/index.html`, sans dépendance tierce.
- `docs/assets/prism/site.css` et `site.js` portent l'affichage et les interactions.
- `docs/assets/prism/images.json` conserve la provenance, les dimensions et les
  empreintes des dix originaux. Ils sont copiés sans retouche ; les images sous
  la ligne de flottaison se chargent à la demande.

La page commerciale présente l'approche, le réemploi de l'expérience, la
coopération, des usages et une fiche de mission. La page technique décrit les
rayons, les fonctions, les portées de mémoire, les itérations, le cycle de
développement, la coopération et les espaces de dialogue. Les schémas détaillés
fournis en anglais s'ouvrent en grand avec un lien vers l'original.

La fiche de mission est préparée dans le navigateur. Aucun formulaire n'envoie
de données à un serveur. Le téléchargement et la copie sont déclenchés par le
visiteur. Aucun service d'analytics ou de suivi n'est ajouté.

## Vérifications

`python tools/prism/check.py --artifacts <dossier-hors-depot>` utilise Playwright
et Chromium headless. Les fichiers statiques exacts sont fournis au navigateur
par interception des requêtes. Le contrôle de l'hébergement réel est distinct et
se fait après publication. Le poste, sa souris et son navigateur ne sont pas utilisés.

Vérifiés sur les deux pages : liens, ancres, identifiants uniques, empreintes des
dix images, décodage des images, polices et absence de débordement horizontal en
1440, 768, 390 et 320 pixels. Les captures ordinateur/mobile ont été inspectées.
Les onglets et leur navigation clavier, le menu mobile et Échap, les schémas
agrandis avec retour de focus, les détails déroulants, les exemples de mission,
la génération et le téléchargement du texte et le refus d'un titre vide ont été
exercés. Aucun échec JavaScript ni requête sortante inattendue dans ces parcours.

Correction conservée : un formulaire HTML ordinaire pouvait envoyer ses champs
par GET si JavaScript était indisponible. Les contrôles sont désormais désactivés
dans le HTML initial et activés seulement après installation du traitement local.
Sans JavaScript ou si le script ne charge pas, une consigne textuelle reste
accessible et aucun champ ne peut être soumis par l'interface. Les deux panneaux
de mémoire restent lisibles dans ce mode ; leur alternance s'initialise en JavaScript.

## Publication

L'hébergement existant reste GitHub Pages, `main/docs`, sur `parti-orange.com`.
La source de départ est `498d2e41ae69543bd656796fc9ebb07b517f20f2`.
La refonte conserve les autres chemins, notamment le corpus sous `docs/univers/`.
Les anciens fichiers de présentation restent dans l'historique et dans le dépôt ;
les nouvelles pages utilisent exclusivement leurs nouveaux styles, scripts et
visuels. Les modifications concernent la présentation publique autorisée, pas
les identités des agents ni les services des rayons.

Pour revenir à la version antérieure de l'accueil, rétablir `docs/index.html`
depuis la source de départ dans un nouveau commit puis publier ce commit. Les
nouveaux assets peuvent rester présents sans être référencés.
