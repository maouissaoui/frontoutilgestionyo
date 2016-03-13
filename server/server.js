 
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
app.use('/', express.static('../app'));
app.use('/bower_components', express.static('../bower_components/'));

var server = require('http').createServer(app);
app.jsonParser = bodyParser.json();
app.urlencodedParser = bodyParser.urlencoded({ extended: true });


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

app.get('/:id', function(req,res){

    var id = req.params.id;

    console.log(id); // => :id instead of value

    connection.query('SELECT * FROM projet WHERE idProjet = ?', [id], function (error, results) {        
        if(error) {
            throw error;
        }
        else { 
            res.end(JSON.stringify(results));
        }
    });
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../projet')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../projet/.tmp')));
    app.use(express.static(path.join(__dirname, '../projet/app')));

    // ROUTES BEGIN

    // SIGNUP ROUTE    
    app.post('/projets', function(req, res){

        var body = req.body;

        var post  = {
        	codeProjet: body.codeProjet,
        	dateDebut: body.dateDebut,
        	dateFin: body.dateFin,
        	descProjet: body.descProjet,
        	budgetTotale: body.budgetTotale
        };
        connection.query('INSERT INTO projet SET ?', post, function(err,result) {
            // Neat!
            res.json({
                'msg': 'success!'
            });
        });
        console.log(query.sql);

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


