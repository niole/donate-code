AccountsTemplates.configure({
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
    if (!error) {
      if (state === "signIn") {
        return Meteor.user();
      }
      if (state === "signUp") {
        // Successfully registered
        UsersFeed.insert({_id: Meteor.userId(), feeds:[Meteor.userId()]});
      }
    }
  }
});
