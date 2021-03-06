Links = React.createClass({
  propTypes: {
    linkdata: React.PropTypes.array.isRequired,
    parentid: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired,
    profileid: React.PropTypes.string.isRequired,
    userid: React.PropTypes.string.isRequired
  },
  removeLink(index, user, profile, parent, profiletype, links) {
    let updateSkills;
    if (index < links.length) {
      updateSkills = links.slice(0,index).concat(links.slice(index+1,links.length));
    } else {
      console.error('you are trying to delete something thats not in the skill array');
    }
    if (profiletype === 'project') {
      //update some data
      if (updateSkills && user === parent) {
        Projects.update(
           { _id: profile },
           { $set: {"profile.links": updateSkills }}
        );
      }
    }
    if (profiletype === 'charity') {
      if (updateSkills && user === profile) {
        Charities.update(
           { _id: user },
           { $set: {"profile.links": updateSkills }}
        );
      }
    }
    if (profiletype === 'developer' && user === profile) {
      if (updateSkills) {
        Developers.update(
           { _id: user },
           { $set: {"profile.links": updateSkills }}
        );
      }
    }
  },
  displayLinks(data, userid, profileid, profiletype, parentid) {
    if (data.length > 0) {
      return _.map(data, (link,i) => {
        return (
          <div className="ui image label" >
            <a href={link}>
              <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
                {link}
            </a>
            <i className="delete icon delete-link"
              onClick={this.removeLink.bind(null, i, userid, profileid, parentid, profiletype, data)}
            >
            </i>
          </div>
        );
      });
    }
    return <p>add a link</p>;
  },
  render() {
    return (
      <div id="link-section" className="uppersection-views">
        <div className="inline">
          <h1>Links</h1>
          <EditButton
            userid={this.props.userid}
            profileid={this.props.profileid}
            parentid={this.props.parentid}
            profiletype={this.props.profiletype}
            componenttype={'links'}
            text={null}
          />
          <br/>
        </div>
        <div className="ui raised segment">
          {this.displayLinks(this.props.linkdata, this.props.userid, this.props.profileid,
                                              this.props.profiletype, this.props.parentid)}
        </div>
      </div>
    );
  }
});

