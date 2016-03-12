 
/**
 * Module dependencies.
 */

var express = require('express')
  //  , projet = require('./routes/projet') 
  //  , ressource = require('./routes/ressource')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , path = require('path');
var mysql = require("mysql");
var app   = express();


var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'root',
	  database : 'outilgestion'
	});
connection.connect(function(error){
	  if(error)    {
	      console.log("Problem with MySQL"+error);
	  } else {
	      console.log("Connected with Database");
	   }
	});

app.use(express.static(__dirname + '/bower_components/angular'));


app.get('/projets',function(req,res){
	  connection.query("SELECT * from projet",function(err,rows){
	    if(err) {
	        console.log("Problem with MySQL"+err);
	      } else {
	          res.end(JSON.stringify(rows));
	      }
	  });
	});

app.get('/ressources',function(req,res){
	  connection.query("SELECT * from ressource",function(err,rows){
	    if(err) {
	        console.log("Problem with MySQL"+err);
	      } else {
	          res.end(JSON.stringify(rows));
	      }
	  });
	});

//app.post('/projets', function (req, res){
//	  console.log("POST: ");
//	  connection.connect();
//	  var errors = req.validationErrors();
//	    if(errors){
//	        res.status(422).json(errors);
//	        return;
//	    }
//	 var data ={
//	  codeProjet = req.body.codeProjet,
//	  dateDebut = req.body.dateDebut,
//	  dateFin = req.body.dateFin,
//	  descProjet = req.body.descProjet,
//	  budgetTotal = req.body.budgetTotal
//	 };
//	  console.log('insert into projet  set ? ",data );
//	  connection.query("INSERT INTO projet set ? ",data, function(err, rows) { 
//			//console.log(error);
//		  if(err){
//            
//               console.log("Mysql error, check your query");
//         }
//
//        res.sendStatus(200);
//
//      });
//
//});





app.set('port', 9000);

//app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '..', '.tmp')));
app.use(express.static(path.join(__dirname, '..', 'app')));

//app.get('/api/projets', projet.findAll);
//app.get('/api/projets/:id', projet.findById);
//app.post('/api/projets', projet.addProjet);
//app.put('/api/projets/:id', projet.updateProjet);
//app.delete('/api/projets/:id', projet.deleteProjet);

//app.get('/api/ressources', ressource.findAllRessouce);
//app.get('/api/ressources/:id', ressource.findByIdRes);
//app.post('/api/ressources', ressource.addRessource);
//app.put('/api/ressources/:id', ressource.updateRessource);
//app.delete('/api/ressources/:id', ressource.deleteRessource);
module.exports = app;

//console.log('Express server listening on port ' + app.get('port'));


