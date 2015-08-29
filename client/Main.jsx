Main = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
            userData: Meteor.users.find({}).fetch()
           };
  },
  componentDidMount() {
    var div = document.getElementById('LoginButtons');
    Blaze.renderWithData(Template.loginButtons, {align: 'right'}, div);
    if (Meteor.user()) {
      FlowRouter.go('/'+Meteor.userId());
    }
  },
  getFeeds() {
    return _.map(this.data.userData, function(user) {
      return <option value={user.email}>{user}</option>;
      });
  },
  render() {

    return (
      <span>
        <header>
          <div className="ui pointing menu">
            <a className="active item">
              Home
            </a>
            <a className="item">
            <select className="ui search dropdown">
               <option value="">Feeds</option>
              {this.getFeeds()}
            </select>
            </a>
            <div className="right menu">
              <div className="item">
                <div id="LoginButtons"/>
              </div>
            </div>
          </div>
         </header>
         <main>{this.props.content}</main>
         <footer></footer>
      </span>
    );
  }
});
