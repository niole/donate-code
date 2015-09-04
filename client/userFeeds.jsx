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
      Feed = UsersFeed.findOne({_id: Meteor.userId()});
      _.forEach(Feed.feeds, function(userId) {
        WatchedPosts = WatchedPosts.concat(
                        UserPosts.find({userId: userId}).fetch()
                        );
      });
      WatchedPosts.sort(function(a, b) {
        return a.createdAt - b.createdAt;
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
    Blaze.renderWithData(Template.atForm, {align: 'right'}, div);
  },
  HomePage() {
    var image = <i className="circular users icon"></i>;
    return ([
      <h2 className="ui center aligned icon header">
        {image}
        Welcome to Feed
      </h2>
     ]);
  },
  render() {
    const feedStyle = {float: "left", marginLeft: "270px"};
    const buttonStyle = {float: "right"};
    const headerStyle = {padding: ".5em"};
    var feed = [];
    if (Meteor.user()) {
      feed.push(<Feed watchedposts={this.data.WatchedPosts}/>);
    }

    return (
      <div>
        <div className="ui left fixed vertical menu">
          <PostNav/>
          {this.HomePage()}
        </div>
        <div className="ui right fixed vertical menu">
          <span style={buttonStyle}>
            <div id="LoginButtons"/>
          </span>
          <AllUsers users={this.data.AllUsers}/>
        </div>
        <div className="ui comments" style={feedStyle}>
          {feed}
          <h3 className="ui dividing header" style={headerStyle}/>
          <h3 className="ui dividing header" style={headerStyle}>Watching</h3>
        </div>
      </div>
    );
  }
});
