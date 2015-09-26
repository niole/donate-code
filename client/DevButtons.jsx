DevButtons = React.createClass({
  propTypes: {
    developerid: React.PropTypes.string.isRequired,
    charityid: React.PropTypes.string.isRequired,
    projecttitle: React.PropTypes.string.isRequired,
    projectid: React.PropTypes.string.isRequired
  },
  onProject(developerid, projectid, charityid) {
    let charity = Charities.findOne( {_id: charityid} );

    for (let i=0; i < charity.miniProfiles.developers.length; i++) {
      let request = charity.miniProfiles.developers[i];
      if (request.devId === developerid && request.projectId === projectid) {
        return true;
      }
    }
    return false;
  },
  showButton(developerid, projectid, charityid, projecttitle) {
    let involved = this.onProject(developerid, projectid, charityid);
    if (involved) {
      return <LeaveProjectButton
              developerid={developerid}
              projectid={projectid}
              charityid={charityid}
             />;
    }
    return <VolunteerButton
            developerid={developerid}
            charityid={charityid}
            projectid={projectid}
            projectname={projecttitle}
           />;
  },
  render() {
    return (
      <div>
        {this.showButton(this.props.developerid, this.props.projectid, this.props.charityid,
                                                                    this.props.projecttitle)}
      </div>
    );
  }
});
