VolunteerButtons = React.createClass({
  propTypes: {
    userid: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired,
    profiletitle: React.PropTypes.string.isRequired
  },
  showButtons(parentid, userid, profileid, profiletype, usertype, profiletitle) {
    console.log('profileid');
    console.log(profileid);

    console.log('showbuttons');
    if (usertype === 'charity' && profiletype === 'developer') {
      console.log('developer charity');
      return <VolunteerStatus
              developerid={profileid}
              charityid={userid}
             />;
    }
    if (usertype === 'developer' && profiletype === 'project') {
      console.log('developer project');
      return (
        <DevButtons
          projecttitle={profiletitle}
          developerid={userid}
          charityid={parentid}
          projectid={profileid}
         />
      );
    }
  },
  render() {
    console.log('this.props.profileid');
    console.log(this.props.profileid);
    return (

      <div id="volunteer buttons">
        {this.showButtons(this.props.parentid, this.props.userid,
            this.props.profileid, this.props.profiletype, this.props.usertype,this.props.profiletitle)}
      </div>
    );
  }
});
