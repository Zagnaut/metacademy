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

/ User methods

exports.getAllUsers = function(req, res) {
  User.find(function(err, data) {
    res.send(data);
  });
};

exports.postUser = function(req, res) {   // Create a new user from the form
  new User({
    username: req.body.username,
    password: req.body.password,
    password: req.body.password,
    email: req.body.email,
    protips: [],
    comments: []
  }).save();
};
