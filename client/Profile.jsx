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
    }
    return userData;
  },
  render() {
    let containerStyle = {height: $(window).height()};
    return (
      <div className="app-container" style={containerStyle}>

        <div className="first one-third-panel">
          <ProfileImage profileimg={this.data.profile.image}/>
          <div className="profile-feed-container">
            <div className="title-toggle">
              title toggle
            </div>
             and user feed thing
          </div>
        </div>

        <div className="second two-third-panel">
          <div className="short-views">
            <div className="over-views">
              about sections
            </div>
            <div className="over-views">
              about sections
            </div>
          </div>
          <div className="over-views">
            about sections
          </div>
        </div>
      </div>
    );
  }
});
