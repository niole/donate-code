MiniProfile = React.createClass({
  propTypes: {
    profiledata: React.PropTypes.object.isRequired,
    profiletype: React.PropTypes.object.isRequired,
    parentid: React.PropTypes.object.isRequired,
    userid: React.PropTypes.object.isRequired,
    profileid: React.PropTypes.object.isRequired
  },
  showRemoveProfileButton(profileid, parentid, userid, profiletype) {
    if (userid === profileid || parentid === userid) {
      return <RemoveProfileButton
              profileid={profileid}
              parentid={parentid}
              userid={userid}
              profiletype={profiletype}
              />;
    }
  },
  render() {
    return (
        <div>
          <a className="profile-img-container" href={this.props.profiledata.profileurl}>
            <img src={this.props.profiledata.image}/>
          </a>
          <p className="miniprofile-title">{this.props.profiledata.name}</p>
          {this.showRemoveProfileButton(this.props.profileid, this.props.parentid,
                                        this.props.userid, this.props.profiletype)}
        </div>
    );
  }
});
