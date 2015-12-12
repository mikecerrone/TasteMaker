Meteor.methods({
    addWine: function(wine){
      console.log('hit')
      if(! Meteor.userId()){
        throw new Meteor.Error("gtfo you can't have wine")
      }

        Wines.insert({
            wine: wine,
            user: Meteor.userId()
        });
    }
})