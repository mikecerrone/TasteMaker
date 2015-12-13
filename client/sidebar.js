Template.hamburgerBar.events({
    'click #ham': function(event){
        event.preventDefault();
    }
})

Template.hamburgerBar.onRendered(()=>{
    $(document).foundation();
})