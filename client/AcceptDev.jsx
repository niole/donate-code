AcceptDev = React.createClass({
  mixins: [RemoveDeveloperMixin, AddDeveloperMixin],
  propTypes: {
    text: React.PropTypes.string.isRequired,
    projectname: React.PropTypes.string.isRequired,
    projectid: React.PropTypes.string.isRequired,
    developerid: React.PropTypes.string.isRequired,
    charityid: React.PropTypes.string.isRequired,
    accepted: React.PropTypes.bool.isRequired
  },
  addDeveloper(developerid, projectid, charityid, projectname, accepted) {
    //removes developer from pending lists
    //then adds developer to accepted lists
    event.preventDefault();
    this.removeDev(projectid, developerid, charityid, false);
    this.addDev(developerid, projectid, charityid, projectname, accepted);
  },
  render() {
    return (
      <div onClick={this.addDeveloper(this.props.developerid, this.props.projectid,
                this.props.charityid, this.props.projectname, this.props.accepted)}>
        {this.props.text}
        {this.props.projectname}
      </div>
    );
  }
});
