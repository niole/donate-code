MainLayout = React.createClass({
  render() {
    return (
      <div>
        <div className="ui secondary  menu">
          <a className="item">
            Home
          </a>
          <a className="item">
            Messages
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
              </div>
            </div>
            <a className="ui item">
              Logout
            </a>
          </div>
        </div>
        {this.props.content}
      </div>
    );
  }
});
