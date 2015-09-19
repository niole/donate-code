FlowRouter.route('/', {
    action: function() {
      React.render(<App/>, document.body);
    }
});
