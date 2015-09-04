WatchFooter = React.createClass({
  render() {
    const footerStyle = {position: "absolute",
                         left: "40%",
                         bottom: "0%",
                         padding: "1em"};
    return (
     <div style={footerStyle}>
       <h3 className="ui dividing header"/>
       <h3 className="ui dividing header">Watched Feeds</h3>
     </div>
    );
  }
});
