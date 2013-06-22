app.service('$protips', function() {
  var protips = {
    "Ahri": {

    },
    "Annie": {

    }
  };

  

  this.findProtips = function () {
    return protips;
    // Make XHR for protips...?
  };

  this.loadMore = function() {
    return protips;
  };

  this.findByPlayerName = function (champion) {
    // Make XHR for protips based on champion name in player=X query string.
  };

  this.findVersusProtips = function (player, opponent) {
    var protips = [];
    return protips;
    // Make XHR for protips based on champion name in player=X and opponent=X query string.
  };

});
