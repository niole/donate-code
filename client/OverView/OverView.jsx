OverView = React.createClass({
  propTypes: {
    profiledata: React.PropTypes.object.isRequired,
    userid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <span>
        <div className="short-views">
          <div className="profiletitle-view inline">
            <h1 id="profile-title">{this.props.profiledata.name}</h1>
            <VolunteerButtons
              userid={this.props.userid}
              profileid={this.props.profileid}
              parentid={this.props.parentid}
              profiletype={this.props.profiletype}
              usertype={this.props.usertype}
              profiletitle={this.props.profiledata.name}
            />
          </div>
          <Links
            linkdata={this.props.profiledata.links}
            userid={this.props.userid}
            parentid={this.props.parentid}
            profileid={this.props.profileid}
            usertype={this.props.usertype}
            profiletype={this.props.profiletype}
           />
          <Skills
            parentid={this.props.parentid}
            userid={this.props.userid}
            profileid={this.props.profileid}
            usertype={this.props.usertype}
            profiletype={this.props.profiletype}
            skilldata={this.props.profiledata.skills}
          />
        </div>
        <Description
          parentid={this.props.parentid}
          userid={this.props.userid}
          profileid={this.props.profileid}
          usertype={this.props.usertype}
          profiletype={this.props.profiletype}
          description={this.props.profiledata.description}
        />
      </span>
    );
  }
});
