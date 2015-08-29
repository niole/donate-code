UserFeeds = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
  return {
        allUsers: Meteor.users.find({}).fetch()
        };
  },
  Feeds() {
    return _.map(this.data.allUsers, function(o) {
      console.log(o);
      return <li>{o}</li>;
    });
  },
  render() {
    const sideStyle = {top: "80px"};
    return (
      <div>
        <PostNav/>
      </div>
    );
  }
});
