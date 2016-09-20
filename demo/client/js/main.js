Template.list.onCreated(function(){
    var self = this;

    self.autorun(function(){
      self.subscribe('employee');
    });
});

Template.list.helpers({
  employee: function(){
    return Employee.find();
  }
});
