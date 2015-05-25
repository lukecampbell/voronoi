"use strict"
/*
 * public/javascripts/views/VoronoiView.js
 */

var VoronoiView = Backbone.View.extend({
  initialize: function(options) {
    if(options && options.width) {
      this.width = options.width;
    } else {
      this.width = 960;
    }

    if(options && options.height) {
      this.height = options.height;
    } else {
      this.height = 500;
    }
  },
  render: function() {
    var self = this;
    this.vertices = d3.range(100).map(function(d) {
      return [Math.random() * self.width, Math.random() * self.height];
    });

    this.voronoi = d3.geom.voronoi()
      .clipExtent([[0, 0], [this.width, this.height]]);

    this.svg = d3.selectAll(this.$el.toArray()).append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .on("mousemove", function() { self.vertices[0] = d3.mouse(this); self.redraw(); });

    this.path = this.svg.append("g").selectAll("path");

    this.svg.selectAll("circle")
        .data(this.vertices.slice(1))
      .enter().append("circle")
        .attr("transform", function(d) { return "translate(" + d + ")"; })
        .attr("r", 1.5);
    this.redraw();
    return this;
  },
  redraw: function() {
    var self = this;
    this.path = this.path
      .data(this.voronoi(this.vertices), this.polygon);

    this.path.exit().remove();

    this.path.enter().append("path")
      .attr("class", function(d, i) { return "q" + (i % 9) + "-9"; })
      .attr("d", this.polygon);

    this.path.order();
  },
  polygon: function(d) {
    return "M" + d.join("L") + "Z";
  }
});
