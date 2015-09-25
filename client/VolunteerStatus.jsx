VolunteerStatus = React.createClass({
  propTypes: {
    developerid: React.PropTypes.string.isRequired,
    charityid: React.PropTypes.string.isRequired
  },
  showStatus(developerid, charityid) {
    //get all associations in miniProfiles.developers with developer id
    let projects = Charities.find( {_id: charityid},
                                   { "miniProfiles.developers": {
                                      $elemMatch: { devId: developerid }}}).fetch();
    if (projects.length > 0) {
      return _.map(projects, project => {
        if (project.accepted) {
          return <RemoveDev
                  text={'remove from '}
                  projectname={project.projectName}
                  projectid={project.projectId}
                  developerid={developerid}
                  charityid={charityid}
                  accepted={project.accepted}
                 />;
        } else {
          return (
                <div>
                  <AcceptDev
                    text={'add to '}
                    projectname={project.projectName}
                    projectid={project.projectId}
                    developerid={developerid}
                    charityid={charityid}
                  />
                  <RemoveDev
                    text={'reject from '}
                    projectname={project.projectName}
                    projectid={project.projectId}
                    developerid={developerid}
                    charityid={charityid}
                    accepted={project.accepted}
                   />
               </div>
          );
        }
      });
    }
  },
  render() {
    return (
      <div id="volunteer-status">
        {this.showStatus(this.props.developerid, this.props.charityid)}
      </div>
    );
  }
});
