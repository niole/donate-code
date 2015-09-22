Profile = React.createClass({
  propTypes: {
    profiletype: React.PropTypes.string.isRequired,
    userid: React.PropTypes.string.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    let userData;
    console.log(Meteor.status());
    let serverConnection = Meteor.status();
      console.log(this.props.profiletype);
      switch (this.props.profiletype) {
        case 'developer':
          console.log('inside dev');
          userData = Developers.find({devId: this.props.userid}).fetch();
          break;
        case 'charity':
          console.log('inside charity');
          userData = Charities.find({charityId: this.props.userid}).fetch();
          break;
        case 'project':
          console.log('still need to handle project case');
          break;
      }
    console.log(userData);
    if (serverConnection.retryCount < 1) {
      return userData[0];
    } else {
      setTimeout(Meteor.reconnect(), serverConnection.retryTime - (new Date()).getTime());
//      Meteor.reconnect();
    }
  },
  componentDidMount() {
    console.log('componentdid moun');
    if (!Meteor.user()) {
      FlowRouter.go('/');
    }
  },
  render() {
    let containerStyle = {height: $(window).height()};
//    if (this.data.length > 0) {
      return (
        <div className="app-container" style={containerStyle}>

          <div className="first one-third-panel">
            <ProfileImage profileimg={this.data.profile.image}/>
            <div className="profile-feed-container">
              <ProfileToggle
                profiletype={this.props.profiletype}
                usertype={this.props.profiletype}
                userData={this.data}
              />
            </div>
          </div>

          <div className="second two-third-panel">
            <OverView
              id={this.data._id}
              profiledata={this.data.profile}
              profiletype={this.props.profiletype}
              usertype={this.props.profiletype}
            />
          </div>
        </div>
      );
 //   } else {
  //    return <p>shit's loading</p>;
   // }
  }
});
