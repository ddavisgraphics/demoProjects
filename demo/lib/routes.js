FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});

FlowRouter.route('/test', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "test"});
  }
});

FlowRouter.route('/list', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "list"});
  }
});
