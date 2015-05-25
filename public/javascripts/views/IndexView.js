"use strict"
/*
 * public/javascripts/views/IndexView.js
 */

var IndexView = Backbone.View.extend({
  template: JST['Index.jade'],
  render: function() {
    this.$el.html(this.template());
  }
});
