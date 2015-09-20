MiniProfile = React.createClass({
  propTypes: {
    profiledata: React.PropTypes.object.isRequired
  },
  render() {
    return (
        <div>
          <img src={this.props.profiledata.image}/>
          {this.props.profile.data.name}
        </div>
    );
  }
});
