AddProfileButton = React.createClass({
  propTypes: {
    profileid: React.PropTypes.string,
    profiletype: React.PropTypes.string,
    defaultimage: React.PropTypes.string,
    defaultlinks: React.PropTypes.array
  },
  getInitialState() {
    return { edit: false };
  },
  toggleEdit(edit, profileid, links, image) {
    //let projectTitle = $('#projecttitle');
    let projectTitle = React.findDOMNode(this.refs.projecttitle) ?
                       React.findDOMNode(this.refs.projecttitle).value :
                       null;
    console.log(projectTitle);

    event.preventDefault();
    if (!edit) {
      //save in database
      Projects.insert({
        charityId: profileid,
        profile: {
          skills: [],
          description: "Describe your project.",
          links: links,
          name: projectTitle,
          image: image
        },
        miniProfiles: {
          acceptedDevs: [],
          pendingDevs: []
        }
      });
    }
    this.setState({ edit: edit });
  },
  displayButton(profileid, profiletype, edit, links, image) {
    /*
     * button has onClick functionality which
     * toggles edit state.
     * if edit state is true, displays a modal
     * and label on button is 'save'
     **/
    let Edit = edit ? 'save' : 'edit';
    return (
      <span>
        <div className="tiny-label"
          onClick={this.toggleEdit.bind(null, !edit, profileid, links, image)}
          >
          {Edit}
        </div>
        {this.createProjectModal(edit, image)}
      </span>
    );
  },
  createProjectModal(edit, image) {
    /*
     * If edit's true, a modal shows that has
     * a default image and an edit field
     * for a title input.
     * */
    if (edit) {
      return (
        <div className="modal-popup add-project">
          <img src={image}/>
          <div className="ui mini icon input">
            <input id="projecttitle" ref="projecttitle" type="text" placeholder="title"/>
          </div>
        </div>
      );
    }
  },
  render() {
    return (
      <span>
        {this.displayButton(this.props.profileid, this.props.profiletype,
          this.state.edit, this.props.defaultlinks, this.props.defaultimage)}
      </span>
    );
  }
});
