MainLayout = React.createClass({
  LogOut() {
    event.preventDefault();
    AccountsTemplates.logout();
    FlowRouter.go('/');
  },
  goHome() {
    event.preventDefault();
    let userid = Meteor.userId();
    this.gleanProfile(userid);
  },
  gleanProfile(userid) {
    let id = {_id: userid};
    let dev = Developers.findOne(id);
    let charity = Charities.findOne(id);
    if (dev) {
      FlowRouter.go('/profile/developer/'+userid+'/0');
    } else {
      if (charity) {
        FlowRouter.go('/profile/charity/'+userid+'/0');
      }
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
