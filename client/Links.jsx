Links = React.createClass({
  propTypes: {
    linkdata: React.PropTypes.array.isRequired,
    usertype: React.PropTypes.string.isRequired,
    profiletype: React.PropTypes.string.isRequired
  },
  removeLink(index, user, profile, links) {
    if (user === profile) {
      let updateSkills;
      if (index < links.length) {
        updateSkills = links.slice(0,index).concat(links.slice(index+1,links.length));
      } else {
        console.error('you are trying to delete something thats not in the skill array');
      }
      if (profile === 'project') {
        //update some data
      }
      if (profile === 'charity') {
        if (updateSkills) {
          Charities.update(
             { _id: this.props.id },
             { $set: {"profile.links": updateSkills }}
          );
        }
      }
      if (profile === 'developer') {
        if (updateSkills) {
          Developers.update(
             { _id: this.props.id },
             { $set: {"profile.links": updateSkills }}
          );
        }
      }
    }
  },
  displayLinks(data) {
    if (data.length > 0) {
      return _.map(data, (link,i) => {
        return (
          <div className="ui image label" >
            <a href={link}>
              <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
                {link}
            </a>
            <i className="delete icon delete-link"
              onClick={this.removeLink.bind(null, i, this.props.usertype, this.props.profiletype, data)}
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
      <span>
        <div id="link-section" className="over-views">
          <div className="inline">
            <h1>Links</h1>
            <EditButton
              id={this.props.id}
              usertype={this.props.usertype}
              profiletype={this.props.profiletype}
              componenttype={'links'}
              text={null}
            />
          </div>

          {this.displayLinks(this.props.linkdata)}
        </div>
      </span>
    );
  }
});

