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
  displayButton(text, projectid, developerid, charityid, projectname, accepted) {
    return
        <div onClick={this.removeDev.bind(null, projectid, developerid, charityid, accepted)}>
          <span>{text}</span>
          <span>{projectname}</span>
         </div>;
  },
  render() {
    return (
      <div>
        {this.displayButton(this.props.text, this.props.projectid, this.props.developerid,
                              this.props.charityid, this.props.projectname, this.props.accepted)}
      </div>
    );
  }
});
