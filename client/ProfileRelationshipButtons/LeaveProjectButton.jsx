LeaveProjectButton = React.createClass({
  mixins: [RemoveDeveloperMixin],
  propTypes: {
    developerid: React.PropTypes.string.isRequired,
    projectid: React.PropTypes.string.isRequired,
    charityid: React.PropTypes.string.isRequired
  },
  leaveProject(developerid, projectid, charityid) {
    event.preventDefault();
    this.removeDev(projectid, developerid, charityid, false);
    this.removeDev(projectid, developerid, charityid, true);
  },
  render() {
    return (
      <button className="ui teal button" onClick={this.leaveProject.bind(null, this.props.developerid, this.props.projectid, this.props.charityid)}>
        Leave Project
      </button>
    );
  }
});
