FlowRouter.route("/", {
  action: function() {
    Session.set('userType', null);
    ReactLayout.render(MainLayout, {
      content: <LoginSignup state={"signIn"}/>
    });
  }
});

FlowRouter.route("/signup", {
  action: function() {
    Session.set('userType', null);
    ReactLayout.render(MainLayout, {
      content: <LoginSignup state={"signUp"}/>
    });
  }
});
