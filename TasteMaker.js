Wines = new Mongo.Collection("wines");

if (Meteor.isClient) {

  // Meteor.publish("wines", function(){
  //   return Wines.find({

  //   })
  // })





  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.home.events({
    'click #home': function(){
      document.querySelector("#recDiv").classList.add("hide")
      document.querySelector("#historyDiv").classList.add("hide")
      document.querySelector("#tasteDiv").classList.add("hide")
      document.querySelector("#helloDiv").classList.toggle("hide")
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


      Meteor.call("getWine", function(error, results){
      var wine = results.data.Products.List[0];})

      Wines.insert( { wine: "wine" } )
      console.log(Wines)



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

}




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.methods({
      getWine: function () {
          return Meteor.http.call("GET", "https://services.wine.com/api/beta2/service.svc/json/catalog?search=apothic%20red&size=1&apikey=f6569a177b45d11f2e5dc5fee4bf9e82");
      }
    });
  });
}