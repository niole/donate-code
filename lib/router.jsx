FlowRouter.route("/", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <LoginSignup state={"signIn"}/>
    });
  }
});

FlowRouter.route("/signup", {
  action: function() {
    ReactLayout.render(MainLayout, {
      content: <LoginSignup state={"signUp"}/>
    });
  }
});

