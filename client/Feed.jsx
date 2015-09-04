Feed = React.createClass({
  propTypes: {
    watchedposts: React.PropTypes.array
  },
  componentDidMount() {
    $("body").animate({ scrollTop: $("#feedContainer").height() }, 1000);
  },
  componentDidUpdate() {
    $("body").animate({ scrollTop: $("#feedContainer").height() }, 1000);
  },
  Feeds() {
    return _.map(this.props.watchedposts, function(post) {
      return <Post
              postId={post._id}
              user={post.userId}
              date={post.createdAt}
              text={post.data.text}
              />;
    });
  },
  render() {
    return (
      <div id="feedContainer">
        {this.Feeds()}
      </div>
    );
  }
});
