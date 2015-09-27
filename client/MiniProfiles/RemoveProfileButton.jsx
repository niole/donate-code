RemoveProfileButton = React.createClass({
  propTypes: {
    profileid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired,
    userid: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  removeProfile() {
    event.preventDefault();
    if (parentid !== "0") {
      //parentid is a thiat of a charity, mini profile is developer
      //user is a charity
    } else {
      //mini profile is a project, user is a charity or a developer
    }
  },
  render() {
    return (
      <i className="remove icon"
          onClick={this.removeProfile.bind(null,this.props.profileid, this.props.parentid,
                                           this.props.userid, this.props.profiletype)}></i>
    );
  }
});
