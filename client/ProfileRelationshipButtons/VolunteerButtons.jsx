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
    if (usertype === 'charity' && profiletype === 'developer') {
      return <VolunteerStatus
              developerid={profileid}
              charityid={userid}
             />;
    }
    if (usertype === 'developer' && profiletype === 'project') {
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
    return (

      <div id="volunteer buttons" className="inline">
        {this.showButtons(this.props.parentid, this.props.userid,
            this.props.profileid, this.props.profiletype, this.props.usertype,this.props.profiletitle)}
      </div>
    );
  }
});
