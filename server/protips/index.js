var Protip = require('../models/protip.js');
var app = require('../server.js');

exports.getPlayer = function(player, callback) {
  var query = {
    player: player
  };

  Protip.find(query, function(err, data) {
    if (err) {
      console.log(err);
    };
    callback(data);
  });
};

exports.postPlayer = function(player, callback) {
  var protip = new Protip({
    description: req.body.description,
    content: req.body.content
  })
  protip.user = req.body.user;
  protip.upvotes = 0;
  protip.save();
};


//exports.getVersus = function(player, opponent, callback) {
//  var query = {
//    player: player,
//    opponent: opponent
//  };
//  Protip.find(query, function(err, data) {
//    if (err) {
//      console.log(err);
//    };
//    callback(data);
//  });
//};
