var express   = require('express'),
    http      = require('http'),
    mongoose  = require('mongoose');

var Champions = require('./champions');
var Protips = require('./protips');

var app = module.exports = express();

dbInit();

// Application config and middleware
app.configure(function(){
  app.set('port', process.env.PORT || 3030);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.errorHandler());
  app.enable('trust proxy')
});

app.get('/api/champions', function(req, res) {
    Champions.getAll(function(data) {
        res.send({"champions": data});
    });
});

app.get('/api/champions/:name', function(req, res) {
    Champions.getByName(req.params.name, function(data) {
        res.send({"champion": data});
    })
});

// app.get('/api/protips/:champion', protips.getProtips);
// app.post('/api/protips/:champion', protips.postProtip);

// Create api server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Api server listening on port " + app.get('port'));
});

function dbInit() {
    mongoose.connect('mongodb://api:Expat430@linus.mongohq.com:10039/metacademy');
    var database = mongoose.connection;
    database.on('error', console.error.bind(console, 'connection error: :('));
    database.once('open', function () {
        console.log("Mongoose is a-go");
    });
}
