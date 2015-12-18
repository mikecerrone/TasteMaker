// Template.hamburgerBar.events({
//     'click #ham': function(event){
//         event.preventDefault();
//     }
// })

// Template.hamburgerBar.onRendered(()=>{
//     $(document).foundation();
// })

Template.body.events({
    'click #clickArrow': function(event) {
    Blaze.remove(render);
    $('#pageHome').removeClass('hide');
    $('#pageDisplay').addClass('hide');
    }
})

