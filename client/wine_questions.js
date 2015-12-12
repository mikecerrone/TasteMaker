Template.wineQuestions.onRendered(function () {
    console.log('hit')
    // $(document).foundation('reflow');
});

Template.wineQuestions.events ({
    'click button': function(event) {
        event.preventDefault();
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        Blaze.remove(render)
    }
})