var Champion = require('../models/champion.js');

// Send a json response with all champions in the database.
exports.getAll = function (next) {
    Champion.find({}, function(err, champions) {
        if (err) {
            return console.log(err);
        }
        next(champions);
    });
};

// Accepts a champion name to
exports.getByName = function(name, next) {
    var query = {
        name: name
    };

    Champion.findOne(query, function(err, next) {
        if (err) {
            return console.log(err);
        }
        next(champion);
    });
};
