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

FlowRouter.route("/profile/:profileType/:userId", {
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <Profile
                userid={params.userId}
                profiletype={params.profileType}
                />
    });
  }
});
