Meteor.startup = function() {
//  Accounts.ui.config({
//   passwordSignupFields: "EMAIL_ONLY"
//  });
};

Tracker.autorun(function () {
  if (Meteor.user()) {
    FlowRouter.go('/'+Meteor.userId());
  } else {
    FlowRouter.go('/');
  }
});

//Accounts.createUser = _.wrap(Accounts.createUser, function(createUser) {
//  // Store the original arguments
//  var args = _.toArray(arguments).slice(1),
//      user = args[0],
//      origCallback = args[1];
//  // Create a new callback function
//  // Could also be defined elsewhere outside of this wrapped function
//  // This is called on the client
//  var newCallback = function(err) {
//    if (err) {
//      console.error(err);
//    } else {
//      UsersFeed.insert({_id: Meteor.userId(), feeds:[Meteor.userId()]});
//    }
//  };
//
//  // Now call the original create user function with
//  // the original user object plus the new callback
//  createUser(user, newCallback);
