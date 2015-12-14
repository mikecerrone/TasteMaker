// Template.body.events ({
//     'click #scanIt': function(event) {
//         event.preventDefault();
//         Meteor.call('barcodeScan', function(err, res){
//             $('#pageHome').toggleClass('hide');
//             $('#pageDisplay').toggleClass('hide');
//             render = Blaze.render(Template.rateWine, document.querySelector('#pageDisplay'))
//          })
//     }
// });

Template.rateWine.events ({
    'click button': function(event) {
        event.preventDefault();
        var answer = event.target.id;
        convertedAnswer = getAnswer(answer)
        Blaze.remove(render)
        render = Blaze.render(Template.wineQuestions, document.querySelector('#pageDisplay'))
        $(document).foundation();
    }
})

Template.wineQuestions.events ({
    'click button': function(event) {
        event.preventDefault();
        debugger;
        questionOne = $('.range-slider input')[0].value
        questionTwo = $('.range-slider input')[1].value
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide')
        Blaze.remove(render)
    }
})

var getAnswer = function(answer) {
    switch(answer) {
        case 'like':
            return 10;
            break;
        case 'love':
            return 50;
            break;
        case 'dislike':
            return 'dislike';
            break;
    }
}