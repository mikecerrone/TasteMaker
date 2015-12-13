Template.body.events({ 
    "click #aboutUs": function(event) {
        event.preventDefault;
        $('#pageHome').toggleClass('hide');
        $('#pageDisplay').toggleClass('hide');
        render = Blaze.render(Template.notFound, document.querySelector('#pageDisplay'))
    }
})

Template.notFound.events({
    "click #manualSearch": function(event) {
        event.preventDefault();
        var searchText = $('input').val();
         Meteor.call("wineApiLookup", searchText, function(err, res){
            var wineName = res.data.Products.List[0].Name
            var wineUrl =  res.data.Products.List[0].Labels[0].Url
            var wineType =  res.data.Products.List[0].ProductAttributes[0].Name
            // debugger;
            Blaze.remove(render)
            render = Blaze.renderWithData(Template.rateWine, {name: wineName, url: wineUrl, type: wineType}, document.querySelector('#pageDisplay'))
        })
    }
})