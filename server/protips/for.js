var Protip = require('../models/protip');

var For = exports = module.exports = function For() {};

For.prototype = {
  get: function(player, fn) {
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

  puts: function(params){
    // Update the appropriate protip object
  }
};
