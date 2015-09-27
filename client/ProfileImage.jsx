ProfileImage = React.createClass({
  propTypes: {
    profileid: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired,
    userid: React.PropTypes.string.isRequired,
    profileimg: React.PropTypes.array.isRequired
  },
  render() {
    return (
      <div className="profile-img-container">
        <img src={this.props.profileimg[0]}/>
      </div>
    );
  }
});
