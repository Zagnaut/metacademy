var Champion = require('../models/champion.js');

// Send a json response with all champions in the database.
exports.getAll = function (callback) {
    Champion.find({}, function(err, champions) {
        if (err) {
            return console.log(err);
        }
        callback(champions);
    });
};

// Accepts a champion name to
exports.getByName = function(name, callback) {
    var query = {
        name: name
    };

    Champion.find(query, function(err, champion) {
        if (err) {
            return console.log(err);
        }
        callback(champion);
    });
};
