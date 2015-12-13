
function wineTasteCoordinates(varietal, wineStyle) {

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
  return wineTC

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

// Driver test code
 // userEvaluation(wineTasteCoordinates("Cabernet_Franc", "Big_&_Bold"),50,4,-5)