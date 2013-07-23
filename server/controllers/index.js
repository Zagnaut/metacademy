//
// API Controllers
// --------------

var Protip   = require('../models/protip.js'),
    User     = require('../models/user.js'),
    Comment  = require('../models/comment.js'),
    Champion = require('../models/champion.js');


exports.getChampions = function(req, res) {
  Champion.find(function(err, champions) {
    res.send({"champions": champions});
  });
};

exports.findChampion = function(req, res) {
  Champion.findOne({name: req.params.name}, function(err, champion) {
    res.send({"champion": champion});
  });
};


// Protip methods

// Send a list of all protips
exports.getProtips = function(req, res) {
  var champion = req.params.champion;
  var opts = req.query;

  function getAllProtips() {
    Protip.find(function(err, data) {
      if (err) console.log(err);
      else {
        res.send(data);
      }
    });
  }
};

// Create a new protip from the form
exports.postProtip = function(req, res) {   
  var protip = new Protip({
    description: req.body.description,
    content: req.body.content
  })
  protip.user = req.body.user;
  protip.upvotes = 0;
  protip.save();
};


// User methods

exports.getAllUsers = function(req, res) {
  User.find(function(err, data) {
    res.send(data);
  });
};

exports.postUser = function(req, res) {   // Create a new protip from the form
  new User({
    username: req.body.username,
    password: req.body.password,
    password: req.body.password,
    email: req.body.email,
    protips: [],
    comments: []
  }).save();
};
