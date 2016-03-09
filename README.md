# frontoutilgestionyo

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

# Consignes

Vous devez cr�er une application budg�taire qui permet de suivre les prestataires intervenants de n'importe quel soci�t�.  

#### L'application devra permettre de :

*   Visualiser une liste de projets
*   Filtrer cette liste de projets
*   Visualiser un projet
*   Modifier un projet
*   Supprimer un projet
*   Cr�er un projet

#### Pour cela vous devez respecter les contraintes suivantes:

*   Les diff�rentes vues pourront �tre accessibles directement par l'URL
*   Vous devrez mettre en place un systeme de route
*   Vous devrez cr�er et utiliser au moins un service
*   Vous devrez cr�er et utiliser au moins un filtre
*   BONUS: Cr�er et utiliser au moins une directive (groupe de boutons d'actions pour supprimer un projet directement � partir de la liste)

#### Vous disposez de l'api **REST** suivante:

*   GET: **/api/projets** Pour r�cup�rer la liste des projets
*   GET: **/api/projets/:id** Pour r�cup�rer un projet par son id
*   POST: **/api/projets** Pour ajouter un projet
*   PUT: **/api/projets/:id** Pour modifier un projet
*   DELETE: **/api/projets/:id** Pour supprimer un projet

# Installation et d�marrage

Installer les d�pendances
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
