Template.body.events ({
    "click #scanIt": function(event) {
        event.preventDefault();
        Meteor.call('barcodeScan', function(data) {
            $('#pageHome').toggleClass('hide');
            $('#pageDisplay').toggleClass('hide');
            render = Blaze.render(Template.rateWine, document.querySelector('#pageDisplay'))
        })
    }
})