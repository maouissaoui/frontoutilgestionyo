 
/**
 * Module dependencies.
 */

var express = require('express')
    , projet = require('./routes/projet')
    , ressource = require('./routes/ressource')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , path = require('path');
var app = express();


var mysql   = require("mysql");
var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database : 'outilgestion'
	});

app.set('port', 9000);
app.use(bodyParser());
//app.use(methodOverride());
app.use(express.static(path.join(__dirname, '..', '.tmp')));
app.use(express.static(path.join(__dirname, '..', 'app')));

app.get('/api/projets', projet.findAll);
app.get('/api/projets/:id', projet.findById);
app.post('/api/projets', projet.addProjet);
app.put('/api/projets/:id', projet.updateProjet);
app.delete('/api/projets/:id', projet.deleteProjet);
app.get('/api/ressources', ressource.findAllRessouce);
app.get('/api/ressources/:id', ressource.findByIdRes);
app.post('/api/ressources', ressource.addRessource);
app.put('/api/ressources/:id', ressource.updateRessource);
app.delete('/api/ressources/:id', ressource.deleteRessource);
module.exports = app;

console.log('Express server listening on port ' + app.get('port'));


