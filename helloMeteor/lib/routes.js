FlowRouter.route('/', {
  name : 'home',
  action : function(){
    BlazeLayout.render('home');
  },
});

FlowRouter.route('/test', {
  name : 'test',
  action : function(){
    BlazeLayout.render('main', {content: 'test'});
  },
});

FlowRouter.route('/list', {
  name : 'Employee Listing',
  action : function(){
    BlazeLayout.render('main', {content: 'employeeListing'});
  },
});

FlowRouter.route('/create', {
  name : 'New Employee',
  action : function(){
    BlazeLayout.render('main', {content: 'insertEmployee'});
  },
});
