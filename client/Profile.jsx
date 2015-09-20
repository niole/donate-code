Profile = React.createClass({
  render() {
    let containerStyle = {height: $(window).height()};
    return (
      <div className="app-container" style={containerStyle}>

        <div className="first one-third-panel">
          <div className="profile-img-container">
            Profile Img
          </div>
          <div className="profile-feed-container">
            <div className="title-toggle">
              title toggle
            </div>
             and user feed thing
          </div>
        </div>
        <div className="second two-third-panel">
          <div className="short-views">
            <div className="over-views">
              about sections
            </div>
            <div className="over-views">
              about sections
            </div>
          </div>
          <div className="over-views">
            about sections
          </div>
        </div>
      </div>
    );
  }
});
