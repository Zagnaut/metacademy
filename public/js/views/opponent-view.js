
var app = app || {};

$(function($) {

  app.OpponentView = Backbone.View.extend({

    el: '#opponent',

    template: Handlebars.compile( $('#champion-template').html() ),

    events: {},

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }

  });

});
