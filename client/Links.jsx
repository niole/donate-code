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
            {(this.props.usertype === this.props.profiletype) ?
              <div id="link-edit" className="edit tiny-label">edit</div> : <span/>}
          </div>

          {this.displayLinks(this.props.linkdata)}
        </div>
      </span>
    );
  }
});

