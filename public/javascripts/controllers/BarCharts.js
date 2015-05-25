"use strict"
/*
 * public/javascripts/controllers/BarCharts.js
 */

var App = function(){}
_.extend(App.prototype, {
  views: {
    barChartView: null
  },
  models: {},
  collections: {},
  start: function() {
    this.views.barChartView = new BarChartView({
      el: $('#barchart-view'),
      width: 800
    }).render();
    console.log("Application started");
  }
});

var app = new App();
