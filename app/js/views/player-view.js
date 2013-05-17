
var app = app || {};

$(function($) {

  app.PlayerView = Backbone.View.extend({

    el: '#player',

    template: Handlebars.compile( $('#champion-template').html() ),

    events: {},

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }

  });

});
