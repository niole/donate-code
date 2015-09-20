AccountsTemplates.configure({
    hideSignUpLink: true,
    hideSignInLink: true,
    texts: {
        optionalField: "screen name",
        button: {
          changePwd: "Password Text",
          enrollAccount: "Enroll Text",
          forgotPwd: "Forgot Pwd Text",
          resetPwd: "Reset Pwd Text",
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
            Developers.insert({
                              devId: Meteor.userId(),
                              devSkills: [],
                              bio: 'Your bio.',
                              profileImg: "http://www.therepublicgs.net/wp-content/uploads/2014/09/user.png",
                              links: [],
                              acceptedProjects: [],
                              pendingProjects: []
                              });
            return Meteor.user();
            break;

          case 'charity':
            //make charity object
            Charities.insert({
                              charityId: Meteor.userId(),
                              projects: [],
                              bio: 'Your bio.',
                              logo: "http://www.therepublicgs.net/wp-content/uploads/2014/09/user.png",
                              links: []
                              });
            return Meteor.user();
            break;
        }
      }
    }
    return error;
  }
});
