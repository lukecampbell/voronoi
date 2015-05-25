"use strict";
/*
 * public/javascripts/controllers/index.js
 */

var App = function(){}
_.extend(App.prototype, {
  views: {
    voronoiView: null
  },
  start: function() {
    this.views.voronoiView = new VoronoiView({el: $('#voronoi-view')}).render();
    console.log("Application launched");
  }
});
var app = new App();
