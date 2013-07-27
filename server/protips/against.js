var Protip = require('../models/protip');

var Against = exports = module.exports = function Against() {};

Against.prototype = {
  get: function(opponent, fn) {
    var query = { opponent: opponent };
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
    // Update a protip.
  },

  postComment:(params){}
};
