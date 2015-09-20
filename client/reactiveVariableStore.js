Tracker.autorun(function () {
  if (!Meteor.user()) {
    FlowRouter.go('/');
  }
});
