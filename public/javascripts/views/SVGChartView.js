"use strict"
/*
 * public/javascripts/views/SVGChartView.js
 */

var SVGChartView = Backbone.View.extend({
  initialize: function(options) {
    this.width = (options && options.width) || 420;
    this.barHeight = (options && options.barHeight) || 20;
  },
  template: JST['SVGChart.jade'],
  render: function() {
    var self = this;
    this.$el.html(this.template());

    var data = [4, 8, 15, 16, 23, 42];
    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, this.width]);
    var chart = d3.selectAll(this.$el.find('.chart').toArray())
        .attr("width", this.width)
        .attr("height", this.barHeight * data.length);
    
    var bar = chart.selectAll("g")
        .data(data)
        .enter().append('g')
        .attr("transform", function(d, i) { return "translate(0," + i * self.barHeight + ")";});

    bar.append("rect")
        .attr("width", x)
        .attr("height", this.barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return x(d) - 3; })
        .attr("y", this.barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });


    return this;
  }
});
