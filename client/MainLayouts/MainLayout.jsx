MainLayout = React.createClass({
  LogOut() {
    event.preventDefault();
    AccountsTemplates.logout();
  },
  goHome() {
    event.preventDefault();
    let userId = Meteor.userId();
    let dev = Developers.find({ _id: userId }).fetch();
    let charity = Charities.find({ _id: userId }).fetch();
    if (dev.length > 0) {
      FlowRouter.go('/profile/developer/'+userId+'/0');
    }
    if (charity.length > 0) {
      FlowRouter.go('/profile/charity/'+userId+'/0');
    }
  },
  render() {
    return (
      <div>
        <div className="ui secondary  menu">
          <a className="item" onClick={this.goHome}>
            Home
          </a>
          <a className="item">
            Messages
          </a>
          <div className="right menu">
            <div className="item">
              <SearchBox/>
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
