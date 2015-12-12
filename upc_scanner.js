Meteor.startup(function () {
  Meteor.methods({
    barcodeScan: function(){
      if (Meteor.isCordova){
        cordova.plugins.barcodeScanner.scan(
          function (result) {
            Meteor.call('upcDecoder', result, function(error, results){
              result = null
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
