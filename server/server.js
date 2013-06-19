// Handles configuration and routing.
var express     = require('express'),
    http        = require('http'),
    path        = require('path'),
    mongoose    = require('mongoose'),
    api         = require('./controllers');

var app = module.exports = express();

// Database config
mongoose.connect('mongodb://localhost/test');

// Create a config file to use a remote host sometime.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Mongoose is a-go");
});

// Application config and middleware
app.configure(function(){
  app.set('port', process.env.PORT || 3030);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.errorHandler());
});

// Routing
app.get('/v1/champions',       api.allChampions);
app.get('/v1/champions/:name', api.findChampion);
app.get('/v1/protips',         api.getAllUsers);
app.post('/v1/protip',         api.postProtip);

// Create api server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Api server listening on port " + app.get('port'));
});
