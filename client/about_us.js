Template.body.events({ 
    "click #aboutUs": function(event) {
        event.preventDefault;
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide');
        render = Blaze.render(Template.notFound, document.querySelector('#pageDisplay'))
    }
})