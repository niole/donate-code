MiniProfiles = React.createClass({
  propTypes: {
    activeprofile: React.PropTypes.bool.isRequired,
    profiledata: React.PropTypes.object.isRequired
  },
  displayProfiles(active) {
    if (active) {
      console.log('active');
    } else {
      console.log('pending');
    }
  },
  render() {
    return (
      <div className="miniprofile-container">
         and user feed thing
         {this.displayProfiles(this.props.activeprofile)}
      </div>
    );
  }
});
