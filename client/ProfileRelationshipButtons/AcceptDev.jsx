AcceptDev = React.createClass({
  mixins: [RemoveDeveloperMixin, AddDeveloperMixin],
  propTypes: {
    text: React.PropTypes.string.isRequired,
    projectname: React.PropTypes.string.isRequired,
    projectid: React.PropTypes.string.isRequired,
    developerid: React.PropTypes.string.isRequired,
    charityid: React.PropTypes.string.isRequired
  },
  addDeveloper(developerid, projectid, charityid, projectname) {
    //removes developer from pending lists
    //then adds developer to accepted lists
    event.preventDefault();
    this.removeDev(projectid, developerid, charityid, false);
    this.addDev(developerid, projectid, charityid, projectname, true);
  },
  render() {
    return (
      <button className="ui positive button inline" onClick={this.addDeveloper.bind(null, this.props.developerid, this.props.projectid,
                this.props.charityid, this.props.projectname)}>
        {this.props.text}
        {this.props.projectname}
      </button>
    );
  }
});
