Template.body.events ({
    'click #tasteProfile': function(event) {
        event.preventDefault(); 
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        // Blaze.renderWithData(Template.recReturned, {results: results}, document.querySelector('#recResult'))
        render = Blaze.render(Template.tasteProfile, document.querySelector('#pageDisplay'))
    }
});

Template.tasteProfile.events ({
    'click button': function(event) {
        event.preventDefault();
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        Blaze.remove(render)
    }
})