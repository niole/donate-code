RemoveProfileButton = React.createClass({
  mixins: [RemoveProjectMixin],
  propTypes: {
    userid: React.PropTypes.string.isRequired,
    miniprofid: React.PropTypes.string.isRequired
  },
  removeProfile(charityid, projectid) {
    event.preventDefault();
    //for now, only works for charities and projects
    this.removeProject(charityid, projectid);
  },
  render() {
    return (
      <i className="remove icon"
          onClick={this.removeProfile.bind(null, this.props.userid, this.props.miniprofid)}></i>
    );
  }
});
