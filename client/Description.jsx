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
      <div className="over-views">
        {this.displayDescription(this.props.description)}
      </div>
    );
  }
});

