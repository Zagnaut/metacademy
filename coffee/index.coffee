express = require 'express'
Routes = require './routes'
http = require 'http'
path = require 'path'
mongoose = require 'mongoose' # can we put db stuff in its own module?

root = exports ? this

app = module.exports = express()


class database
  constructor: ->
    mongoose.connect 'mongodb://localhost/test'
    db = mongoose.connection
    db.on 'error', console.error.bind(console, 'connection error:')
    db.once 'open', ->
      console.log "Mongoose is a-go"


app.configure ->
  app.set 'port', process.env.PORT || 3000
  app.set 'views', __dirname + '/views'
  app.set 'view engine', 'jade'
  app.use express.favicon()
  app.use express.logger 'dev'
  app.use express.bodyParser()
  app.use app.router
  app.use express.static(path.join(__dirname, '/app'))
  app.use express.errorHandler()

# app.get 'api/champions', Routes.champions
# app.get 'api/champions/:name', Routes.findChampions
# app.get 'api/protips/:name', Routes.getAllUsers
# app.post 'api/protips', Routes.postProtip

app.get '/form', Routes.form
app.get '/versus', Routes.versus
app.get '/test', Routes.test
app.get '/index', Routes.index
app.get '/', Routes.index

http.createServer(app).listen app.get('port'), ->
  console.log "Express server listening on port #{app.get('port')}"
