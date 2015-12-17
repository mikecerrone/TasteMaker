Meteor.methods({
  methodsController1: function(searchTerm){
   Future = Npm.require('fibers/future');
        var newFuture = new Future();
        Meteor.call('wineApiRecommendation', searchTerm, function(err ,res){
          console.log('made it');
          if(err){
            console.log(err)
            newFuture.throw(err);
          }else{
            newFuture.return(res)
          }
        })
      console.log(newFuture.wait())
    }
  })
