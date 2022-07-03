Affiche 6 pokemon pour un stream (source navigateur), et la gère via le chat.

## Config

Télécharger et copier les fichiers
Créer une nouvelle source navigateur dans OBS, cibler le fichier (local) `index.html`.
Modifier `constants.js` pour choisir la chaine twitch. La page ecoutera le chat de cette chaine pour les commandes (cf. ci-dessous).


## Commandes

### !setpoke

Place un pokemon dans l'emplacement de team choisi (de 1 à 6).

* Commande : `!setpoke <emplacement> <nom>`
* Parametres : 
    * `emplacement`: L'emplacement à modifier, entre 1 et 6
    * `nom` : Nom (en français) du pokémon à y placer. Pas besoin de majuscules ou accents dans ce nom.
* Exemple : `!setpoke 1 pikachu`

### !rmpoke

Vide l'emplacement de team choisi (de 1 à 6).

* Commande : `!rmpoke <emplacement>`
* Parametres : 
    * `emplacement`: L'emplacement à modifier, entre 1 et 6
* Exemple : `!rmpoke 1`