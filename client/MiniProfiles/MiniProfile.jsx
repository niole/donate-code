MiniProfile = React.createClass({
  propTypes: {
    profiledata: React.PropTypes.object.isRequired,
    profiletype: React.PropTypes.object.isRequired,
    userid: React.PropTypes.object.isRequired,
    miniprofid: React.PropTypes.object.isRequired,
    profileid: React.PropTypes.object.isRequired
  },
  showRemoveProfileButton(profileid, userid, profiletype, miniprofid) {
    if (userid === profileid && profiletype === 'charity') {
      return <RemoveProfileButton
              miniprofid={miniprofid}
              userid={userid}
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
          {this.showRemoveProfileButton(this.props.profileid, this.props.userid, this.props.profiletype,
                                                                                 this.props.miniprofid)}
        </div>
    );
  }
});
