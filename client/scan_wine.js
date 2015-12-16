Template.body.events ({
  "click #scanIt": function(event) {
    event.preventDefault();
    if (Meteor.isCordova) {
      $('#pageHome').addClass('hide');
      $('#pageDisplay').removeClass('hide');
      Meteor.call('barcodeScan', function(err, res) {
      })
    } else {
      if (typeof render !== 'undefined') {
        Blaze.remove(render);
      }
      $('#pageHome').addClass('hide');
      $('#pageDisplay').removeClass('hide');
      render = Blaze.render(Template.notFound, document.querySelector('#renderHere'))
    }
  },

  "click #manSearch": function(event) {
    if (typeof render !== 'undefined') {
      Blaze.remove(render);
    }
    $('#pageHome').addClass('hide');
    $('#pageDisplay').removeClass('hide');
    render = Blaze.render(Template.notFound, document.querySelector('#renderHere'))
  }
})