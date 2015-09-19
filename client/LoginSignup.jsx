LoginSignup = React.createClass({
  getInitialState() {
    return {state: []};
  },
  componentDidMount() {
    const div = document.getElementById('LoginButtons');
    Blaze.renderWithData(Template.atForm,{}, div);
  },
  render() {
    return (
      <span>
        <div id="LoginButtons"/>
      </span>
    );
  }
});
