Profile = React.createClass({
  propTypes: {
    profiletype: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return { userid: Meteor.userId() };
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    let userData;
    let res;
//    Tracker.autorun(function() {
      console.log(Meteor.status());
      let serverConnection = Meteor.status();
        switch (this.props.profiletype) {
          case 'developer':
            if (serverConnection.retryCount < 1) {
              userData = Developers.find({_id: this.props.profileid}).fetch();
              return userData[0];
            }
            break;
          case 'charity':
            if (serverConnection.retryCount < 1) {
              userData = Charities.find({_id: this.props.profileid}).fetch();
              console.log(userData);
              return userData[0];
            }
            break;
          case 'project':
            console.log('still need to handle project case');
            break;
        }
//      if (serverConnection.retryCount < 1) {
//        console.log('inside retry <1');
//        res = userData[0];
//      }
  },
  componentDidMount() {
    console.log('componentdid moun');
    console.log(Meteor.userId());
    if (!Meteor.user()) {
      FlowRouter.go('/');
    }
  },
  render() {
    console.log('this.state.userid');
    console.log(this.state.userid);
    let containerStyle = {height: $(window).height()};
      return (
        <div className="app-container" style={containerStyle}>

          <div className="first one-third-panel">
            <ProfileImage profileimg={this.data.profile.image}/>
            <div className="profile-feed-container">
              <ProfileToggle
                profiletype={this.props.profiletype}
                profileid={this.props.profileid}
                userid={this.state.userid}
                userData={this.data}
              />
            </div>
          </div>

          <div className="second two-third-panel">
            <OverView
              profiledata={this.data.profile}
              profiletype={this.props.profiletype}
              profileid={this.props.profileid}
              userid={this.state.userid}
            />
          </div>
        </div>
      );
  }
});
