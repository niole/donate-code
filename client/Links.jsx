Links = React.createClass({
  propTypes: {
    linkdata: React.PropTypes.array.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  displayLinks(data) {
    return _.map(data, link => {
      return <a href={link}>{link}</a>;
    });
  },
  render() {
    return (
      <span>
        <div className="over-views">
          {this.displayLinks(this.props.linkdata)}
        </div>
      </span>
    );
  }
});

