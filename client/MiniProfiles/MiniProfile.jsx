MiniProfile = React.createClass({
  propTypes: {
    profiledata: React.PropTypes.object.isRequired
  },
  render() {
    return (
        <div>
          <a className="profile-img-container" href={this.props.profiledata.profileurl}>
            <img src={this.props.profiledata.image}/>
          </a>
          <p className="miniprofile-title">{this.props.profiledata.name}</p>
        </div>
    );
  }
});
