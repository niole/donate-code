LoginSignup = React.createClass({
  propTypes: {
    state: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    const div = document.getElementById('LoginButtons');
    Blaze.renderWithData(Template.atForm, {align: 'right'}, div);
    $('#login-container').click( function() {
      let charity = $('#login-container').find("input[value=charity]"),
          developer = $('#login-container').find("input[value=developer]");
      if (developer.is(":checked")) {
        Session.set('userType', 'developer');
      }
      if (charity.is(":checked")) {
        Session.set('userType', 'charity');
      }
    });
  },
  getCheckBoxes(state) {
    if (state === "signUp") {
      return (
        <div id="ui form charity-dev-checkboxes">
          <div className="ui radio checkbox">
            <input type="radio" name="usertypes" value="developer"/>
            <label>Developer</label>
          </div>
          <div id="right-charity-checkbox" className="ui radio checkbox">
            <input type="radio" name="usertypes" value="charity" defaultChecked/>
            <label>Charity</label>
          </div>
        </div>
      );
   }
  },
  render() {
    AccountsTemplates.setState(this.props.state);
    return (
      <div>
        <div id="login-container">
          <div id="LoginButtons"/>
          {(this.props.state === "signIn") ?
            <div className="text-container"><p className="register-text">don't have an account? </p><a href="/signup">register</a></div> :
            <div className="text-container"><p className="register-text">have an account? </p> <a href="/">sign in</a></div>}
          {this.getCheckBoxes(this.props.state)}
        </div>
      </div>
    );
  }
});
