Template.body.events ({
    'click #scanIt': function(event) {
        event.preventDefault();
        Meteor.call('barcodeScan', function(err, res){
            $('#pageHome').toggleClass('hide');
            $('#pageDisplay').toggleClass('hide');
            render = Blaze.render(Template.rateWine, document.querySelector('#pageDisplay'))
         })
    }
});

Template.rateWine.events ({
    'click button': function(event) {
        event.preventDefault();
        Blaze.remove(render)
        render = Blaze.render(Template.wineQuestions, document.querySelector('#pageDisplay'))
        $(document).foundation();
    }
})
