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
    if (Session.get('userType') && !error) {
      if (state === "signIn") {
        return Meteor.user();
      }
      if (state === "signUp") {
        switch (Session.get('userType')) {
          case 'developer':
            //make developer object
            var res;
            Developers.insert({
                              devId: Meteor.userId(),
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
                                  FlowRouter.go("/profile/developer");
                                  res = true;
                                 }
                              });
            return res;
            break;

          case 'charity':
            //make charity object
            Charities.insert({
                              charityId: Meteor.userId(),
                              profile: {
                                name: 'Your title.',
                                description: 'Your bio.',
                                image: "http://www.therepublicgs.net/wp-content/uploads/2014/09/user.png",
                                links: []
                              },
                              miniProfiles: {
                                projects: []
                              }
                              }, function(err) {
                                if (!err) {
                                  FlowRouter.go("/profile/charity");
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
