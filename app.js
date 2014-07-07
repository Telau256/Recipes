
/**
 * Family Tree App
 */

var bodyParser     = require('body-parser');
//var methodOverride = require('method-override');
var express = require('express');
var http = require('http');
var db = require('./model/db');
var routes = require('./routes/index');
var api = require('./routes/api');

var app = module.exports = express();
var server = http.createServer(app); 

//Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {
    layout: false
});

app.use(bodyParser());
//app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

//JSON API
app.get('/api/getRecipes', api.getRecipes);
app.get('/api/getRecipe/:id', api.getRecipe);
app.put('/api/updateRecipe/:id', api.updateRecipe);

server.listen(3000, function(){
	console.log("Family Tree server listening on port %d in %s mode", server.address().port, app.settings.env);		
});