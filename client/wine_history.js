Template.body.events ({
    'click #wineHistory': function(event) {
        event.preventDefault();
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        render = Blaze.render(Template.wineHistory, document.querySelector('#pageDisplay'))
    }
})

Template.wineHistory.events ({
    'click button': function(event) {
        event.preventDefault();
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        Blaze.remove(render)
    }
})