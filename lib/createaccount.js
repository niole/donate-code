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
    if (!error) {
      if (state === "signIn") {
        console.log('user');
        console.log(Meteor.userId());
        var dev = Developers.findOne({devId: Meteor.userId()});
        var charity = Charities.findOne({charityId: Meteor.userId()});

        if (dev) {
          FlowRouter.go("/profile/developer/"+Meteor.userId());
        }
        if (charity) {
          FlowRouter.go("/profile/charity/"+Meteor.userId());
        }
        return true;
      }
      if (state === "signUp") {
        switch (Session.get('userType')) {
          case 'developer':
            //make developer object
            var res;
            Developers.insert({
                              _id: Meteor.userId(),
                              profile: {
                                devSkills: [],
                                description: 'Your bio.',
                                image: "http://www.therepublicgs.net/wp-content/uploads/2014/09/user.png",
                                links: [],
                                name: "Your title."
                              },
                              miniProfiles: {
                                acceptedProjects: [],
                                pendingProjects: []
                              }
                              }, function(err) {
                                if (!err) {
                                  FlowRouter.go("/profile/developer/"+Meteor.userId());
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
                                name: 'Your title.',
                                skills: [],
                                description: 'Your bio.',
                                image: "http://www.therepublicgs.net/wp-content/uploads/2014/09/user.png",
                                links: []
                              },
                              miniProfiles: {
                                projects: []
                              }
                              }, function(err) {
                                if (!err) {
                                  FlowRouter.go("/profile/charity/"+Meteor.userId());
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
