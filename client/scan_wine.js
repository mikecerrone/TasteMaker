Template.body.events ({
    "click #scanIt": function(event) {
        event.preventDefault();
        if (Meteor.isCordova) {
            Meteor.call('barcodeScan', function(err, res) {
                // render = Blaze.render(Template.rateWine, document.querySelector('#pageDisplay'))
            })
        } else {
            $('#pageHome').toggleClass('hide');
            $('#pageDisplay').toggleClass('hide');
            render = Blaze.render(Template.notFound, document.querySelector('#pageDisplay'))
        }
    }
})
