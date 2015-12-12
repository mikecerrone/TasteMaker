
function wineTasteCoordinates(varietal, wineStyle) {

 // Should be DB Collection or we can create static list since none of these numbers change
var varietalTaste = {'Cabernet_Franc': [30,30],'Syrah': [50,18]}
var varietalStyle = {'Big_and_Bold': [0,5], 'Earthy_and_Spicy': [5,0] }

  // Varietal default coordinates from our wine taste mapping work
  var wineVariatalX = varietalTaste[varietal][0]
  var wineVariatalY = varietalTaste[varietal][1]

  // Wine.com's style preferences added to more accurately position wine within varietal's mapped range
  var wineStyleX = varietalStyle[wineStyle][0]
  var wineStyleY = varietalStyle[wineStyle][1]

  // Creates wines specific taste profile coordinates
 var WineTC = [wineStyleX+wineVariatalX, wineStyleY+wineVariatalY]

 console.log(WineTC)
}
// Driver test code
wineTasteCoordinates("Cabernet_Franc", "Big_and_Bold")


function userEvaluation(wineTasteCoordinates, evaluationWine, evaluationX, evaluationY ) {
  var userTaste = wineTasteCoordinates






   // if (evaluation = "like") {
   //  var
   // }



}