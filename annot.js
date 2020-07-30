function annot(svg, x, y, x1, y1, x2, y2, message) {
  var annotation = d3.select("body").append("div")
      .attr("class", "annotation")
      .style("opacity", 0);
  annotation.transition()
    .duration(200)
    .style("opacity", 1);
  annotation.html(message)
    .style("left", (x) + "px")
    .style("top", (y) + "px");

  if (x1 != 0 && y1 != 0 && x2 != 0 && y2 != 0) {
    svg.append('line')
    .style("stroke", "lightblue")
    .style("stroke-width", 1)
    .attr("x1", x1)
    .attr("y1", y1)
    .attr("x2", x2)
    .attr("y2", y2);
  }
}
