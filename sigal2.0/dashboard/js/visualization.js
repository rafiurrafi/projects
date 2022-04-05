// create 4 data_set
var data1 = [
  { name: "online", value: 4, color: "#00AFDD" },
  { name: "inperson", value: 11, color: "#166589" },
  { name: "hybrid", value: 8, color: "#213E7B" },
];

var data2 = [
  { name: "online", value: 7, color: "#00AFDD" },
  { name: "inperson", value: 1, color: "#166589" },
  { name: "hybrid", value: 10, color: "#213E7B" },
];
var data3 = [
  { name: "online", value: 4, color: "#00AFDD" },
  { name: "inperson", value: 9, color: "#166589" },
  { name: "hybrid", value: 8, color: "#213E7B" },
];
var data4 = [
  { name: "online", value: 8, color: "#00AFDD" },
  { name: "inperson", value: 7, color: "#166589" },
  { name: "hybrid", value: 10, color: "#213E7B" },
];

// set the dimensions and margins of the graph
var margin = { top: 20, right: 20, bottom: 30, left: 30 },
  width = 300 - margin.left - margin.right,
  height = 220 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// X axis
var x = d3
  .scaleBand()
  .range([0, width])
  .domain(
    data1.map(function (d) {
      return d.name;
    })
  );
svg
  .append("g")
  .attr("class", "x-axis")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear().domain([0, 12]).range([height, 0]);
svg.append("g").attr("class", "myYaxis ").call(d3.axisLeft(y).ticks(6));

var yGridLine = d3.axisLeft(y).ticks(6).tickSize(-width, 0, 0).tickFormat("");
svg
  .append("g")
  .classed("gridLine", true)
  .attr("transform", "translate(0,0)")
  .call(yGridLine)
  .style("stroke-dasharray", "28 18");

// A function that create / update the plot for a given variable:
function update(data) {
  var u = svg.selectAll("rect").data(data);

  u.enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
    .attr("x", function (d, i) {
      console.log(x(d.name));
      return x(d.name) + 35 + "px";
      // if (i === 0) return 65 + "px";
      // else if (i === 1) return 180 + "px";
      // else if (i === 2) return 295 + "px";
      // return (i + )
    })
    .attr("y", function (d) {
      return y(d.value);
    })
    // .attr("width", x.bandwidth())
    .attr("width", 10)
    .attr("height", function (d) {
      return height - y(d.value);
    })
    .attr("rx", 7)
    .attr("fill", (d) => d.color);
}

// Initialize the plot with the first dataset
update(data1);
