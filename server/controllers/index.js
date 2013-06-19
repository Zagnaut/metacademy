//
// API Controller
//

var Protip   = require('../models/protip.js'),
    User     = require('../models/user.js'),
    Comment  = require('../models/comment.js'),
    Champion = require('../models/champion.js');


exports.allChampions = function(req, res) {
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
exports.protips = function(req, res) {      
  Protip.find(function(err, data) {
    if (null !== err)
      console.log(err);
    else 
      res.send(data);
  });
};

// Create a new protip from the form
exports.postProtip = function(req, res) {   
  new Protip({
    user: req.body.user,
    description: req.body.description,
    content: req.body.content
  }).save();
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
