Template.body.events ({
    'click #scanIt': function(event) {
        event.preventDefault(); 
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        // Blaze.renderWithData(Template.recReturned, {results: results}, document.querySelector('#recResult'))
        render = Blaze.render(Template.rateWine, document.querySelector('#pageDisplay'))
    }
});

Template.rateWine.events ({
    'click button': function(event) {
        event.preventDefault();
        Blaze.remove(render)
        render = Blaze.render(Template.wineQuestions, document.querySelector('#pageDisplay'))
    }
})