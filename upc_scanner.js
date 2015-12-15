Meteor.startup(function () {
  Meteor.methods({
    barcodeScan: function(){
      if (Meteor.isCordova){
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            console.log("heheheheheh")
            console.log(result);
            Meteor.call('upcDecoder', result, function(error, results){
              $('#pageHome').addClass('hide');
              $('#pageDisplay').removeClass('hide');
              var wineName = results.data.Products.List[0].Name
              var wineUrl =  results.data.Products.List[0].Labels[0].Url
              var wineVarietal = results.data.Products.List[0].Varietal.Name
              // Blaze.remove(render)
              render = Blaze.renderWithData(Template.rateWine, {name: wineName, url: wineUrl, type: wineVarietal}, document.querySelector('#pageDisplay'))
            });
          },
          function (error) {
            alert("Scanning failed: " + error);
          }
        )
      }
    }
  })
})
