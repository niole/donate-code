TitleToggle = React.createClass({
  getInitialState() {
    return { menuToggle: [true, false]};
  },
  propTypes: {
    usertype: React.PropTypes.string.isRequired
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
  displayToggle(usertype) {
    if (usertype === 'developer' || usertype === 'project') {
      console.log('dev');
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
    if (usertype === 'charity') {
      console.log('charity');
    }
  },
  render() {
    return (
      <div className="title-toggle">
        {this.displayToggle(this.props.usertype)}
      </div>
    );
  }
});
