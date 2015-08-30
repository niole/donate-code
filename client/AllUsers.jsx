AllUsers = React.createClass({
  propTypes: {
    users: React.PropTypes.array
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    var Watching = [];
    if (Meteor.user()) {
      Watching = UsersFeed.find({_id: Meteor.userId()}).fetch()[0].feeds;
    }
    return {
            userData: this.props.users,
            Watching: Watching
           };
  },
  followUser() {
    event.preventDefault();
    const userId = arguments[0];
    const isWatching = arguments[1];
    if (!isWatching && Meteor.user()) {
      UsersFeed.update({_id: Meteor.userId()},{ $push: { feeds: userId } });
    } else {
      UsersFeed.update({_id:Meteor.userId()},{ $pop: { feeds: userId }} );
    }
  },
  getUsers() {
    return _.map(this.data.userData, function(user) {
      var userStatus = {message: user._id, watching: false};
      if (Meteor.user()) {
        userStatus = {message: "click to follow "+user._id, watching: false};
        if (this.data.Watching.indexOf(user._id) > -1) {
          userStatus = {message: "click to unfollow "+user._id, watching: true};
        }
      }
      return (
        <div className="comment" onClick={this.followUser.bind(null, user._id, userStatus.watching)}>
          <a className="avatar">
            <i className="spy icon"></i>
          </a>
          <div className="content">
            <a className="author">{userStatus.message}</a>
          </div>
        </div>
        );
    }.bind(this));
  },
  render() {
    return (
      <div className="ui comments">
        <h3 className="ui dividing header">Users</h3>
        {this.getUsers()}
      </div>
    );
  }
});
