
var app       = app || {}
  , champions = app.ChampionList;

$(function ($) {

  app.AppView = Backbone.View.extend({

    initialize: function() {
      console.log(champions.get(1))
      console.log(champions.get(103))
    
      app.player = new app.PlayerView({model: champions.get(1)}).render();
      app.opponent = new app.OpponentView({model: champions.get(103)}).render();

      setTimeout(app.ProtipBoard.render(), 10);
      }

  }) 
});
