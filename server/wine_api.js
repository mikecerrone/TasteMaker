UserHistory = new Mongo.Collection("history");

Meteor.methods({
  wineApiLookup: function(name) {
    var uriName = encodeURI(name);
    this.unblock();
    return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=' + uriName + '&apikey=f6569a177b45d11f2e5dc5fee4bf9e82');
    // Meteor.call('wineApiLookupSorting', results, name);
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
