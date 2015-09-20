TitleToggle = React.createClass({
  propTypes: {
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return { menuToggle: [true, false]};
  },
  Toggle(pos) {
    this.setState({menuToggle:
      _.map(_.range(2), i => {
        if (i === pos) {
          return true;
        }
        return false;
      })
    });
  },
  displayToggle(profiletype, usertype) {
    if (profiletype === 'developer' || profiletype === 'project') {
      return (
        <div className="ui secondary pointing menu">
          <a className={this.state.menuToggle[0] ? "active item" : "item"}
            onClick={this.state.menuToggle[1] ? this.Toggle.bind(null,0) : null}>
            active
          </a>
          <a className={this.state.menuToggle[1] ? "active item" : "item"}
            onClick={this.state.menuToggle[0] ? this.Toggle.bind(null,1) : null}>
            pending
          </a>
        </div>
      );
    }
    if (profiletype === 'charity') {
      return (
        <span>
          <h1 id="project-toggle">Projects</h1>
          {(usertype === 'charity') ? <div className="tiny-label">edit</div> : <span/>}
        </span>
      );
    }
  },
  render() {
    return (
      <div className="title-toggle">
        {this.displayToggle(this.props.profiletype, this.props.usertype)}
      </div>
    );
  }
});
