# frontoutilgestionyo

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

# Consignes

Vous devez créer une application budgétaire qui permet de suivre les prestataires intervenants de n'importe quel société.  

#### L'application devra permettre de :

*   Visualiser une liste de projets
*   Filtrer cette liste de projets
*   Visualiser un projet
*   Modifier un projet
*   Supprimer un projet
*   Créer un projet

#### Pour cela vous devez respecter les contraintes suivantes:

*   Les différentes vues pourront être accessibles directement par l'URL
*   Vous devrez mettre en place un systeme de route
*   Vous devrez créer et utiliser au moins un service
*   Vous devrez créer et utiliser au moins un filtre
*   BONUS: Créer et utiliser au moins une directive (groupe de boutons d'actions pour supprimer un projet directement à partir de la liste)

#### Vous disposez de l'api **REST** suivante:

*   GET: **/api/projets** Pour récupérer la liste des projets
*   GET: **/api/projets/:id** Pour récupérer un projet par son id
*   POST: **/api/projets** Pour ajouter un projet
*   PUT: **/api/projets/:id** Pour modifier un projet
*   DELETE: **/api/projets/:id** Pour supprimer un projet

# Installation et démarrage

Installer les dépendances
```sh
npm install -g grunt-cli # Admin privileges required
npm install
npm install -g bower # Admin privileges required
bower install
```

Lancer le server
```sh
grunt serve
```

Ouvrir [http://localhost:9000](http://localhost:9000)


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
