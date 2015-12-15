Meteor.methods({
  addTaste: function(){
    console.log("METEOR METHOD")
    Taste.insert({user: Meteor.userId(), test: "Fuck this"})
  }
})

