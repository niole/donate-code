Description  = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  displayDescription(text) {
    return <p>{text}</p>;
  },
  render() {
    return (
      <div id="bio-section" className="over-views">
        <div className="inline">
          <h1>About</h1>
          {(this.props.usertype === this.props.profiletype) ?
            <div id="bio-edit" className="edit tiny-label">edit</div> : <span/>}
        </div>

        {this.displayDescription(this.props.description)}
      </div>
    );
  }
});

