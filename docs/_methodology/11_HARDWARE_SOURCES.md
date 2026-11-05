# Présentation matérielle — sources et entretien

La page `/materiel/` présente les types matériels et leur place dans le quotidien.
Elle n'est pas un inventaire d'installations chez des partenaires. Son HTML est
la source du compagnon complet `clusters-couleur/documents/materiel-public.txt`.

## Sources internes

- `ORANGE:md/core/oLLM_CLUSTER_IDENTITY.md`, Hardware types : les six types,
  leurs rôles dominants et la distinction types/sauces.
- `ORANGE:md/core/oVISION.md`, profils : relais oMICRO, vision oNANO, proximité
  oMINI et exemple Jetson Orin Nano Super.
- `CLUSTERCOULEUR_REFERENCE_LLM.md`, CC-02 et CC-22 : poste LibreOffice, foyer
  JAUNE avec un GB10, arbres de huit GB10 et absence de mémoire cohérente unique
  déduite du nombre de nœuds.
- Gab : avantages et forces des types, cinq critères d'acceptabilité sociale.

Les anciens noms de moteurs et placements de oVISION ne sont pas repris comme
politique d'inférence ni comme observation actuelle.

## Spécifications fournisseur

Consultation : 5 novembre 2026. Cette date d'entretien reste hors du parcours commercial.

| Objet | Valeur et portée | Source primaire |
|---|---|---|
| DGX Spark | 150 × 150 × 50,5 mm ; 1,2 kg ; 128 Go de mémoire unifiée dans une machine. Ce modèle n'est pas tous les systèmes GB10. | [NVIDIA Hardware Overview](https://docs.nvidia.com/dgx/dgx-spark/hardware.html) |
| DGX Spark | TDP GB10 de 140 W ; alimentation de 240 W. Aucune consommation à la prise déduite. | [NVIDIA Power and Thermal Management](https://docs.nvidia.com/dgx/dgx-spark/hardware.html#power-and-thermal-management) |
| Jetson Orin Nano Super | Modes du module de 7, 15 et 25 W. Les autres composants s'ajoutent ; aucun débit extrapolé. | [Configuration NVIDIA](https://developer.nvidia.com/blog/nvidia-jetson-orin-nano-developer-kit-gets-a-super-boost/) |

Les illustrations vectorielles sont des silhouettes créées pour la page, hors
échelle. Elles ne sont ni des photographies de produits ni des plans cotés.
Les caractéristiques portent des liens vers les sources primaires sur la page.

## Entretien

Vérifier la référence fournisseur avant une modification de valeur. Conserver
unités et périmètres : composant, machine et installation. Un format compact
ne démontre pas à lui seul une économie ou un bénéfice environnemental.

Le style propre est dans `assets/hardware.css` ; menu et onglets emploient le
JavaScript partagé. Vérifier les six types, huit nœuds du schéma, trois lieux,
liens et repli sans JavaScript après un changement de structure.
