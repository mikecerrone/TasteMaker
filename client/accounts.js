Template.accountBox.events ({
    'click #signUp': function(event) {
        $('.signUp').removeClass('hide');
        $('.logIn').addClass('hide');
    },

    'click #logIn': function(event) {
        $('.signUp').addClass('hide');
        $('.logIn').removeClass('hide');   
    }
})