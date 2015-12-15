Template.body.events ({
    "click #scanIt": function(event) {
        event.preventDefault();
        if (Meteor.isCordova) {
              $('#pageHome').addClass('hide');
              $('#pageDisplay').removeClass('hide');
              Meteor.call('barcodeScan', function(err, res) {
            })
        } else {
              $('#pageHome').addClass('hide');
              $('#pageDisplay').removeClass('hide');
              render = Blaze.render(Template.notFound, document.querySelector('#pageDisplay'))
        }
    }
})
