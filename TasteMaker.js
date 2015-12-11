if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    // counter: function () {
    //   return Session.get('counter');
    // }
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

  Template.home.events({
    'click #home': function(){
      document.querySelector("#recDiv").classList.add("hide")
      document.querySelector("#historyDiv").classList.add("hide")
      document.querySelector("#tasteDiv").classList.add("hide")
      document.querySelector("#helloDiv").classList.toggle("hide")
    }
//     'click #home': function(){
//       document.querySelector(this.parent).classList.toggle("hide")
//     }
  })

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
}