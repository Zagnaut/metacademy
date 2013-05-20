
var app = app || {};

$(function ($) {

  app.ProtipView = Backbone.View.extend({

    el: $('#protip-view'),

    template: Handlebars.compile( $('#protip-template').html() ),

    events: {},

    initialize: function() {
      this.collection = new app.ProtipList();
      this.render();
    },
    
    render: function() {
      this.el.html( this.template( this.model.toJSON() ) );
      return this;
    }
  })
})
