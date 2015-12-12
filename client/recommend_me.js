Meteor.startup(function () {
    Template.body.events ({
        'click #wineRec': function(event) {
            event.preventDefault();
            $('#pageHome').toggleClass('hide');
            $('#pageDisplay').toggleClass('hide')
            // Blaze.renderWithData(Template.recReturned, {results: results}, document.querySelector('#recResult'))
            render = Blaze.render(Template.recWine, document.querySelector('#pageDisplay'))
            if (Meteor.isCordova){
                cordova.plugins.barcodeScanner.scan(
                function (result) {
                    alert(result.text)
                    Meteor.call('upcDecoder', result, function(error, results) {
                    alert(results[0].product_name)
                    });
                },
                function (error) {
                  alert("Scanning failed: " + error);
                }
              )
            }
        }
    });
}

Template.recWine.events ({
    'click button': function(event) {
        event.preventDefault();
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        Blaze.remove(render)
    }
})
