SearchBoxDropDown = React.createClass({
  propTypes: {
    email: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return { matches: [] };
  },
  getMatches(email, name) {
    if (email || name) {
      let matches =
        Charities.find({ $or: [{ "profile.email": email }, { "profile.name": name }]}).fetch().concat(
        Projects.find({ $or: [{ "profile.name": name },{ "profile.email": email }]}).fetch()).concat(
        Developers.find({ $or: [{ "profile.name": name }, { "profile.email": email }]}).fetch());
      return _.map(matches, profile => {
        console.log(profile);
        return (
           <div>
            {profile.profile.image}
            {profile.profile.name}
            {profile.profile.profileurl}
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
