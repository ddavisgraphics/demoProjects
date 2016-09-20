import { Meteor } from 'meteor/meteor';

Meteor.methods({
  addEmployee: function(employee){
    Employee.insert(employee);
  },
  deleteEmployee: function(userID){
    Employee.remove({_id: userID});
  }
});
