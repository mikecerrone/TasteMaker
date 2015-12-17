Template.body.events ({
    'click #wineRec': function(event) {
        event.preventDefault();
        $('#pageHome').addClass('hide');
        $('#pageDisplay').removeClass('hide')
        searchTerm = Meteor.call('methodsController', function(err, res){
          return res
        })
        console.log(searchTerm)
        render = Blaze.render(Template.recWine, document.querySelector('#pageDisplay'))
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

