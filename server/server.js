/**
 * Module dependencies.
 */

var express = require('express')
// , projet = require('./routes/projet')
// , ressource = require('./routes/ressource')
, bodyParser = require('body-parser'), 
methodOverride = require('method-override'),
path = require('path');
// var favicon = require('serve-favicon');
// var cookieParser = require('cookie-parser');

var mysql = require("mysql");
var app = express();
// app.use('/', express.static('../app'));
app.use('/bower_components', express.static('../bower_components/'));

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'outilgestion'

});
connection.connect(function(error) {
	if (error) {
		console.log("Problem with MySQL" + error);
	} else {
		console.log("Connected with Database");
	}
});

app.use(express.static(__dirname + '/bower_components/angular'));

app.get('/projets', function(req, res) {
	connection.query("SELECT * from projet", function(err, rows) {
		if (err) {
			console.log("Problem with MySQL" + err);
		} else {
			res.end(JSON.stringify(rows));
		}
	});
});

app.get('/projet/:id', function(req, res) {

	var id = req.params.id;

	console.log(id); // => :id instead of value

	connection.query('SELECT * FROM projet WHERE idProjet = ?', [ id ],
			function(error, results) {

				if (error) {
					throw error;
				} else {
					res.end(JSON.stringify(results));
				}
			});
});


app.use(express.static(path.join(__dirname, '../projet')));

 app.post('/projets', function(req, res){

 var body = req.body;

 var post = {
 codeProjet: body.codeProjet,
 dateDebut: body.dateDebut,
 dateFin: body.dateFin,
 descProjet: body.descProjet,
 budgetTotale: body.budgetTotale
 };
 connection.query('INSERT INTO projet SET ?', post, function(error) {

     if (error) {
         console.log(error.message);
     } else {
         console.log('success');    
     }
     connection.end();
 });


 });
 
 //update
 app.put('/projets',function(req,res){
	    var idProjet = req.body.idProjet;
	    var codeProjet: body.codeProjet;
	    var dateDebut: body.dateDebut;
	    var dateFin: body.dateFin;
	    var descProjet: body.descProjet;
	    var budgetTotale: body.budgetTotale;
	    var data = {
	        "error":1,
	        "projets":""
	    };
	    if(!!idProjet && !!Bookname && !!Authorname && !!Price){
	        connection.query("UPDATE projet SET codeProjet=?, dateDebut=?, dateFin=?, descProjet=?, budgetTotale=? WHERE id=?",[Bookname,Authorname,Price,Id],function(err, rows, fields){
	            if(!!err){
	                data["projets"] = "Error Updating data";
	            }else{
	                data["error"] = 0;
	                data["projets"] = "Updated Book Successfully";
	            }
	            res.json(data);
	        });
	    }else{
	        data["Books"] = "Please provide all required data (i.e : idProjet, codeProjet, dateDebut, dateFin, descProjet,budgetTotale )";
	        res.json(data);
	    }
	});
 
 // delete
 app.delete('/projets',function(req,res){
	    var idProjet = req.body.idProjet;
	    var data = {
	        "error":1,
	        "projets":""
	    };
	    if(!!idProjet){
	        connection.query("DELETE FROM projet WHERE idProjet=?",[idProjet],function(err, rows, fields){
	            if(!!err){
	                data["projets"] = "Error deleting data";
	            }else{
	                data["error"] = 0;
	                data["projets"] = "Delete projet Successfully";
	            }
	            res.json(data);
	        });
	    }else{
	        data["projets"] = "Please provide all required data (i.e : idProjet )";
	        res.json(data);
	    }
	});
 
 
 
 
 

app.get('/ressources', function(req, res) {
	connection.query("SELECT * from ressource", function(err, rows) {
		if (err) {
			console.log("Problem with MySQL" + err);
		} else {
			res.end(JSON.stringify(rows));
		}
	});
});

app.get('/ressources/:id', function(req, res) {

	var id = req.params.id;

	console.log(id); // => :id instead of value

	connection.query('SELECT * FROM ressource WHERE id = ?', [ idProjet ],
			function(error, results) {

				if (error) {
					throw error;
				} else {
					res.end(JSON.stringify(results));
				}
			});
});


app.set('port', 9000);

// app.use(bodyParser());
// app.use(methodOverride());
// app.use(express.static(path.join(__dirname, '..', 'app')));

// app.get('/api/projets', projet.findAll);
// app.get('/api/projets/:id', projet.findById);
// app.post('/api/projets', projet.addProjet);
// app.put('/api/projets/:id', projet.updateProjet);
// app.delete('/api/projets/:id', projet.deleteProjet);

// app.get('/api/ressources', ressource.findAllRessouce);
// app.get('/api/ressources/:id', ressource.findByIdRes);
// app.post('/api/ressources', ressource.addRessource);
// app.put('/api/ressources/:id', ressource.updateRessource);
// app.delete('/api/ressources/:id', ressource.deleteRessource);
module.exports = app;

// console.log('Express server listening on port ' + app.get('port'));

