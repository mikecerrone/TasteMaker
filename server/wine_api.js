Meteor.methods({
wineApiLookup: function(name) {
        var name = name
        // this.unblock();
        return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=' + name + '&apikey=f6569a177b45d11f2e5dc5fee4bf9e82')
    },

    wineApiRecommendation: function() {
        // this.unblock()
        return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=apothic%20red&apikey=f6569a177b45d11f2e5dc5fee4bf9e82')
    }
})