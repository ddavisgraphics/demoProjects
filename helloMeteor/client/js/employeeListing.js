// Meteor.subscribe('employee');

Template.employeeListing.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('employee');
    });
});

Template.employeeListing.events({
    'click .deleteEmployee'(event){
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var $this = $(event.target);
        var userId = $this.data('id');

        Meteor.call('deleteEmployee', userId, (err, res), function(){
          if (err) {
            alert(err);
          } else {
            alert("deleted employee!");
          }
        });
    }
});

Template.employeeListing.helpers({
    employee: function() {
      return Employee.find();
    }
});
