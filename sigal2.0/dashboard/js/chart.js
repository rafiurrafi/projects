let options = {
  chart: {
    type: "bar",
  },
  //   bar: {
  //     borderRadius: 10,
  //   },
  grid: {
    strokeDashArray: 30,
  },
  yaxis: {
    tickAmount: 7,
  },
  series: [
    {
      data: [
        {
          x: "Passed",
          y: 11,
        },
        {
          x: "Pending",
          y: 7,
        },
        {
          x: "Failed",
          y: 9,
        },
      ],
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
