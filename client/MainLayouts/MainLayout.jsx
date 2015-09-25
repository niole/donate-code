MainLayout = React.createClass({
  propTypes: {
    dd: React.PropTypes.bool.isRequired
  },
  LogOut() {
    event.preventDefault();
    AccountsTemplates.logout();
  },
  render() {
    return (
      <div>
        <div className="ui secondary  menu">
          <a className="item">
            Home
          </a>
          <a className="item">
            Messages
          </a>
          <div className="right menu">
            <div className="item">
              <SearchBox
                dd={this.props.dd}
              />
            </div>
            <a className="ui item" onClick={this.LogOut}>
              Logout
            </a>
          </div>
        </div>
        {this.props.content}
      </div>
    );
  }
});
