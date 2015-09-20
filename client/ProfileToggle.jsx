ProfileToggle = React.createClass({
  propTypes: {
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired,
    userData: React.PropTypes.object.isRequired
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
      let headerText;
      if (profiletype === 'developer') {
        headerText = 'Projects';
      } else {
        headerText = 'Developers';
      }
      return (
        <span>
          <h1>{headerText}</h1>
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
        </span>
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
      <span>
        <div className="title-toggle">
          {this.displayToggle(this.props.profiletype, this.props.usertype)}
        </div>
        <MiniProfiles
        profiledata={this.props.userData.miniProfiles}
        activeprofile={this.state.menuToggle[0]}
        profiletype={this.props.profiletype}
        />
      </span>

    );
  }
});
