
var app = app || {};

(function () {
  
  var ProtipList = Backbone.Collection.extend({

    url: '/api/protips',
    
    model: app.Protip,

    initialize: function () {
      this.fetch();
    }
  })

  app.ProtipList = new ProtipList();

})();
