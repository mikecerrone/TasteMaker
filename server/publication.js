Meteor.publish("taste", function () {
    tastey = Taste.find( { "user": this.userId } );
    if ( tastey ) {
      return tastey;
    }
    return  this.ready();
});

Meteor.publish("userHistory", function(){
    history = UserHistory.find( { "user": this.userId } );
    if ( history ) {
      return history;
    }
    return  this.ready();
})


Meteor.methods({
  addTaste: function(userTaste){
    Taste.insert({
        userTaste: userTaste,
        user: Meteor.userId()
      });
  },
  addHistory: function(wine){
    UserHistory.insert({
      user: Meteor.userId(),
      wine: wine
    })
  }
})