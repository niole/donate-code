SearchButton = React.createClass({
  propTypes: {
    input: React.PropTypes.bool.isRequired
  },
  showImage(input) {
    if (!input) {
      return <i className="search link icon"></i>;
    }
    return <i className="remove circle outline link icon"></i>;
  },
  render() {
    return (
      <span>
        {this.showImage(this.props.input)}
      </span>
    );
  }
});
