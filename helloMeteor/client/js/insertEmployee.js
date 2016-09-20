Template.insertEmployee.events({
  'submit .newEmployee'(event){
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var $this = $(event.target);
      var employeeData = $this.serializeObject();

      Meteor.call('addEmployee', employeeData, (err, res) => {
        if (err) {
          alert(err);
        } else {
          alert("successfully added employee!");
        }
      });

      // Clear form
      $(event.target)[0].reset();
    }
});

Template.insertEmployee.onRendered(function () {
  $('h2').click(function(){
    $('form').slideToggle();  
  });
});
