Template.body.events({ 
    "click #aboutUs": function(event) {
        event.preventDefault;
        if (typeof render !== 'undefined') {
            Blaze.remove(render);
        }
        $('#pageHome').addClass('hide');
        $('#pageDisplay').removeClass('hide');
        render = Blaze.render(Template.notFound, document.querySelector('#pageDisplay'))
    }
})