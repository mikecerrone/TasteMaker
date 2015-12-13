// Sample questions for the 2nd and 3rd user questions.
var questions = {

"bold": [{"question": "Did you like that this wine had bold flavors?", "values":[-5,5]}, {"question": "Did you think the wines flavors were too bold?", "values":[5,-5]}],


"light": [{"question": "Did you like that this wine had a light flavor?", "values":[-5,5]}, {"question": "Did you think the wines flavors were too bold?", "values":[5,-5]}],


"fruity": [{"question": "Did you like that this wine had fruity flavors?", "values":[-5,5]}, {"question": "Did you think the wines flavors were too fruity?", "values":[5,-5]}],


"earthy": [{"question": "Did you like that this wine had earthy flavors?", "values":[-5,5]}, {"question": "Did you think the wines flavors were too earthy?", "values":[5,-5]}]

}

// Chooses random question from array when passed a flavorElement ('bold','light','fruity','earthy')
function questionGenerator(flavorElement) {
 var x = Math.floor((Math.random() * 1));
  var question = questions[flavorElement][x].question;
  var values = questions[flavorElement][x].values;
  var finalSelection = [question, values]
    return finalSelection
};

// Test driver code
// console.log(questionGenerator('bold'))