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
    console.log('hit next')
    console.log(results.content)
  },

  wineApiRecommendation: function() {
    this.unblock()
    return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=apothic%20red&apikey=f6569a177b45d11f2e5dc5fee4bf9e82')
  }
})
