Meteor.startup(function () {
  Meteor.methods({
    barcodeScan: function(){
      if (Meteor.isCordova){
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            Meteor.call('upcDecoder', result, function(error, results){
              alert('we made it')
              alert(results.data[0].brand)
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
