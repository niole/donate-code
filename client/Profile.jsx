Profile = React.createClass({
  propTypes: {
    profiletype: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return { userid: Meteor.userId() };
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    let userData;
    let usertype;
    Meteor.status()
    console.log('runs getMeteorData');
    let serverConnection = Meteor.status();
    console.log(serverConnection.connected);
    if (serverConnection.connected) {
      let charity = Charities.find({_id : this.state.userid}).fetch();
      let dev = Developers.find({_id : this.state.userid}).fetch();
      if (charity.length > 0) {
        usertype = 'charity';
      } else {
        usertype = 'developer';
      }
      switch (this.props.profiletype) {
        case 'developer':
          if (serverConnection.retryCount < 1) {
            userData = Developers.find({_id: this.props.profileid}).fetch();
            return { userData: userData[0], userType: usertype };
          }
          break;
        case 'charity':
          if (serverConnection.retryCount < 1) {
            userData = Charities.find({_id: this.props.profileid}).fetch();
            return { userData: userData[0], userType: usertype };
          }
          break;
        case 'project':
          if (serverConnection.retryCount < 1) {
            userData = Projects.find({_id: this.props.profileid}).fetch();
            return { userData: userData[0], userType: usertype };
          }
          break;
      }
    }
    return { userData: null, userType: null };
  },
  componentDidMount() {
    if (!Meteor.user()) {
    //  FlowRouter.go('/');
    }
  },
  render() {
    let containerStyle = {height: $(window).height()};
      if (this.data.userData) {
        return (
          <div className="app-container" style={containerStyle}>
            <div className="first one-third-panel">
              <ProfileImage
                profileimg={this.data.userData.profile.image}
                profileid={this.props.profileid}
                parentid={this.props.parentid}
                userid={this.state.userid}
               />
              <div className="profile-feed-container">

                <ProfileToggle
                  profiletype={this.props.profiletype}
                  profileid={this.props.profileid}
                  parentid={this.props.parentid}
                  userid={this.state.userid}
                  userData={this.data.userData}
                />
              </div>
            </div>

            <div className="second two-third-panel">
              <OverView
                profiledata={this.data.userData.profile}
                profiletype={this.props.profiletype}
                usertype={this.data.userType}
                profileid={this.props.profileid}
                parentid={this.props.parentid}
                userid={this.state.userid}
              />
            </div>
          </div>
        );
      } else {
        return <p>loading</p>;
      }
  }
});
