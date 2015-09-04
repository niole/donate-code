Logo = React.createClass({
  render() {
    const headerStyle = {padding: ".5em"};
    let logoStyle;
    if (Meteor.user()) {
      logoStyle = {marginTop: "50px"};

    } else {
      logoStyle = {position: "absolute",
                   left: "40%",
                   top: "30%"};

    }
    return (
      <div style={logoStyle}>
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"/>
          Welcome to Feeds
        </h2>
        <h3 className="ui dividing header" style={headerStyle}/>

      </div>
    );
  }
});
