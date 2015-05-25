"use strict";
/*
 * public/javascripts/controllers/index.js
 */

var App = function(){}
_.extend(App.prototype, {
  views: {
    indexView: null
  },
  start: function() {
    this.views.indexView = new IndexView({el: $('#index-view')}).render();
    console.log("Application launched");
  }
});
var app = new App();
