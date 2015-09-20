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
      <div className="over-views">
        {this.displaySkills(this.props.skilldata)}
      </div>
    );
  }
});

