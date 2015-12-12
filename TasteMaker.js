// AllUsers = new Mongo.Collection("users");

if (Meteor.isClient) {

  // Meteor.publish("wines", function(){
  //   return Wines.find({

  //   })
  // })
  
  Meteor.methods({
    hideAll: function() {
      document.querySelector("#recDiv").classList.add("hide")
      document.querySelector("#historyDiv").classList.add("hide")
      document.querySelector("#tasteDiv").classList.add("hide")
      document.querySelector("#helloDiv").classList.toggle("hide")
    }
  })

  // Meteor.call("getWines", function(error, results){
  //   console.log(results.content);
  // })

  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.home.events({
    'click #home': function(){
      Meteor.call('hideAll');
    }
  })

    
  Template.hello.helpers({

  });

  Template.hello.events({
    'click #taste': function () {
      // increment the counter when button is clicked
      // Session.set('counter', Session.get('counter') + 1);
      document.querySelector("#tasteDiv").classList.toggle("hide")
      document.querySelector("#helloDiv").classList.toggle("hide")
    },
    'click #history': function () {
      // increment the counter when button is clicked
      // Session.set('counter', Session.get('counter') + 1);
      document.querySelector("#historyDiv").classList.toggle("hide")
      document.querySelector("#helloDiv").classList.toggle("hide")
    },
    'click #rec': function () {
      // increment the counter when button is clicked
      // Session.set('counter', Session.get('counter') + 1);
      document.querySelector("#recDiv").classList.toggle("hide")
      document.querySelector("#helloDiv").classList.toggle("hide")
    }
  });

  Template.recTemplate.events({
    'click #getRec': function() {
      Meteor.call("wineApiRecommendation", function(err, res) {
        // console.log(test)
        var results = res.data.Products.List[0]
        // debugger;
        // console.log(res.data.Products.List[0])
        Blaze.renderWithData(Template.recReturned, {results: results}, document.querySelector('#recResult'))
      })
    }
  })

  Template.body.helpers({
    users: function() {
      console.log('hit')
        return Meteor.users.find({});
    }
  })

  Template.body.events({
    'click #add_thing': function() {
      event.preventDefault();
      
    }
  })

}




// if (Meteor.isServer) {
//   Meteor.startup(function () {
    // code to run on server at startup
    // Meteor.methods({
    //   getWines: function () {
    //       return Meteor.http.call("GET", "https://services.wine.com/api/beta2/service.svc/json/catalog?search=apothic%20red&size=1&apikey=f6569a177b45d11f2e5dc5fee4bf9e82");
    //   }
//     });
//   });
// }