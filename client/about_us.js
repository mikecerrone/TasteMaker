Template.body.events({ 
    "click #aboutUs": function(event) {
        event.preventDefault;
        if (typeof render !== 'undefined') {
            Blaze.remove(render);
        }
        $('#pageHome').addClass('hide');
        $('#pageDisplay').removeClass('hide');
        render = Blaze.render(Template.aboutUs, document.querySelector('#pageDisplay'))
    }
})


Template.aboutUs.events ({
    'click button': function(event) {
        event.preventDefault();
        $('#pageHome').removeClass('hide');
        $('#pageDisplay').addClass('hide')
        Blaze.remove(render)
    }
})
