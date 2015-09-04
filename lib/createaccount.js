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
