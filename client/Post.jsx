Post = React.createClass({
  propTypes: {
    postId: React.PropTypes.string,
    user: React.PropTypes.string,
    text: React.PropTypes.string,
    date: React.PropTypes.number
  },
  getInitialState() {
    return { reply: false };
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      Replies: Replies.find({postId: this.props.postId}).fetch()
    };
  },
  editImg() {
    event.preventDefault();
    console.log('editimg');
  },
  addReply() {
    event.preventDefault();
    const replyText = this.refs.replytext.getDOMNode().value.trim();
    console.log('reply');
    console.log(replyText);
    Replies.insert({
        postId: this.props.postId,
        userId: Meteor.userId(),
        reply: {
          text: replyText
        }
    });
  },
  displayReplies() {
    return _.map(this.data.Replies, function(reply) {
      return <li>{reply.reply.text}</li>;
    });
  },
  showReplyBox() {
    event.preventDefault();
    this.setState({reply: true});
  },
  render() {
    var replies = [];
    return (
      <div className="comment">
        <a className="avatar" onClick={this.editImg}>
          {Meteor.userId() ? Meteor.user().image ||
          <i className="child icon"></i> :
          <i className="child icon"></i>}
        </a>
        <div className="content">
          <a className="author">{this.props.user}</a>
          <div className="metadata">
            <span className="date">{this.props.date}</span>
          </div>
          <div className="text">
            <p>{this.props.text}</p>
          </div>
          <div className="actions">
            {this.state.reply ?
            <span>
              <a className="reply" onClick={this.addReply}>Reply</a>
              <div className="ui form">
                <div className="field">
                  <textarea rows="2" ref="replytext"></textarea>
                </div>
              </div>
             </span> :
            <a className="reply" onClick={this.showReplyBox}>Reply</a>
            }
            <ul>
              {this.displayReplies()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});
