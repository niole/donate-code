VolunteerButtons = React.createClass({
  propTypes: {
    userid: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  showButtons(parentid, userid, profileid, profiletype, usertype) {
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
    }
  },
  render() {
    return (
      <div id="volunteer buttons">
        {this.showButtons(this.props.parentid, this.props.userid,
            this.props.profileid, this.props.profiletype, this.props.usertype)}
      </div>
    );
  }
});
