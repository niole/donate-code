Description  = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div id="bio-section" className="over-views">
        <div className="inline">
          <h1>About</h1>
          <EditButton
          text={this.props.description}
          id={this.props.id}
          usertype={this.props.usertype}
          componenttype={'bio'}
          profiletype={this.props.profiletype}
          />
        </div>
      </div>
    );
  }
});

