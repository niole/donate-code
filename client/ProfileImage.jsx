ProfileImage = React.createClass({
  propTypes: {
    profileimg: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="profile-img-container">
        <img src={this.props.profileimg}/>
      </div>
    );
  }
});
