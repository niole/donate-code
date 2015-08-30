PostNav = React.createClass({
  render() {
    const sideStyle = {top: "80px"};
    return (
        <form className="ui reply form">
          <div className="field">
            <textarea ref="postText"></textarea>
          </div>
          <div className="ui blue labeled submit icon button" onClick={this.postIt}>
            <i className="icon edit"></i> Post it
          </div>
        </form>
    );
  },
  postIt(e) {
    e.preventDefault();
    const postText = this.refs.postText.getDOMNode().value;
    if (Meteor.user()) {
      let d = new Date();
      const t = d.getTime();
      UserPosts.insert({userId: Meteor.userId(),
                        createdAt: t,
                        data: {text: postText}});
    }
  }
});
