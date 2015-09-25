AddProfileButton = React.createClass({
  propTypes: {
    profileid: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired,
    defaultimage: React.PropTypes.string.isRequired,
    defaultlinks: React.PropTypes.array.isRequired
  },
  getInitialState() {
    return { edit: false };
  },
  toggleEdit(edit, profileid, links, image, email) {
    /*
     * Adds new Projects to respective collection,
     * updates array of projects in Charites
     * collection, and updates edit state.
     * */

    event.preventDefault();
    let projectTitle = React.findDOMNode(this.refs.projecttitle) ?
                       React.findDOMNode(this.refs.projecttitle).value :
                       null;
    if (!edit) {
      let projectId = ((new Date()).getTime()).toString();
      Projects.insert({
        _id: projectId,
        charityId: profileid,
        profile: {
          skills: [],
          description: "Describe your project.",
          email: email,
          links: links,
          profileurl: "/profile/project/"+projectId+"/"+profileid,
          name: projectTitle,
          image: [image]
        },
        miniProfiles: {
          acceptedDevs: [],
          pendingDevs: []
        }
      });
      Charities.update(
        { _id: profileid },
        {$push: { "miniProfiles.projects": projectId }}
      );
    }
    this.setState({ edit: edit });
  },
  displayButton(profileid, profiletype, edit, links, image, email) {
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
          onClick={this.toggleEdit.bind(null, !edit, profileid, links, image, email)}
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
          this.state.edit, this.props.defaultlinks, this.props.defaultimage, this.props.email)}
      </span>
    );
  }
});
