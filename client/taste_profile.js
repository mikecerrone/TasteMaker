// Taste = new Mongo.Collection("taste");
// UserHistory = new Mongo.Collection("userHistory");

Template.body.events ({
    'click #tasteProfile': function(event) {
        event.preventDefault();
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        // Blaze.renderWithData(Template.recReturned, {results: results}, document.querySelector('#recResult'))
        render = Blaze.render(Template.tasteProfile, document.querySelector('#pageDisplay'))
    }
});

Template.tasteProfile.events ({
    'click button': function(event) {
        event.preventDefault();
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        Blaze.remove(render)
    }
})



Template.tasteProfile.rendered = function(){
    // seedData();
    makeChart();
    // findTaste();
};

    function makeChart(){
      var context = document.getElementById("myChart").getContext("2d");
     var contextr = document.getElementById("myRadarChart").getContext("2d");

      var tastes = Taste.find({user:Meteor.userId})
      var splitUpTheTasteArrays = []
      Taste.find({user: Meteor.userId()}).forEach(function(taste){splitUpTheTasteArrays.push(taste.userTaste)})
      console.log(splitUpTheTasteArrays)
      // for(var element in tastes){
      //   splitUpTheTasteArrays.push(element.userTaste)
      //   debugger
      // }
      // tastes.forEach(function(taste){splitUpTheTasteArrays.push(taste.userTaste)})
      // debugger;
      // console.log(tastes)
      // console.log("TASTE ZERO: "+splitUpTheTasteArrays[0][0])

      var bold = 0;
      var fruity = 0;
      var earthy = 0;
      var light = 0;

      for (i=0; i<splitUpTheTasteArrays.length;i++){
        if (splitUpTheTasteArrays[i][0] > 0) {
            earthy += splitUpTheTasteArrays[i][0];
        }else if(splitUpTheTasteArrays[i][0] < 0){
            fruity += -(splitUpTheTasteArrays[i][0]);
        }
        if (splitUpTheTasteArrays[i][1] > 0) {
            bold += splitUpTheTasteArrays[i][1];
        }else if(splitUpTheTasteArrays[i][1] < 0){
            light += -(splitUpTheTasteArrays[i][1]);
        }
      }

      var bold = bold/splitUpTheTasteArrays.length;
      var fruity = fruity/splitUpTheTasteArrays.length;
      var earthy = earthy/splitUpTheTasteArrays.length;
      var light = light/splitUpTheTasteArrays.length;

      // console.log("BOLD: " + bold)
      // console.log("LIGHT: " + light)
      // console.log("FRUITY: " + fruity)
      // console.log("EARTHY: " + earthy)


      var data = [
        {
            value: bold,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Bold"
        },
        {
            value: fruity,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Fruity"
        },
        {
            value: light,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Light"
        },
        {
            value: earthy,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Earthy"
        }

      ];

      var histTastes = UserHistory.find({user: Meteor.userId})
      var splitUpTheHistoryArrays = []
      histTastes.forEach(function(taste){splitUpTheHistoryArrays.push(taste.userTaste)})
      console.log("HISTARRAYS")
      console.log(splitUpTheHistoryArrays)

      var histBold = 0;
      var histFruity = 0;
      var histEarthy = 0;
      var histLight = 0;

      for (i=0; i<splitUpTheHistoryArrays.length;i++){
        if (splitUpTheHistoryArrays[i][0] > 0) {
            histEarthy += splitUpTheHistoryArrays[i][0];
        }else if(splitUpTheHistoryArrays[i][0] < 0){
            histFruity += -(splitUpTheHistoryArrays[i][0]);
        }
        if (splitUpTheHistoryArrays[i][1] > 0) {
            histBold += splitUpTheHistoryArrays[i][1];
        }else if(splitUpTheHistoryArrays[i][1] < 0){
            histLight += -(splitUpTheHistoryArrays[i][1]);
        }
      }

      var histBold = histBold/splitUpTheHistoryArrays.length;
      var histFruity = histFruity/splitUpTheHistoryArrays.length;
      var histEarthy = histEarthy/splitUpTheHistoryArrays.length;
      var histLight = histLight/splitUpTheHistoryArrays.length;

      var datar = {
    labels: ["Bold", "Earthy", "Light", "Fruity"],
    datasets: [
        {
            label: "wines done drank",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [histBold, histEarthy, histLight, histFruity]
        },
        {
            label: "taste likes",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [bold, earthy, light, fruity]
        }
    ]
};

var options = {legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=red%>\">hi hello</span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"}


      var myNewChart = new Chart(context).PolarArea(data);
      var myRadarChart = new Chart(contextr).Radar(datar, options);
    }

    // function findTaste(){
    // }


// function seedData(){
//   console.log("SEEDS")
//     // test data
// Taste.insert({
//     tasteCoords: [30, 35],
//     user: 1
// });
// Taste.insert({
//     tasteCoords: [-6, -35],
//     user: 1
// });
// Taste.insert({
//     tasteCoords: [55, 10],
//     user: 1
// });

// UserHistory.insert({
//     tasteCoords: [5, 18],
//     user: 1
// });
// UserHistory.insert({
//     tasteCoords: [-50, -16],
//     user: 1
// });
// UserHistory.insert({
//     tasteCoords: [11, 9],
//     user: 1
// });
// }

function wineTasteCoordinates(varietal, wineStyle) {

 // Should be DB Collection or we can create static list since none of these numbers change
var varietalTaste = {'Cabernet_Franc': [30,30],'Syrah': [50,18]}
var varietalStyle = {'Big_and_Bold': [0,5], 'Earthy_and_Spicy': [5,0] }

  // Varietal default coordinates from our wine taste mapping work
  var wineVariatalX = varietalTaste[varietal][0]
  var wineVariatalY = varietalTaste[varietal][1]

  // Wine.com's style preferences added to more accurately position wine within varietal's mapped range
  var wineStyleX = varietalStyle[wineStyle][0]
  var wineStyleY = varietalStyle[wineStyle][1]

  // Creates wines specific taste profile coordinates
  var wineTC = [wineStyleX+wineVariatalX, wineStyleY+wineVariatalY]
  return wineTC

}


// function userEvaluation(wineTasteCoordinates, evaluationWine, evaluationX, evaluationY ) {
//   var userTaste = wineTasteCoordinates
//     if (evaluationWine != 'dislike'){
//      userTaste = [userTaste[0] + evaluationX, userTaste[1]]
//      userTaste = [userTaste[0],  userTaste[1] + evaluationY]

//      // add the userTaste array to user DB, n number of times depending on like(10x) or love(50x)
//      var step;
//       for (step = 0; step < evaluationWine; step++) {
//         // console.log(userTaste);
//         Taste.insert({
//             taste: userTaste,
//             owner: 1
//         });
//      }

//     } else {
//      userTaste = [userTaste[0] + evaluationX, userTaste[1]]
//      userTaste = [userTaste[0],  userTaste[1] + evaluationY]

//      // Inverts the users choice to the opposite side of the taste spectrum
//      userTaste = [userTaste[0] * -2  + userTaste[0], userTaste[1]]
//      userTaste = [userTaste[0], userTaste[1] + userTaste[1] * -2 ]

//       // add the inverted userTaste array to user DB, 2 times (hardcoded) due to 'dislike'
//      var step;
//       for (step = 0; step < 2; step++) {
//         // console.log(userTaste);
//        }
//      }
// }
