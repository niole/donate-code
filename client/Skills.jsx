Skills = React.createClass({
  propTypes: {
    skilldata: React.PropTypes.array.isRequired,
    userid: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  removeSkill(index, type, skills, user, profile) {
    let updateSkills;
    if (user === profile) {
      if (index < skills.length) {
        updateSkills = skills.slice(0,index).concat(skills.slice(index+1,skills.length));
        console.log(skills.slice(0,index));
        console.log(updateSkills);
      } else {
        console.error('you are trying to delete something thats not in the skill array');
      }
      if (type === 'project') {
        //update some data
      }
      if (type === 'charity') {
        if (updateSkills) {
          Charities.update(
             { _id: this.props.userid },
             { $set: {"profile.skills": updateSkills }}
          );
        }
      }
      if (type === 'developer') {
        if (updateSkills) {
          Developers.update(
             { _id: this.props.userid },
             { $set: {"profile.devSkills": updateSkills }}
          );
        }
      }
    }
  },
  displaySkills(skills, type, user, profile) {
    return _.map(skills, (skill,i) => {
        return (
          <a className="ui label" onClick={this.removeSkill.bind(null,i, type, skills, user, profile)}>
            {skill}
            <i className="delete icon"></i>
          </a>
        );
      });
  },
  render() {
    console.log(this.props.userid);
    return (
      <div id="skills-section" className="over-views">
        <div className="inline">
          <h1>Skills</h1>
          <EditButton
            id={this.props.id}
            profileid={this.props.profileid}
            userid={this.props.userid}
            usertype={this.props.usertype}
            profiletype={this.props.profiletype}
            componenttype={'skills'}
            text={null}
          />
          <br/>
        </div>

        {this.displaySkills(this.props.skilldata, this.props.profiletype, this.props.userid, this.props.profileid)}
      </div>
    );
  }
});

