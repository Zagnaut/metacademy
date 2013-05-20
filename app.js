
var express     = require('express'),
    controllers = require('./controllers'),
    api         = require('./controllers/api'),
    http        = require('http'),
    path        = require('path'),
    mongoose    = require('mongoose');

var app = module.exports = express();

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
  app.use(express.static(path.join(__dirname, '/public')));
  app.use(express.errorHandler());
});


/*
 *   Routes 
 */

app.get('/api/champions',       api.allChampions);
app.get('/api/champions/:name', api.findChampion);
app.get('/api/protips',         api.getAllUsers);
app.post('/api/protip',         api.postProtip);

app.get('/versus', controllers.versus);
app.get('/index',  controllers.index);
app.get('/',       controllers.index);

// End Routes

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
