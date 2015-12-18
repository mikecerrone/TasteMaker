Meteor.methods({
  methodsController1: function(searchTerm){
   Future = Npm.require('fibers/future');
        var newFuture = new Future();
        Meteor.call('wineApiRecommendation', searchTerm, function(err ,res){
          if(err){
            newFuture.throw(err);
          }else{
            newFuture.return(res)
          }
        })
      console.log(newFuture.wait())
    }
  })
