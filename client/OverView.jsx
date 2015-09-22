OverView = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
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
            id={this.props.id}
            profiletype={this.props.profiletype}
           />
          <Skills
            id={this.props.id}
            usertype={this.props.usertype}
            profiletype={this.props.profiletype}
            skilldata={this.props.profiledata.skills}
          />
        </div>
        <Description
          id={this.props.id}
          usertype={this.props.usertype}
          profiletype={this.props.profiletype}
          description={this.props.profiledata.description}
        />
      </span>
    );
  }
});
