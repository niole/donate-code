MiniProfile = React.createClass({
  propTypes: {
    profiledata: React.PropTypes.object.isRequired,
    profiletype: React.PropTypes.object.isRequired,
    profileid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired
  },
  render() {
    return (
        <div>
          <a className="profile-img-container" href={"/profile/"+this.props.profiletype+"/"+
                          this.props.profileid+"/"+this.props.parentid}>
            <img src={this.props.profiledata.image}/>
          </a>
          <p className="miniprofile-title">{this.props.profiledata.name}</p>
        </div>
    );
  }
});
