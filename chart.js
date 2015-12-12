if (Meteor.isClient) {

  Template.chart.rendered = function(){
    makeChart();
    console.log("rendering a template")
  };

  Template.chart.helpers({

    makeChart: function(){
      console.log("making a chart")
      var context = document.getElementById("myChart").getContext("2d");

      var data = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        },
        {
            value: 40,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Grey"
        },
        {
            value: 120,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dark Grey"
        }

      ];

      var myNewChart = new Chart(context).PolarArea(data);

    }

  });
}