SearchBox = React.createClass({
  getInitialState() {
    return { searchtext: '', showing: false };
  },
  getText(show) {
    event.preventDefault();
    let text = React.findDOMNode(this.refs.toplevelsearchbox).value;
    if (text !== '' && show) {
      this.setState({ searchtext: text, showing: show });
    } else {
      React.findDOMNode(this.refs.toplevelsearchbox).value = '';
      this.setState({ searchtext: '', showing: show });
    }
  },
  showDropDown(text, showing) {
    //parse text and pipe into dropdown
    let search = { name: null, email: null };
    if (showing) {
      let searchtext = text.split(' ');
      _.forEach(searchtext, string => {
        if (string.indexOf('@') > -1) {
          search.email = string;
        }
        search.name = string;
      });
    }
    return <SearchBoxDropDown
            email={search.email}
            name={search.name}
           />;
  },
  render() {
    return (
      <div>
        <div className="ui icon input">
          <input type="text" ref="toplevelsearchbox" placeholder="Search..."/>
          <span onClick={this.getText.bind(null, !this.state.showing)}>
            <SearchButton
              input={this.state.showing}
            />
          </span>
        </div>
        {this.showDropDown(this.state.searchtext, this.state.showing)}
      </div>
    );
  }
});
