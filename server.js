/**
 * Module dependencies.
 */

var express  = require('express'),
    routes   = require('./routes'),
    api      = require('./routes/api'),
    http     = require('http'),
    path     = require('path'),
    mongoose = require('mongoose');


// Creating and exposing our lovely little express app

var app = module.exports = express();


// Databasey stuff

mongoose.connect('mongodb://localhost/test');

// Create a config file to use a remote host sometime.

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Mongoose is a-go");
});


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '/app')));
  app.use(express.errorHandler());
});


// Our API routes

// Replies with a list of all champions
app.get('/api/champions', api.champions);

// Returns a specific champion by name from database.
app.get('/api/champions/:name', api.findChampion);

// Should send an object containing all the test protips.
app.get('/api/protips', api.getAllUsers);

// Should save the protip
app.post('/api/protip', api.postProtip);


// Our top-level webpage routes

app.get('/form', routes.form);     // Test form for posting protips
app.get('/versus', routes.versus); // Page for Versus
app.get('/test', routes.test);     // This is our testpage... for testing
app.get('/index', routes.index);   // This is our index/frontpage
app.get('/', routes.index);        // Our root url sends us to the front page


// And it's finally time to get node listening in for all those goodies

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
