Factual.configure({
  key: 'D8beY4zvmZSiK3gbe4YTVkyNJzo1fupVGojOGIgo',
  secret: 'sLcb7jG43KG4ODV7b5LgjE2yBhIYgNo26VZV0t1B'
});


Meteor.methods({
  upcDecoder: function (upcCode) {
    Factual.get('/t/products-cpg',{q:upcCode.text},
      function (error, res) {
        console.log(res);
        console.log(error);
        if (res.data.length > 0){
          var wineName = res.data[0].brand
          Meteor.call('wineApiLookup', wineName, function(err, res){
          })
        } else {
          //render manual search page...
          console.log("saved")
        }
      });
  }
});
