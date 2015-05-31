"use strict"
/*
 * public/javascripts/controllers/SVGCharts.js
 */

var App = function(){}
_.extend(App.prototype, {
  views: {
    svgChartView: null
  },
  models: {},
  collections: {},
  start: function() {
    this.views.svgChartView = new SVGChartView({
      el: $('#svgcharts-view')
    }).render();
    console.log("Application started");
  }
});

var app = new App();
