AccountsTemplates.configure({
    hideSignUpLink: true,
    hideSignInLink: true,
    texts: {
        optionalField: "",
        button: {
          signIn: "Sign In",
          signUp: "Sign Up",
        }
    }
});

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Name"
});

AccountsTemplates.configure({
  onSubmitHook: function(error, state){
    var userId = Meteor.userId();
    if (!error) {
      if (state === "signIn") {
        var dev = Developers.findOne({_id: userId});
        var charity = Charities.findOne({_id: userId});

        if (dev) {
          FlowRouter.go("/profile/developer/"+ userId +"/0");
        }
        if (charity) {
          FlowRouter.go("/profile/charity/"+ userId +"/0");
        }
        return true;
      }
      if (state === "signUp") {
        var userData = Meteor.users.findOne({ _id: userId });
        var userName = userData.profile.name;
        var userEmail = userData.emails[0].address;
        switch (Session.get('userType')) {
          case 'developer':
            //make developer object
            var res;
            Developers.insert({
                              _id: userId,
                              profile: {
                                skills: [],
                                email: userEmail,
                                description: 'Your bio.',
                                image: ["http://www.therepublicgs.net/wp-content/uploads/2014/09/user.png"],
                                profileurl: "/profile/developer/"+ userId + "/0",
                                links: [],
                                name: userName
                              },
                              miniProfiles: {
                                acceptedProjects: [],
                                pendingProjects: []
                              }
                              }, function(err) {
                                if (!err) {
                                  FlowRouter.go("/profile/developer/"+ userId + "/0");
                                  res = true;
                                 }
                              });
            return res;
            break;

          case 'charity':
            //make charity object
            Charities.insert({
                              _id: Meteor.userId(),
                              profile: {
                                name: userName,
                                email: userEmail,
                                skills: [],
                                profileurl: "/profile/charity/"+ userId +"/0",
                                description: 'Your bio.',
                                image: ["http://www.therepublicgs.net/wp-content/uploads/2014/09/user.png"],
                                links: ["https://www.google.com/"]
                              },
                              miniProfiles: {
                                projects: [],
                                developers: []
                              }
                              }, function(err) {
                                if (!err) {
                                  FlowRouter.go("/profile/charity/"+Meteor.userId()+"/0");
                                  res = true;
                                }
                              });
            return res;
            break;
        }
      }
    }
    return false;
  }
});
