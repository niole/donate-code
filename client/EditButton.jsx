EditButton = React.createClass({
  propTypes: {
    userid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired,
    componenttype: React.PropTypes.string.isRequired,
    text: React.PropTypes.string
  },
  getInitialState() {
    return { edit: false };
  },
  editMode(edit, component, profile, profileid) {
    event.preventDefault();
    if (!edit) {
      //save text in textarea
      let text = React.findDOMNode(this.refs.newprofiledata).value;
      if (profile === 'project') {
        //update some data
        if (component === 'skills') {
          if (text) {
            Projects.update(
               { _id: this.props.profileid },
               { $push: {"profile.skills": text }}
            );
          }
        }
        if (component === 'links') {
          if (text) {
            Projects.update(
               { _id: this.props.profileid },
               { $push: {"profile.links": text }}
            );
          }
        }
        if (component === 'bio') {
          if (text) {
            Projects.update(
               { _id: this.props.profileid },
               { $set: {"profile.description": text }}
            );
          }
        }
      }
      if (profile === 'charity') {
        if (component === 'skills') {
          if (text) {
            Charities.update(
               { _id: this.props.profileid },
               { $push: {"profile.skills": text }}
            );
          }
        }
        if (component === 'links') {
          if (text) {
            Charities.update(
               { _id: this.props.profileid },
               { $push: {"profile.links": text }}
            );
          }
        }
        if (component === 'bio') {
          if (text) {
            Charities.update(
               { _id: this.props.profileid },
               { $set: {"profile.description": text }}
            );
          }
        }
      }
      if (profile === 'developer') {
        if (component === 'skills') {
          if (text) {
            Developers.update(
               { _id: this.props.profileid },
               { $push: {"profile.devSkills": text }}
            );
          }
        }
        if (component === 'links') {
          if (text) {
            Developers.update(
               { _id: this.props.profileid },
               { $push: {"profile.links": text }}
            );
          }
        }
        if (component === 'bio') {
          if (text) {
            Developers.update(
               { _id: this.props.profileid },
               { $set: {"profile.description": text }}
            );
          }
        }
      }
    }
    this.setState({ edit: edit });
  },
  showButton(parent, profile, user, profiletype, edit, componenttype) {

    console.log(componenttype);
    let Edit = edit ? 'save' : 'edit';
    let button = [
          <div id="skills-edit" className="edit tiny-label"
            onClick={this.editMode.bind(null, !edit, componenttype, profiletype, profile)}
           >
            {Edit}
          </div>
    ];
    if(profiletype === 'project') {
      console.log(componenttype);
      console.log(user);
      console.log(parent);

      if (user === parent) {
        console.log(user);
        console.log(parent);
        return button;
      }
    } else {
      if (user === profile) {
        return button;
      }
    }
  },
  showInput(edit, component, text) {
    if (edit) {
      if (component === 'skills' || component === 'links') {
        return (
          <div className={component+"-input ui input"}>
            <input ref="newprofiledata" type="text" placeholder={"Add "+component}/>
          </div>
        );
      }
      if (component === 'bio') {
        return (
           <div className="ui form">
            <div className={"field "+component+"-textarea"}>
              <textarea ref="newprofiledata">{this.props.text}</textarea>
            </div>
          </div>
        );
      }
    } else {
      if (component === 'bio') {
        return <p className="bio-textarea">{text}</p>;
      }
    }
  },
  render() {
    return (
      <div>
        {this.showButton(this.props.parentid, this.props.profileid, this.props.userid, this.props.profiletype, this.state.edit, this.props.componenttype)}
        {this.showInput(this.state.edit, this.props.componenttype, this.props.text)}
      </div>
    );
  }
});

