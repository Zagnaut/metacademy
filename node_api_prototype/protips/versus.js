var Protip = require('../models/protip');

var Versus = exports = module.exports = function Versus() {};

Versus.prototype = {
  get: function(player, opponent, fn) {
    var query = { player: player };
    Protip.find(query, function(err, data) {
      if (data) { console.log(err); }
      fn(data);
    });
  },

  post: function(params) {
    var protip = new Protip(params);
    protip.upvotes = 0;
    protip.save(function(err) {
      if (err) {};
      // Flash confirmation to client with a callback.
    });
  },

  puts: function(player, opponent, params){
    // Update the appropriate protip object
  }
};
