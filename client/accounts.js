Template.body.events ({
    'click #signUp': function(event) {
        $('.signUp').removeClass('hide');
        $('.logIn').addClass('hide');
    },

    'click #logIn': function(event) {
        $('.signUp').addClass('hide');
        $('.logIn').removeClass('hide');
    },

    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
})

Template.signUp.events ({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.signupEmail.value;
        var passwordVar = event.target.signupPassword.value;
        Meteor.call('addUser', [emailVar, passwordVar], function(err, res){
            Meteor.loginWithPassword(emailVar, passwordVar);
        })
    }
});

Template.logIn.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar, function(){FlashMessages.sendWarning("error loggin in"), {autoHide: false}})
    }
});

Template.facebook.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },

    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});
