RemoveDev = React.createClass({
  mixins: [RemoveDeveloperMixin],
  propTypes: {
    text: React.PropTypes.string.isRequired,
    projectname: React.PropTypes.string.isRequired,
    projectid: React.PropTypes.string.isRequired,
    developerid: React.PropTypes.string.isRequired,
    charityid: React.PropTypes.string.isRequired,
    accepted: React.PropTypes.bool.isRequired
  },
  render() {
    return (
      <button className="ui button inline" onClick={this.removeDev.bind(null, this.props.projectid, this.props.developerid,
                                                this.props.charityid, this.props.accepted)}>
        <span>{this.props.text}</span>
        <span>{this.props.projectname}</span>
      </button>
    );
  }
});
