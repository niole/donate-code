/*
 * Component shows pending or active devs if profile is project
 * and shows pending or active projects if profile is developer.
 * Component receives driving state (props.activeprofile) from ProfileToggle
 * component.
 */

MiniProfiles = React.createClass({
  propTypes: {
    activeprofile: React.PropTypes.bool.isRequired,
    profiledata: React.PropTypes.object.isRequired,
    profiletype: React.PropTypes.string.isRequired,
    userid: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    parentid: React.PropTypes.string.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    //get appropriate data
    let accepted;
    let pending;
    switch (this.props.profiletype) {
      case 'charity':
        accepted = _.map(this.props.profiledata.projects, pid => {
          return Projects.findOne({_id: pid.projectId});
        });
        break;
      case 'project':
        accepted = _.map(this.props.profiledata.acceptedDevs, did => {
          return Developers.findOne({_id: did.devId});
        });
        pending = _.map(this.props.profiledata.pendingDevs, did => {
          return Developers.findOne({_id: did.devId});
        });
        break;
      case 'developer':
        accepted = _.map(this.props.profiledata.acceptedProjects, pid => {
          return Projects.findOne({_id: pid.projectId});
        });
        pending = _.map(this.props.profiledata.pendingProjects, pid => {
          return Projects.findOne({_id: pid.projectId});
        });
        break;
    }
    return {Pending: pending, Accepted: accepted};
  },
  displayProfiles(active, pending, accepted, profiletype, userid, profileid, parentid, profiletype) {
    if (active) {
      if (accepted.length > 0) {
        return _.map(accepted, profile => {
          return <MiniProfile
                  profiletype={profiletype}
                  parentid={parentid}
                  userid={userid}
                  profileid={profileid}
                  profiledata={profile.profile}
                  />;
        });
      }
      return <p>nothing active</p>;
    }
    if (pending.length > 0) {
      return _.map(pending, profile => {
        return <MiniProfile
                profiletype={profiletype}
                parentid={parentid}
                userid={userid}
                profileid={profileid}
                profiledata={profile.profile}
                />;
      });
    }
    return <p>nothing pending</p>;
  },
  render() {
    return (
      <div className="miniprofile-container">
      {this.displayProfiles(this.props.activeprofile, this.data.Pending,
                            this.data.Accepted, this.props.profiletype, this.props.userid,
                           this.props.profileid, this.props.parentid, this.props.profiletype)}
      </div>
    );
  }
});
