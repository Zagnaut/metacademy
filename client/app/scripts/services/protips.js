app.service('$protips', ["$champions", function () {

  var proptips = [
    {
      user: "Zagnaut",
      description: "Spin 2 Win",
      content: "Garen, Katarina, Karthus, Xin Zhao",
      upvotes: 200,
    }
  ];

  this.getPlayer = function () {
    // $http request with the player for the protips.
    return protips;
  };

  this.getOpponent = function () {
    return protips;
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
