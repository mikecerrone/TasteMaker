Meteor.methods({
  addWine: function(wine){
    if(! Meteor.userId()){
      throw new Meteor.Error("gtfo you can't have wine")
    }
    Wines.insert({
      name: wine.Name,
      user: Meteor.userId()
    });
  }
})