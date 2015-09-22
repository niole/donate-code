Profile = React.createClass({
  propTypes: {
    profiletype: React.PropTypes.string.isRequired,
    userid: React.PropTypes.string.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    let userData;
    let res;
    Tracker.autorun(function() {
      console.log(Meteor.status());
      let serverConnection = Meteor.status();
        switch (this.props.profiletype) {
          case 'developer':
            userData = Developers.find({devId: this.props.userid}).fetch();
            break;
          case 'charity':
            userData = Charities.find({charityId: this.props.userid}).fetch();
            break;
          case 'project':
            console.log('still need to handle project case');
            break;
        }
      if (serverConnection.retryCount < 1) {
        console.log('inside retry <1');
        res = userData[0];
      } else {
        console.log(serverConnection.retryTime);
      //  setTimeout(Meteor.reconnect(), serverConnection.retryTime - (new Date()).getTime());
      }
    }.bind(this));
    if (res) {
      return res;
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
