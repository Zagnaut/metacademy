
//
// The API Controller
//
/* methods
  * protips - Returns a list of all protips
  * postProtip - Creates a new protip
 */

var Protip  = require('../models/protip.js'),
    User    = require('../models/user.js'),
    Comment = require('../models/comment.js'),
    Champion = require('../models/champion.js');


exports.champions = function(req, res) {
  Champion.find(function(err, champions) {
    res.send(JSON.stringify(champions));
  });
};

exports.findChampion = function(req, res) {
  Champion.findOne({name: req.params.name}, function(err, champion) {
    res.send(champion);
  });
};


// Protip methods

exports.protips = function(req, res) {      // Send a list of all protips
  Protip.find(function(err, data) {
    res.send(data);
  });
};

exports.postProtip = function(req, res) {   // Create a new protip from the form
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
    email: req.body.email,
    protips: [],
    comments: []
  }).save();
};
