AccountsTemplates.configure({
    defaultState: "signIn",
    texts: {
        optionalField: "visible name",
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
        return true;
      }
      if (state === "signUp") {
        // Successfully registered
        console.log('registered');
        return true;
      }
    }
  }
});
