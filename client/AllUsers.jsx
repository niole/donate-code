AllUsers = React.createClass({
  propTypes: {
    users: React.PropTypes.array
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    var Watching = [];
    if (Meteor.user()) {
      Watching = UsersFeed.findOne({_id: Meteor.userId()}).feeds;
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
      const User = Meteor.users.findOne({_id: user._id});
      var userStatus = {message: User.profile.name, watching: false};
      if (Meteor.user()) {
        userStatus = {message: "click to follow "+User.profile.name, watching: false};
        if (this.data.Watching.indexOf(user._id) > -1) {
          userStatus = {message: "click to unfollow "+User.profile.name, watching: true};
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
  logOut() {
    event.preventDefault();
    AccountsTemplates.logout();
  },
  render() {
    const headerStyle = {padding: ".5em"};
    return (
      <div className="ui comments">
        {Meteor.user() ? <a style={{float: "right"}} href='/' onClick={this.logOut}>logout</a> : <span/>}
        <h3 className="ui dividing header" style={headerStyle}>Users</h3>
        {this.getUsers()}
      </div>
    );
  }
});
