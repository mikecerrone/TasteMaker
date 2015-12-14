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
        render = Blaze.renderWithData(Template.wineQuestions, {q1: wineQuestions[0][0], q2: wineQuestions[1][0]}, document.querySelector('#pageDisplay'))
        $(document).foundation();
    }
})

Template.wineQuestions.events ({
    'click button': function(event) {
        event.preventDefault();
        //convertedAnswer is still here, stores the like/dislike/hate
        questionOne = $('.range-slider input')[0].value
        questionTwo = $('.range-slider input')[1].value
        userEvaluation(wineCoords, convertedAnswer, questionOne, questionTwo)
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

function userEvaluation(wineTasteCoordinates, evaluationWine, evaluationX, evaluationY ) {
  var userTaste = wineTasteCoordinates
    if (evaluationWine != 'dislike'){
     userTaste = [userTaste[0] + evaluationX, userTaste[1]]
     userTaste = [userTaste[0],  userTaste[1] + evaluationY]

     // add the userTaste array to user DB, n number of times depending on like(10x) or love(50x)
     var step;
      for (step = 0; step < evaluationWine; step++) {
       // console.log(userTaste);
     }

    } else {
     userTaste = [userTaste[0] + evaluationX, userTaste[1]]
     userTaste = [userTaste[0],  userTaste[1] + evaluationY]

     // Inverts the users choice to the opposite side of the taste spectrum
     userTaste = [userTaste[0] * -2  + userTaste[0], userTaste[1]]
     userTaste = [userTaste[0], userTaste[1] + userTaste[1] * -2 ]

      // add the inverted userTaste array to user DB, 2 times (hardcoded) due to 'dislike'
     var step;
      for (step = 0; step < 2; step++) {
        console.log(userTaste);
       }
     }
}