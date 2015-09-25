SearchBoxDropDown = React.createClass({
  propTypes: {
    email: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  getMatches(email, name) {
    if (email || name) {
      let matches =
        Charities.find({ $or: [{ "profile.email": email }, { "profile.name": name }]}).fetch().concat(
        Projects.find({ $or: [{ "profile.name": name },{ "profile.email": email }]}).fetch()).concat(
        Developers.find({ $or: [{ "profile.name": name }, { "profile.email": email }]}).fetch());
      return _.map(matches, profile => {
        return (
           <div>
            <a className="ui image label" href={profile.profile.profileurl}>
              <img src={profile.profile.image}/>
              {profile.profile.name}
            </a>
           </div>
        );
      });
    }
  },
  render() {
    return (
      <div id="search-dropdown">
        {this.getMatches(this.props.email, this.props.name)}
      </div>
    );
  }
});
