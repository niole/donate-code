Feed = React.createClass({
  propTypes: {
    watchedposts: React.PropTypes.array
  },
  Feeds() {
    return _.map(this.props.watchedposts, function(post) {
      return <Post
              user={post.userId}
              date={post.createdAt}
              text={post.data.text}
              />;
    });
  },
  render() {
    return (
      <span>
        <h3 className="ui dividing header">Watching</h3>
        {this.Feeds()}
      </span>
    );
  }
});
