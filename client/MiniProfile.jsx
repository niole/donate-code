MiniProfile = React.createClass({
  propTypes: {
    profiledata: React.PropTypes.object.isRequired
  },
  render() {
    return (
        <div>
          <div className="profile-img-container">
            <img src={this.props.profiledata.image}/>
          </div>
          <p className="miniprofile-title">{this.props.profiledata.name}</p>
        </div>
    );
  }
});
