VolunteerStatus = React.createClass({
  propTypes: {
    developerid: React.PropTypes.string.isRequired,
    charityid: React.PropTypes.string.isRequired
  },
  showStatus(developerid, charityid) {
    //get all associations in miniProfiles.developers with developer id
    let charity = Charities.findOne( {_id: charityid},
                                   { "miniProfiles.developers": {
                                      $elemMatch: { devId: developerid }}});
    if (charity) {
      return _.map(charity.miniProfiles.developers, project => {
        console.log('project infomration from dveloper array in charites');
        console.log(project);
        if (project.accepted) {
          return <RemoveDev
                  text={'remove from '}
                  projectname={project.projectName}
                  projectid={project.projectId}
                  developerid={project.devId}
                  charityid={charityid}
                  accepted={project.accepted}
                 />;
        } else {
          return (
                <div className="inline">
                  <RemoveDev
                    text={'reject from '}
                    projectname={project.projectName}
                    projectid={project.projectId}
                    developerid={project.devId}
                    charityid={charityid}
                    accepted={project.accepted}
                   />
                  <AcceptDev
                    text={'add to '}
                    projectname={project.projectName}
                    projectid={project.projectId}
                    developerid={project.devId}
                    charityid={charityid}
                  />
               </div>
          );
        }
      });
    }
  },
  render() {
    return (
      <div id="volunteer-status" className="inline">
        {this.showStatus(this.props.developerid, this.props.charityid)}
      </div>
    );
  }
});
