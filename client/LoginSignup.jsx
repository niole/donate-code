LoginSignup = React.createClass({
  propTypes: {
    state: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    const div = document.getElementById('LoginButtons');
    Blaze.renderWithData(Template.atForm, {align: 'right'}, div);
  },
  getCheckBoxes() {
    if (this.props.state === "signUp") {
      return (
          <div id="charity-dev-checkboxes">
            <div className="ui checkbox">
              <input type="checkbox" name="example"/>
              <label>Developer</label>
            </div>
            <div id="right-charity-checkbox" className="ui checkbox">
              <input type="checkbox" name="example"/>
              <label>Charity</label>
            </div>
          </div>
      );
   }
  },
  render() {
    return (
      <div>
        <div id="login-container">
          <div id="LoginButtons"/>
          {(this.props.state === "signIn") ?
            <div className="text-container"><p className="register-text">don't have an account? </p><a href="/signup">register</a></div> :
            <div className="text-container"><p className="register-text">have an account? </p> <a href="/">sign in</a></div>}
          {this.getCheckBoxes()}
        </div>
      </div>
    );
  }
});
