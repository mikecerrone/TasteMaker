Template.body.events ({
    'click #wineHistory': function(event) {
        event.preventDefault();
        if (typeof render !== 'undefined') {
            Blaze.remove(render);
        }
        $('#pageHome').addClass('hide');
        $('#pageDisplay').removeClass('hide')
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

