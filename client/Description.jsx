Description  = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return { edit: false };
  },
  displayAbout(text, edit) {
    if (edit) {
      return (
         <div className="ui form">
          <div className="field bio-textarea">
            <textarea ref="biotext">{text}</textarea>
          </div>
        </div>
      );
    }
    return <p className="bio-textarea">{text}</p>;
  },
  editMode(mode) {
    event.preventDefault();
    if (this.state.edit) {
      //save text in textarea
      let text = React.findDOMNode(this.refs.biotext).value;
      if (this.props.profiletype === 'project') {
        //update some data
      }
      if (this.props.profiletype === 'charity') {
      }
      if (this.props.profiletype === 'developer') {
        Developers.update(
           { _id: this.props.id },
           { $set: {"profile.description": text }}
        );
      }
    }
    this.setState({ edit: mode });
  },
  render() {
    let edit = this.state.edit ? 'done' : 'edit';
    return (
      <div id="bio-section" className="over-views">
        <div className="inline">
          <h1>About</h1>
          {(this.props.usertype === this.props.profiletype) ?
            <div id="bio-edit" className="edit tiny-label"
              onClick={this.editMode.bind(null, !this.state.edit)}>
              {edit}
            </div> :
            <span/>}
        </div>

        {this.displayAbout(this.props.description, this.state.edit)}
      </div>
    );
  }
});

