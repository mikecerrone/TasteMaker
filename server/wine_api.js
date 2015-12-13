Meteor.methods({
  wineApiLookup: function(name) {
    var uriName = encodeURI(name);
    console.log('hit api request method');
    this.unblock();
    console.log("before")
    var results = Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=' + uriName + '&apikey=f6569a177b45d11f2e5dc5fee4bf9e82');

    console.log(results);
    console.log("after");
    Meteor.call('wineApiLookupSorting', results);
  },

  wineApiLookupSorting: function(results) {
    var wines = {}
    var wineNoYears = {}
    var parsedResponse = JSON.parse(results.content);
    var responseArray = parsedResponse.Products.List
    console.log(responseArray.length)
    for (i = 0; i < responseArray.length; i++) {
      var nameSplit = responseArray[i].Name.split(" ");
      var year = nameSplit.pop();
      var name = nameSplit.join(" ")
      var region = responseArray[i].Appellation.Region.Name
      // if (responseArray[i].ProductAttributes.length > 0) {
      //   var style = responseArray[i].ProductAttributes[0].Name
      // }
      var varietal = responseArray[i].Varietal.Name
      var type = responseArray[i].Varietal.WineType.Name
      var price = responseArray[i].PriceMax
      if(responseArray[i].Ratings.HighestScore > 0) {
        var rating = responseArray[i].Ratings.HighestScore
      } else {
        var rating = null
      }
      wines[responseArray[i].Name] = {year: year, price: price, region: region, varietal: varietal, type: type, rating: rating}
      wineNoYears[name] = 'test'
    }
    Meteor.call('resultLogic', wineNoYearsDone, wines, responseArray.length)
  },

  resultLogic: function(noYears, allWines, wineCount) {
    console.log(wineCount)
    console.log("here")
    console.log(Object.keys(noYears).length);
    console.log((wineCount - noYears.length) > wineCount * 0.6)
    // if ((wineCount - noYears.length) > wineCount * 0.6)
  },

  wineApiRecommendation: function() {
    this.unblock()
    return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=apothic%20red&apikey=f6569a177b45d11f2e5dc5fee4bf9e82')
  }
})
