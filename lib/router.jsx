FlowRouter.route("/", {
  action: function() {
    var userid = Meteor.userId();
    gleanProfile(userid);

    Session.set('userType', null);
    ReactLayout.render(MainLayout, {
      content: <LoginSignup state={"signIn"}/>
    });
  }
});

FlowRouter.route("/signup", {
  action: function() {
    var userid = Meteor.userId();
    gleanProfile(userid);

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

function gleanProfile(userid) {
  let id = {_id: userid};
  let dev = Developers.findOne(id);
  let charity = Charities.findOne(id);
  if (dev) {
    FlowRouter.go('/profile/developer/'+userid+'/0');
  } else {
    if (charity) {
      FlowRouter.go('/profile/charity/'+userid+'/0');
    }
  }
}

