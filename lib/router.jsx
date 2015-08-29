FlowRouter.route('/', {
// subscriptions: function() {
//    this.register('allUsers', Meteor.subscribe('allUsers'));
//  },
 triggersEnter: [function(context, redirect) {
    if (Meteor.userId()) {
      redirect('/'+Meteor.userId());
    }
  }],
  action: function() {
   ReactLayout.render(
      Main, {content: <App/>});
  }

});

FlowRouter.route('/:id', {
// subscriptions: function() {
//    this.register('allUsers', Meteor.subscribe('allUsers'));
//    this.register('usersFeed', Meteor.subscribe('usersFeed'));
//  },
  action: function(params) {
     console.log(params);
     ReactLayout.render(
        Main, {content: <UserFeeds/>});
    }
});

