Template.body.events ({
  'click #logOut': function(event) {
    event.preventDefault();
    Meteor.logout(function() {
      Blaze.remove(render);
    });
  }
})