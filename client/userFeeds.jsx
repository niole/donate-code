UserFeeds = React.createClass({
  propTypes: {
    id: React.PropTypes.string
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    var Users = Meteor.users.find({}).fetch();
    var WatchedPosts = [];
    var Feed = [];

    if (Meteor.user()) {
      Feed = UsersFeed.find({_id: Meteor.userId()}).fetch()[0];
      _.forEach(Feed.feeds, function(userId) {
        WatchedPosts = WatchedPosts.concat(
                        UserPosts.find({userId: userId}).fetch()
                        );
      });
      WatchedPosts.sort(function(a, b) {
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        if (a.createdAt < b.createdAt) {
          return 1;
        }
        return 0;
      });
    }

  return {
        UsersFeed: Feed,
        WatchedPosts: WatchedPosts,
        AllUsers: Users
        };
  },
  componentDidMount() {
    const div = document.getElementById('LoginButtons');
    Blaze.renderWithData(Template.loginButtons, {align: 'right'}, div);
  },
  render() {
    const feedStyle = {float: "left", marginLeft: "270px"};
    const buttonStyle = {float: "right"};

     var feed = [];
     if (Meteor.user()) {
       feed.push(<Feed watchedposts={this.data.WatchedPosts}/>);
     }

    return (
      <div>
        <div className="ui left fixed vertical menu">
          <PostNav/>
        </div>
        <div className="ui right fixed vertical menu">
          <button className="ui basic button" style={buttonStyle}>
            <div id="LoginButtons"/>
             <i className="user icon"></i>
          </button>
          <AllUsers users={this.data.AllUsers}/>
        </div>
        <div className="ui comments" style={feedStyle}>
          {feed}
        </div>
      </div>
    );
  }
});
