"use strict"
/*
 * public/javascripts/views/BarChartView.js
 */

var BarChartView = Backbone.View.extend({
  initialize: function(options) {
    this.width = 420;
    if(options && options.width) {
      this.width = options.width;
    }
  },
  template: JST['BarChart.jade'],
  render: function() {
    var self = this;
    this.$el.html(this.template());
    var data = [4, 8, 15, 16, 23, 42];
    var node = this.$el.find('.chart').toArray();

    var scale = d3.scale.linear()
      .domain([0, d3.max(data)])
      .range([0, this.width]);

    d3.select(node[0])
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return scale(d) + "px"; })
        .text(function(d) { return d; });
    return this;
  }
});
