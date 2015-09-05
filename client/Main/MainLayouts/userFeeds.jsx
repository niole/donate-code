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
  render() {
    const feedStyle = {position: "absolute", left: "40%"};
    const buttonStyle = {float: "right"};
    let feed = [];
    let sideLogo = [];

    if (Meteor.user()) {
      feed.push(<Feed watchedposts={this.data.WatchedPosts}/>);
      sideLogo.push(<Logo/>);
    } else {
      feed.push(<Logo/>);
    }


    return (
      <div>
        <div className="ui left fixed vertical menu">
          <PostNav/>
          {sideLogo}
        </div>
        <div className="ui right fixed vertical menu">
          <span style={buttonStyle}>
            <div id="LoginButtons"/>
          </span>
          <AllUsers users={this.data.AllUsers}/>
        </div>
        <div className="ui comments" style={feedStyle}>
          {feed}
        </div>
        <WatchFooter/>
      </div>
    );
  }
});
