
var app = app || {};

$(function ($) {

  app.ProtipBoard = Backbone.View.extend({
    el: '#protips',

    template: Handlebars.compile( $('#protip-template').html() ),

    events: {},

    initialize: function() {
      this.collection = app.ProtipList;
      this.render();
    },

    render: function() {
      this.$el.html( this.template( {protip: this.collection.toJSON()} ) );
      return this;
    }
  });

  app.ProtipBoard = new app.ProtipBoard();
})