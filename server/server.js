// Handles configuration and routing.
var express     = require('express'),
    http        = require('http'),
    path        = require('path'),
    api         = require('./controllers'),
    mongoose    = require('mongoose');

var app = module.exports = express();
var db = {};

mongoose.connect('mongodb://mike:Expat430@linus.mongohq.com:10039/metacademy');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: :('));
db.once('open', function () {
  console.log("Mongoose is a-go");
});

// Application config and middleware
app.configure(function(){
  app.enable('trust proxy')
  app.set('port', process.env.PORT || 3030);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.errorHandler());
});

// Routing
app.get('/api/champions',       api.getChampions);
app.get('/api/champions/:name', api.findChampion);

app.get('/api/protips/:champion', api.getProtips);
app.post('/api/protips/:champion', api.postProtip);

// Create api server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Api server listening on port " + app.get('port'));
});
