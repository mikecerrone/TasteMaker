Taste = new Mongo.Collection("taste");

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


if (Meteor.isClient){
    Meteor.subscribe("Taste");

    Template.tasteProfile.helpers({
        tastes: function(){
            return Taste.find({user:1})
        }
    });

Template.tasteProfile.rendered = function(){
    seedData();
    makeChart();
    // findTaste();
    console.log("rendering a template")
};

    function makeChart(){
      console.log("making a chart")
      var context = document.getElementById("myChart").getContext("2d");

      var tastes = Taste.find({user:1})
      // console.log(tastes)
      var splitUpTheTasteArrays = []
      tastes.forEach(function(taste){splitUpTheTasteArrays.push(taste.taste)})
      console.log(splitUpTheTasteArrays)
      console.log("TASTE ZERO: "+splitUpTheTasteArrays[0][0])

      var bold = 0;
      var fruity = 0;
      var earthy = 0;
      var light = 0;

      for (i=0; i<splitUpTheTasteArrays.length;i++){
        if (splitUpTheTasteArrays[i][0] > 0) {
            bold += splitUpTheTasteArrays[i][0];
        }else if(splitUpTheTasteArrays[i][0] < 0){
            light += -(splitUpTheTasteArrays[i][0]);
        }
        if (splitUpTheTasteArrays[i][1] > 0) {
            fruity += splitUpTheTasteArrays[i][1];
        }else if(splitUpTheTasteArrays[i][1] < 0){
            earthy += -(splitUpTheTasteArrays[i][1]);
        }
      }

      console.log("BOLD: " + bold)
      console.log("LIGHT: " + light)
      console.log("FRUITY: " + fruity)
      console.log("EARTHY: " + earthy)

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

      var myNewChart = new Chart(context).PolarArea(data);

    }

    // function findTaste(){
    // }

}

function seedData(){
    // test data
Taste.insert({
    taste: [30, 35],
    user: 1
});
Taste.insert({
    taste: [6, -35],
    user: 1
});
Taste.insert({
    taste: [55, 10],
    user: 1
});
}

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
