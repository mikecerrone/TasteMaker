
Meteor.methods({
  addWine: function(wine){
    if(! Meteor.userId()){
      throw new Meteor.Error("gtfo you can't have wine")
    }

    wineTasteCoordinates(wine.Varietal, wine.Style)

    UserHistory.insert({
      name: wine.Name,

      user: Meteor.userId()
    });
  }
})