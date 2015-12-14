UserHistory = new Mongo.Collection("history");

Meteor.methods({
  wineApiLookup: function(name) {
    var uriName = encodeURI(name);
    this.unblock();
    var results = Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=' + uriName + '&apikey=f6569a177b45d11f2e5dc5fee4bf9e82');
    Meteor.call('wineApiLookupSorting', results, name);
  },

  wineApiLookupSorting: function(results, wineName) {
    var wines = {}
    var wineNoYears = {}
    var parsedResponse = JSON.parse(results.content);
    var responseArray = parsedResponse.Products.List
    for (i = 0; i < responseArray.length; i++) {
      var nameSplit = responseArray[i].Name.split(" ");
      var year = nameSplit.pop();
      var name = nameSplit.join(" ")
      var region = responseArray[i].Appellation.Region.Name
      if (responseArray[i].ProductAttributes.length > 0) {
        var style = responseArray[i].ProductAttributes[0].Name
      }
      var varietal = responseArray[i].Varietal.Name
      var type = responseArray[i].Varietal.WineType.Name
      var price = responseArray[i].PriceMax
      if(responseArray[i].Ratings.HighestScore > 0) {
        var rating = responseArray[i].Ratings.HighestScore
      } else {
        var rating = null
      }
      wines[responseArray[i].Name] = {year: year, price: price, style: style, region: region, varietal: varietal, type: type, rating: rating}
      wineNoYears[name] = 'test'
    }
    Meteor.call('similar', wineName, wines);
  },

  similar: function(searchWord, resultObject){
    var highest = {score: 0}
    for (var name in resultObject){
      var lengthsearchWord = searchWord.length;
      var lengthResult = name.length - 5;
      var equivalency = 0;
      var minLength = (lengthsearchWord > lengthResult) ? lengthResult : lengthsearchWord;
      var maxLength = (lengthsearchWord < lengthResult) ? lengthResult : lengthsearchWord;
      for(var i = 0; i < minLength; i++) {
          if(lengthsearchWord[i] == lengthResult[i]) {
              equivalency++;
          }
      }
      var weight = equivalency / maxLength;
      var alikeness = weight * 100
      if (alikeness > highest.score){
        highest.name = name
        highest.score = alikeness
      }
    }
    console.log(highest);
    UserHistory.insert(resultObject[highest.name]);
    console.log('worked')
  },

  wineApiRecommendation: function() {
    this.unblock()
    return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=apothic%20red&apikey=f6569a177b45d11f2e5dc5fee4bf9e82')
  },



// This is being used for now to get a single response
  wineApiLookupTemp: function(name) {
    this.unblock()
    return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=' + name + '&apikey=f6569a177b45d11f2e5dc5fee4bf9e82')
  },

})