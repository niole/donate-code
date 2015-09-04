Feed = React.createClass({
  propTypes: {
    watchedposts: React.PropTypes.array
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
    const headerStyle = {padding: ".5em"};
    return (
      <span>
        <h3 className="ui dividing header" style={headerStyle}>Watching</h3>
        {this.Feeds()}
      </span>
    );
  }
});
