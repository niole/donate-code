Skills = React.createClass({
  propTypes: {
    skilldata: React.PropTypes.array.isRequired,
    parentid: React.PropTypes.string.isRequired,
    userid: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  removeSkill(index, type, skills, user, profile, parent) {
    let updateSkills;
    if (index < skills.length) {
      updateSkills = skills.slice(0,index).concat(skills.slice(index+1,skills.length));
    } else {
      console.error('you are trying to delete something thats not in the skill array');
    }
    if (type === 'project') {
      //update some data
      if (updateSkills && user === parent) {
        Projects.update(
           { _id: profile },
           { $set: {"profile.skills": updateSkills }}
        );
      }
    }
    if (type === 'charity') {
      if (updateSkills && user === profile) {
        Charities.update(
           { _id: user },
           { $set: {"profile.skills": updateSkills }}
        );
      }
    }
    if (type === 'developer' && user === profile) {
      if (updateSkills) {
        Developers.update(
           { _id: user },
           { $set: {"profile.skills": updateSkills }}
        );
      }
    }
  },
  displaySkills(skills, profiletype, userid, profileid, parentid) {
    return _.map(skills, (skill,i) => {
        return (
          <a className="ui label" onClick={this.removeSkill.bind(null,i, profiletype, skills, userid,
                                                                                profileid, parentid)}>
            {skill}
            <i className="delete icon"></i>
          </a>
        );
      });
  },
  render() {
    return (
      <div id="skills-section" className="uppersection-views">
        <div className="inline">
          <h1>Skills</h1>
          <EditButton
            id={this.props.id}
            profileid={this.props.profileid}
            parentid={this.props.parentid}
            userid={this.props.userid}
            usertype={this.props.usertype}
            profiletype={this.props.profiletype}
            componenttype={'skills'}
            text={null}
          />
          <br/>
        </div>
        <div className="ui raised segment details-container">
          {this.displaySkills(this.props.skilldata, this.props.profiletype,
              this.props.userid, this.props.profileid, this.props.parentid)}
        </div>
      </div>
    );
  }
});

