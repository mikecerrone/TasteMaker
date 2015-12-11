Meteor.methods({
    ajaxWineApi: function() {
    // MUST BE UPDATED WITH ALGORITHM
        this.unblock;
        return Meteor.http.call("GET", 'https://services.wine.com/api/beta2/service.svc/json/catalog?search=apothic%20red&size=1&apikey=f6569a177b45d11f2e5dc5fee4bf9e82')
    }
})