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
    Meteor.status()
    let serverConnection = Meteor.status();
    console.log(serverConnection.connected);
    if (serverConnection.connected) {
      console.log('connected');
      switch (this.props.profiletype) {
        case 'developer':
          if (serverConnection.retryCount < 1) {
            userData = Developers.find({_id: this.props.profileid}).fetch();
            console.log(userData[0].charityId);
            return { userData: userData[0]};
          }
          break;
        case 'charity':
          if (serverConnection.retryCount < 1) {
            userData = Charities.find({_id: this.props.profileid}).fetch();
            return { userData: userData[0]};
          }
          break;
        case 'project':
          if (serverConnection.retryCount < 1) {
            userData = Projects.find({_id: this.props.profileid}).fetch();
            console.log(userData[0]);
            console.log(userData[0].charityId);
            return { userData: userData[0]};
          }
          break;
      }
    }
    return { userData: null };
  },
  componentDidMount() {
    if (!Meteor.user()) {
    //  FlowRouter.go('/');
    }
  },
  render() {
    console.log('this.state.userid');
    console.log(this.state.userid);
    let containerStyle = {height: $(window).height()};
      if (this.data.userData) {
        console.log(this.state.userid);

        return (
          <div className="app-container" style={containerStyle}>

            <div className="first one-third-panel">
              <ProfileImage profileimg={this.data.userData.profile.image}/>
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
