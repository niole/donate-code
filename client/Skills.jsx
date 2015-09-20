Skills = React.createClass({
  propTypes: {
    skilldata: React.PropTypes.object.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  displaySkills(skills) {
    return _.map(skills, skill => {
      return <div>{skill}</div>;
    });
  },
  render() {
    return (
      <div id="skills-section" className="over-views">
        <div className="inline">
          <h1>Skills</h1>
          {(this.props.usertype === this.props.profiletype) ?
            <div id="skills-edit" className="edit tiny-label">edit</div> : <span/>}
        </div>

        {this.displaySkills(this.props.skilldata)}
      </div>
    );
  }
});

