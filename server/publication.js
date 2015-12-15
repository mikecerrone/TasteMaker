Meteor.publish("taste", function(){
  return Taste.find({user: this.userId})
})

Meteor.publish("userHistory", function(){
  return UserHistory.find({user: this.userId})
})


