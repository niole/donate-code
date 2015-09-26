VolunteerButton = React.createClass({
  mixins: [AddDeveloperMixin],
  propTypes: {
    developerid: React.PropTypes.string.isRequired,
    charityid: React.PropTypes.string.isRequired,
    projectid: React.PropTypes.string.isRequired,
    projectname: React.PropTypes.string.isRequired
  },
  addToPending(developerid, charityid, projectid, projectname) {
    event.preventDefault();
    //add via mixin
    this.addDev(developerid, projectid, charityid, projectname, false);
  },
  render() {
    return (
      <div onClick={this.addToPending.bind(null, this.props.developerid, this.props.charityid, this.props.projectid,
                                                                                this.props.projectname)}>
        Volunteer
      </div>
    );
  }
});
