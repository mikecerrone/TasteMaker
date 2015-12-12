
// Wines = new Mongo.Collection("wines");

// if (Meteor.isClient) {

  // Meteor.subscribe("wines");

  // Template.home.events({
  //   'click #home': function(){
  //     hideAll()
  //   }
  // })


  // Template.hello.helpers({
  //   wines: function(){
  //     return Wines.find({});
  //   }
  // });

//   Template.hello.events({
//     'click #taste': function () {
//       document.querySelector("#tasteDiv").classList.toggle("hide")
//       document.querySelector("#helloDiv").classList.toggle("hide")
//       // gets the wine from the api method and adds wine to db
//       console.log("hello from line 44")
//       Meteor.call("wineApiRecommendation", function(err, res){
//         var wine = res.data.Products.List[0]
//         Meteor.call("addWine", wine)
//       })
//     },

//     'click #history': function () {
//       document.querySelector("#historyDiv").classList.toggle("hide")
//       document.querySelector("#helloDiv").classList.toggle("hide")
//     },

//     'click #rec': function () {
//       document.querySelector("#recDiv").classList.toggle("hide")
//       document.querySelector("#helloDiv").classList.toggle("hide")
//     }

//   });

//   // Template.historyTemplate.helpers({
//   //   yourWines: function(){
//   //     return Wines.find({
//   //       user: Meteor.userId()
//   //     })
//   //   }
//   // });

//   // Template.recTemplate.events({
//   //   'click #getRec': function() {
//   //     Meteor.call("wineApiRecommendation", function(err, res) {
//   //       var results = res.data.Products.List[0]
//   //       Blaze.renderWithData(Template.recReturned, {results: results}, document.querySelector('#recResult'))
//   //     })
//   //   }
//   // })

// }

// var hideAll = function() {
//     document.querySelector("#recDiv").classList.add("hide")
//     document.querySelector("#historyDiv").classList.add("hide")
//     document.querySelector("#tasteDiv").classList.add("hide")
//     document.querySelector("#helloDiv").classList.toggle("hide")
//   }