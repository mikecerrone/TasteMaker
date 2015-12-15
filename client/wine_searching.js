Template.notFound.events({
    "click #manualSearch": function(event) {
        event.preventDefault();
        var searchText = $('input').val();
         Meteor.call("wineApiLookupTemp", searchText, function(err, res){
            // console.log(err)
            var wineName = res.data.Products.List[0].Name
            var wineUrl =  res.data.Products.List[0].Labels[0].Url
            var wineType =  res.data.Products.List[0].ProductAttributes[0].Name
            var wineVarietal = res.data.Products.List[0].Varietal.Name
            Blaze.remove(render)
            wineCoords = wineTasteCoordinates(wineVarietal, wineType)
            wineQuestions = questionServer(wineCoords)
            render = Blaze.renderWithData(Template.rateWine, {name: wineName, url: wineUrl, type: wineType}, document.querySelector('#pageDisplay'))
        })
    }
})


function wineTasteCoordinates(varietal, wineStyle, callback) {

   // Should be DB Collection or we can create static list since none of these numbers change
  var varietalTaste = {
  //Reds
    'Cabernet_Franc':[30,30],
    'Syrah/Shiraz':[50,18],
    'Pinot Noir':[-7,10],
    'Cabernet Sauvignon':[40,5],
    'Sangiovese':[28,35],
    'Barbera':[25,-38],
    'Grenache':[12,-41],
    'Malbec':[36,-31],
    'Merlot':[45,-16],
    "Nero d'Avola":[30,-32],
    'Petite Sirah':[15,3],
    'Pinotage':[20,33],
    'Zinfandel':[35,-35],
    'Chianti':[15,40],
    'Tempranillo':[28,30],
  //Whites
    'Chardonnay':[-13,-9],
    'Sauvignon Blanc':[-27,37],
    'Pinot Gris/Grigio':[-31,0],
    'Muscat':[7,45],
    'Riesling':[-25,-20],
    'Viognier':[17,-10]
  }

  var varietalStyle = {
  //Reds
    'Big &amp; Bold':[0,5],
    'Earthy_&_Spicy':[5,3],
    'Light_&_Fruity':[-3,-3],
    'Smooth_&_Supple':[-4,2],
  //Whites
    'Fruity_&_Smooth':[-5,2],
    'Rich_&_Creamy':[-3,1],
    'Light_&_Crisp':[-3,-3]
  }

  // Varietal default coordinates from our wine taste mapping work
  var wineVariatalX = varietalTaste[varietal][0]
  var wineVariatalY = varietalTaste[varietal][1]

  // Wine.com's style preferences added to more accurately position wine within varietal's mapped range
  var wineStyleX = varietalStyle[wineStyle][0]
  var wineStyleY = varietalStyle[wineStyle][1]

  // Creates wines specific taste profile coordinates
  var wineTC = [wineStyleX+wineVariatalX, wineStyleY+wineVariatalY]

  // NEED TO ADD TO SAVE TO DB: userHistory.insert({userTaste: wineTC, user: Meteor.userId})
  return wineTC
  // callback()

}


 // evalutaionWine= 'dislike' 10(like) or 50(love), evaluationX= fruit/earth, evaluationY is bold/light
function userEvaluation(wineTasteCoordinates, evaluationWine, evaluationX, evaluationY ) {
  var userTaste = wineTasteCoordinates
    if (evaluationWine != 'dislike'){
     userTaste = [userTaste[0] + evaluationX, userTaste[1]]
     userTaste = [userTaste[0],  userTaste[1] + evaluationY]

     // add the userTaste array to user DB, n number of times depending on like(10x) or love(50x)
     var step;
      for (step = 0; step < evaluationWine; step++) {
        // console.log(userTaste)
       Taste.insert({userTaste: userTaste, user: Meteor.userId})
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
      Taste.insert({userTaste: userTaste, user: Meteor.userId})
       }
     }
}

// Sample questions for the 2nd and 3rd user questions.
var questions = {
    "bold": [{"question": "Did you like that this wine had bold flavors?", "values":[-5,5]}, {"question": "Did you think the wines flavors were too bold?", "values":[5,-5]}],
    "light": [{"question": "Did you like that this wine had a light flavor?", "values":[-5,5]}, {"question": "Did you think the wines flavors were too bold?", "values":[5,-5]}],
    "fruity": [{"question": "Did you like that this wine had fruity flavors?", "values":[-5,5]}, {"question": "Did you think the wines flavors were too fruity?", "values":[5,-5]}],
    "earthy": [{"question": "Did you like that this wine had earthy flavors?", "values":[-5,5]}, {"question": "Did you think the wines flavors were too earthy?", "values":[5,-5]}]
}

function questionServer(wineCoordinates, callback) {
  var questionsFinal = []
  if (wineCoordinates[0] >= 0) {
    if (wineCoordinates[1] >= 0){
      // return array with both question generators(earthy, bold)
      questionsFinal.push(questionGenerator("earthy"))
      questionsFinal.push(questionGenerator("bold"))
       return questionsFinal
    } else {
     // return array with both question generators (earthy, light)
      questionsFinal.push(questionGenerator("earthy"))
      questionsFinal.push(questionGenerator("light"))
       return questionsFinal
    }
 } else {
      if (wineCoordinates[1] >= 0){
     // return array with both question generators(fruity, bold)
      questionsFinal.push(questionGenerator("fruity"))
      questionsFinal.push(questionGenerator("bold"))
       return questionsFinal
    } else {
     // return array with both question generators (fruity, light)
      questionsFinal.push(questionGenerator("fruity"))
      questionsFinal.push(questionGenerator("light"))
       return questionsFinal
    }
  }
  // callback();
};

// Chooses random question from array when passed a flavorElement ('bold','light','fruity','earthy')
function questionGenerator(flavorElement, callback) {
  var x = Math.floor((Math.random() * 1));
  var question = questions[flavorElement][x].question;
  var values = questions[flavorElement][x].values;
  var selection = [question, values]
  // callback();
    return selection;
};



// Driver test code for questionServer
 // var bobo = [30,-30]
 // console.log(questionServer(bobo))


// Driver test code
 // userEvaluation(wineTasteCoordinates("Cabernet_Franc", "Big_&_Bold"),50,4,-5)
