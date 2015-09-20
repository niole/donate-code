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

FlowRouter.route("/profile/:userType", {
  triggersEnter: [function(context, redirect) {
    if (!Meteor.user()) {
      redirect('/');
    }
  }],
  action: function(params) {
    ReactLayout.render(MainLayout, {
      content: <Profile usertype={params.userType}/>
    });
  }
});

