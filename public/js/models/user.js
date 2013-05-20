
var app = app || {};

(function() {

  app.User = Backbone.Model.extend({
    defaults: {
      username: 'No username',
      password: 'No password',
      email: 'No email'  
    }
    
  })
})();
