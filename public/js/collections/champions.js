
var app = app || {}
  , champions = app.champions;

(function () {
  var ChampionList = Backbone.Collection.extend({model: app.Champion})

  app.ChampionList = new ChampionList();
  
  _.each(champions, function(element) {
    app.ChampionList.add(element);
  })

})();
