OverView = React.createClass({
  propTypes: {
    profiledata: React.PropTypes.object.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <span>
        <div className="short-views">
          <Links
            linkdata={this.props.profiledata.links}
            usertype={this.props.usertype}
            profiletype={this.props.profiletype}
           />
          <Skills
            usertype={this.props.usertype}
            profiletype={this.props.profiletype}
            skilldata={this.props.profiledata.skills}
          />
        </div>
        <Description
          usertype={this.props.usertype}
          profiletype={this.props.profiletype}
          description={this.props.profiledata.description}
        />
      </span>
    );
  }
});
