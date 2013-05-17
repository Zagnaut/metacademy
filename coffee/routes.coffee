root = exports ? this

class root.Routes

  index: (req, res) ->
    res.render 'index'

  test: (req, res) ->
    res.render 'test'

  versus: (req, res) ->
    res.render 'versus'

  form: (req, res) ->
    res.render 'form'

  # api: 
  #   champions: (req, res) ->
  #     Champion.find (err, champions) ->
  #       handleError() if err 
  #       res.send champions

  #   findChampion: (req, res) ->
  #     Champions.findOne
  #       name: req.params.name,
  #       (err, champion) ->
  #         handleError() if err 
  #         res.send champion


  #   protips: (req, res) ->
  #     Protip.find (err, data) ->
  #       handleError() if err 
  #       res.send data

  #   postProtips: (req, res) ->
  #     new Protip(
  #       user: req.body.user
  #       description: req.body.description
  #       content: req.body.content
  #     ).save()

  #   getAllusers: (req, res) ->
  #     User.find (err, data) ->
  #       handleError() if err 
  #       res.send data

  #   postUser: (req, res) ->
  #     new User(
  #       username: req.body.username
  #       password: req.body.password
  #       email: req.body.email
  #       protips: []
  #       comments: []
  #     ).save()

module.exports = root.Routes