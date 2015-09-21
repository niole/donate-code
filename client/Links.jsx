Links = React.createClass({
  propTypes: {
    linkdata: React.PropTypes.array.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  displayLinks(data) {
    if (data.length > 0) {
      return _.map(data, link => {
        return <a href={link}>{link}</a>;
      });
    }
    return <p>add a link</p>;
  },
  render() {
    return (
      <span>
        <div id="link-section" className="over-views">
          <div className="inline">
            <h1>Links</h1>
            <EditButton
              id={this.props.id}
              usertype={this.props.usertype}
              profiletype={this.props.profiletype}
              componenttype={'links'}
              text={null}
            />
          </div>

          {this.displayLinks(this.props.linkdata)}
        </div>
      </span>
    );
  }
});

