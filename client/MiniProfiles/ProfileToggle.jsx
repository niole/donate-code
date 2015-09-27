/*
 * Component controls the view in MiniProfiles component.
 * If props.profiletype is developer or project, allows
 * user to toggle between relevant active and pending MiniProfiles.
 * If is charity, displays a 'Projects' title with an optional
 * 'add project' button if charity profile belongs to loggedin user.
 */

ProfileToggle = React.createClass({
  propTypes: {
    profiletype: React.PropTypes.string.isRequired,
    userid: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired,
    userData: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return { menuToggle: [true, false]};
  },
  Toggle(pos) {
    this.setState({menuToggle:
      _.map(_.range(2), i => {
        if (i === pos) {
          return true;
        }
        return false;
      })
    });
  },
  displayToggle(profiletype, profileid, userid, data, parentid) {
    /*
     * Controls header text and functionality of
     * component
     **/
    let headerText;
    if (profiletype === 'developer' || profiletype === 'project') {
      if (profiletype === 'developer') {
        headerText = ' projects';
      } else {
        headerText = ' developers';
      }
      return (
        <span>
          <div className="ui secondary pointing menu">
            <a className={this.state.menuToggle[0] ? "active item toggle-title" : "item toggle-title"}
              onClick={this.state.menuToggle[1] ? this.Toggle.bind(null,0) : null}>
              {'active'+headerText}
            </a>
            <a className={this.state.menuToggle[1] ? "active item toggle-title" : "item toggle-title"}
              onClick={this.state.menuToggle[0] ? this.Toggle.bind(null,1) : null}>
              {'pending'+headerText}
            </a>
          </div>
        </span>
      );
    }
    if (profiletype === 'charity') {
      return (
        <span>
          <h1 id="project-toggle">Projects</h1>
          {this.displayAddMiniProfile(profileid, userid, data, parentid)}
        </span>
      );
    }
  },
  displayAddMiniProfile(profileid, userid, data, parentid) {
    /*
     * Determines if add project button should be shown.
     * onClick, opens mock MiniProfile with a default
     * image with a prompt for name entry.
     * Appears in modal-like fashion over top of the
     * mini-profiles.
     * On display, text of add profile button is 'save'.
     * Appearance of modal and button is determined by a change in
     * the button component's internal state.
     * */
    if (profileid === userid) {
      return <AddProfileButton
              profileid={profileid}
              profiletype={'charity'}
              email={data.profile.email}
              defaultlinks={data.profile.links}
              defaultimage={data.profile.image[0]}
              />;
    }
  },
  render() {
    return (
      <span>
        <div className="title-toggle">
          {this.displayToggle(
            this.props.profiletype, this.props.profileid,
            this.props.userid, this.props.userData, this.props.parentid)}
        </div>
        <MiniProfiles
          userid={this.props.userid}
          profileid={this.props.profileid}
          parentid={this.props.parentid}
          profiledata={this.props.userData.miniProfiles}
          activeprofile={this.state.menuToggle[0]}
          profiletype={this.props.profiletype}
        />
      </span>

    );
  }
});
