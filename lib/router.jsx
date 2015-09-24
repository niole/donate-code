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

FlowRouter.route("/profile/:profileType/:profileId/:parentId", {
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <Profile
                profileid={params.profileId}
                parentid={params.parentId}
                profiletype={params.profileType}
                />
    });
  }
});
