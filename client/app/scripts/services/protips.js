app.service('$protips', ["ngResource", function ($resource) {
  var PlayerProtips = $resource('/protips/:champion/:type');


  this.getPlayer = function() {
    return Protip.get({player: $scope.player.name});
  };

  this.getOpponent = function() {
    return Protip.get({player: $scope.opponent.name});
  };

  this.post = function(opts) {
  }; 

  this.findProtips = function () {
    return protips;
  };

  this.loadMore = function() {
    return protips;
  };

  this.getByPlayerName = function (champion) {
    // Make XHR for protips based on champion name in player=X query string.
  };

  this.getVersus = function (player, opponent) {
    var protips = [];
    return protips;
  };

}]);
