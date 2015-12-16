UserHistory = new Mongo.Collection("history");

Meteor.methods({
  wineApiLookup: function(name) {
    var uriName = encodeURI(name);
    this.unblock();
    return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=' + uriName + '&apikey=f6569a177b45d11f2e5dc5fee4bf9e82');
    // Meteor.call('wineApiLookupSorting', results, name);
  },

  wineApiRecommendation: function(recommendation) {
      var uriSearchTerm = encodeURI(recommendation);
      this.unblock()

      console.log('uriSearchTerm')
      recommendationResults = Meteor.http.call("GET", "https://services.wine.com/api/beta2/service.svc/json/catalog?filter=product(135001)&apikey=f6569a177b45d11f2e5dc5fee4bf9e82")
// /catalog?filter=categories(490+124)&offset=10&size=5&apikey=key
      console.log(recommendationResults)
      return recommendationResults
    }
})







