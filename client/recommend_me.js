var varietalTaste = {
  //Reds
    'Cabernet Franc':[30,30],
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

function getRecommendation( tasteProfile, varietalsObject ){
    // distance cant get bigger then 145 by construct...
    var smallestDistance = 150;
    var closest = null;
    for (var varietalCoordinate in varietalsObject) {
      var xs = 0;
      var ys = 0;
      xs = varietalsObject[varietalCoordinate][0] - tasteProfile[0];
      xs = xs * xs;

      ys = varietalsObject[varietalCoordinate][1] - tasteProfile[1];
      ys = ys * ys;
      var distance = Math.sqrt( xs + ys );
        if (distance < smallestDistance){
            smallestDistance = distance;
            closest = varietalCoordinate;
        }
    }
    console.log(closest);
}

Template.body.events ({
    'click #wineRec': function(event) {
        event.preventDefault();
        $('#pageHome').addClass('hide');
        $('#pageDisplay').removeClass('hide')
        // Blaze.renderWithData(Template.recReturned, {results: results}, document.querySelector('#recResult'))
        render = Blaze.render(Template.recWine, document.querySelector('#renderHere'))
    }
});


Template.recWine.events ({
    'click button': function(event) {
        event.preventDefault();
        $('#pageHome').removeClass('hide');
        $('#pageDisplay').addClass('hide')
        Blaze.remove(render)
    }
})
