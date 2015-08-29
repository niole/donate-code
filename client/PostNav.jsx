PostNav = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      feeds: UsersFeed.find({}).fetch()
    };
  },
  render() {
    const sideStyle = {top: "80px"};
    return (
      <div className="ui left visible sidebar" style={sideStyle}>

        <form className="ui reply form">
          <div className="field">
            <textarea ref="postText"></textarea>
          </div>
          <div className="ui blue labeled submit icon button" onClick={this.postIt}>
            <i className="icon edit"></i> Post it
          </div>
        </form>

      </div>
    );
  },
  postIt(e) {
    e.preventDefault();
    const postText = this.refs.postText.getDOMNode().value;
    //stick in person's feed
    console.log('postText');
    console.log(postText);
    if (Meteor.user()) {
      //finish this insert tomorrow!!!!!
    }
  }
});
