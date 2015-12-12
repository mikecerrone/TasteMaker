Wines = new Mongo.Collection("wines");

if (Meteor.isClient) {

  Meteor.subscribe("wines");
  // console.log(Wines)

<<<<<<< HEAD
=======
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
>>>>>>> 534690b48f4731e1c2add16cf13d7cff251d1d4f

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
    wines: function(){
      return Wines.find({});
    }

  });
  Template.yourWines.helpers({
    yourWines: function(){
      return Wines.find({
        user: Meteor.userId()
      })
    }
  });

  Template.hello.events({
    'click #taste': function () {
      // increment the counter when button is clicked
      // Session.set('counter', Session.get('counter') + 1);
      document.querySelector("#tasteDiv").classList.toggle("hide")
      document.querySelector("#helloDiv").classList.toggle("hide")

      Meteor.call("addWine", "frank")

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

}




<<<<<<< HEAD
if (Meteor.isServer) {
      Meteor.publish("wines", function(){
        return Wines.find({})
      })
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.methods({
      getWine: function () {
          return Meteor.http.call("GET", "https://services.wine.com/api/beta2/service.svc/json/catalog?search=apothic%20red&size=1&apikey=f6569a177b45d11f2e5dc5fee4bf9e82");
      }
    });
  });
}

Meteor.methods({
  addWine: function(wine){
    if(! Meteor.userId()){
      throw new Meteor.Error("gtfo you can't have wine")
    }

    Wines.insert({
      wine: wine,
      user: Meteor.userId()
    });
  }
})
=======
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
>>>>>>> 534690b48f4731e1c2add16cf13d7cff251d1d4f
