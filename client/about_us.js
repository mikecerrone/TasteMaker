Template.body.events({ 
    "click #aboutUs": function(event) {
        event.preventDefault;
        $('#pageHome').addClass('hide');
        $('#pageDisplay').removeClass('hide');
        render = Blaze.render(Template.aboutUs, document.querySelector('#renderHere'))
    }
})


Template.aboutUs.events ({
    'click #aboutUs': function(event) {
        event.preventDefault();
        $('#pageHome').removeClass('hide');
        $('#pageDisplay').addClass('hide')
        Blaze.remove(render)
    }
})
