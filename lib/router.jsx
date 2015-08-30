FlowRouter.route('/', {
// subscriptions: function() {
//    this.register('allUsers', Meteor.subscribe('allUsers'));
//  },
  action: function() {
    React.render(<UserFeeds id={null}/>, document.body);
//   ReactLayout.render(
//      UserFeeds, {content: <App/>});
  }

});

FlowRouter.route('/:id', {
// subscriptions: function() {
//    this.register('allUsers', Meteor.subscribe('allUsers'));
//    this.register('usersFeed', Meteor.subscribe('usersFeed'));
//  },
  action: function(params) {
    React.render(<UserFeeds id={params.id}/>, document.body);

//  ReactLayout.render(
//     UserFeeds, {content: <Feed/>});
 }
});

