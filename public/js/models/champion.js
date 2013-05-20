
var app = app || {};

(function() {
  
  app.Champion = Backbone.Model.extend({
    idAttribute: 'id',
    
    defaults: {
      name: 'err',
      portrait: 'err',
      abilities: 'err'
    }
  })

})();
