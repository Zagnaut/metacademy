// This file should probably be async instead of sync
var Champion = require('../models/champion.js');

// Send a json response with all champions in the database.
exports.getChampions = function () {
    Champion.find(function(err, champions) {
        if (err) { console.log(err); }
        return champions;
    });
};

// Accepts a champion name to
exports.getChampion = function(name) {
    Champion.find({"name": name}, function(err, champion) {
        if (err) { console.log(err); }
        return champion;
    });
};
