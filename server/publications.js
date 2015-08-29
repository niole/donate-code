Meteor.publish('allUsers', function() {
  return Meteor.users.find({}).fetch();
});

Meteor.publish('usersFeed', function() {
  return UsersFeed.find({}).fetch();
});

