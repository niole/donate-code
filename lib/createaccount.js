AccountsTemplates.configure({
    texts: {
        button: {
          changePwd: "Password Text",
          enrollAccount: "Enroll Text",
          forgotPwd: "Forgot Pwd Text",
          resetPwd: "Reset Pwd Text",
          signIn: "Sign In Text",
          signUp: "Sign Up Text",
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
      // Successfully logged in
      // ...
      return Meteor.user();
    }
    if (state === "signUp") {
      // Successfully registered
      UsersFeed.insert({_id: Meteor.userId(), feeds:[Meteor.userId()]}); 
    }
  }
}

});



