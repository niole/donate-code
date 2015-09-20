Profile = React.createClass({
  propTypes: {
    usertype: React.PropTypes.string.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    let userData;
      switch (this.props.usertype) {
        case 'developer':
          userData = Developers.findOne({devId: Meteor.userId()});
          break;
        case 'charity':
          userData = Charities.findOne({charityId: Meteor.userId()});
          break;
        case 'project':
          console.log('still need to handle project case');
          break;
      }
    ;
    return userData;
  },
  render() {
    let containerStyle = {height: $(window).height()};
    return (
      <div className="app-container" style={containerStyle}>

        <div className="first one-third-panel">
          <ProfileImage profileimg={this.data.profile.image}/>
          <div className="profile-feed-container">
            <ProfileToggle
              profiletype={this.props.usertype}
              usertype={this.props.usertype}
              userData={this.data}
            />
          </div>
        </div>

        <div className="second two-third-panel">
          <OverView
            profiledata={this.data.profile}
            profiletype={this.props.usertype}
            usertype={this.props.usertype}
          />
        </div>
      </div>
    );
  }
});
