Template.body.events ({
    'click #wineRec': function(event) {
        event.preventDefault();
        Meteor.call('methodsController', function(err, res){
            wine = _.sample(res)
            $('#pageHome').addClass('hide');
            $('#pageDisplay').removeClass('hide')
            render = Blaze.renderWithData(Template.recWine, {wine: wine[0]}, document.querySelector('#renderHere'))
        })    
    }
});

Template.recWine.events ({
    'click button': function(event) {
        event.preventDefault();
        $('#pageHome').removeClass('hide');
        $('#pageDisplay').addClass('hide')
        Blaze.remove(render)
    }
})
