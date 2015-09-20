Skills = React.createClass({
  propTypes: {
    skilldata: React.PropTypes.object.isRequired,
    id: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return { edit: false };
  },
  editMode(mode) {
    event.preventDefault();
    if (this.state.edit) {
      //save text in textarea
      let text = React.findDOMNode(this.refs.skilltext).value;
      if (this.props.profiletype === 'project') {
        //update some data
      }
      if (this.props.profiletype === 'charity') {
      }
      if (this.props.profiletype === 'developer') {
        if (text) {
          Developers.update(
             { _id: this.props.id },
             { $push: {"profile.devSkills": text }}
          );
        }
      }
    }
    this.setState({ edit: mode });
  },
  removeSkill(index, type, skills) {
    let updateSkills;
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
    }
    if (type === 'developer') {
      if (updateSkills) {
        Developers.update(
           { _id: this.props.id },
           { $set: {"profile.devSkills": updateSkills }}
        );
      }
    }
  },
  displaySkills(skills, edit, type) {
    let allSkills = _.map(skills, (skill,i) => {
      return (
        <a className="ui label" onClick={this.removeSkill.bind(null,i, type, skills)}>
          {skill}
          <i className="delete icon"></i>
        </a>
      );
    });

    if (edit) {
      return (
        <span>
          <div className="skill-input ui input">
            <input ref="skilltext" type="text" placeholder="Add a skill"/>
          </div>
          {allSkills}
        </span>
      );
    }
    return allSkills;
  },
  render() {
    let edit = this.state.edit ? 'done' : 'edit';
    return (
      <div id="skills-section" className="over-views">
        <div className="inline">
          <h1>Skills</h1>
          {(this.props.usertype === this.props.profiletype) ?
            <div id="skills-edit" className="edit tiny-label"
              onClick={this.editMode.bind(null, !this.state.edit)}
             >
              {edit}
            </div> :
            <span/>}
            <br/>
        </div>

        {this.displaySkills(this.props.skilldata, this.state.edit, this.props.profiletype)}
      </div>
    );
  }
});

