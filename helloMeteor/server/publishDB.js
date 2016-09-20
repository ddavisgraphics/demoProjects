Meteor.startup(function () {
  // Delete All Records
  //Employee.remove({});

  if (Employee.find().count() === 0) {
    Employee.insert({
      "employee_number": "TEST",
      "first_name" : "TEST",
      "last_name" : "LASTNAME",
      "email" : "eflowers@gmail.com",
      "gender" : "male",
      "company" : "Awesome Tech",
      "position" : " CEO"
    });

    // This will insert data into the Meteor collection
    Employee.insert({
      "employee_number": "f86d177a-6566-469b-b86c-c78182c3e653",
      "first_name": "Ernest",
      "last_name": "Wheeler",
      "email": "ewheeler0@ning.com",
      "gender": "Male",
      "company": "Awesome Tech",
      "position": "Marketing Manager"
    });

    Employee.insert({
      "employee_number": "d59b051c-3756-44dc-8c75-60ce99415f46",
      "first_name": "Robert",
      "last_name": "Phillips",
      "email": "rphillips1@jugem.jp",
      "gender": "Male",
      "company": "Awesome Tech",
      "position": "VP Product Management"
    });

    Employee.insert({
      "employee_number": "55f85e9e-8290-4bb6-a431-867ce62a57ad",
      "first_name": "Gerald",
      "last_name": "Simpson",
      "email": "gsimpson2@unicef.org",
      "gender": "Male",
      "company": "Awesome Tech",
      "position": "Senior Financial Analyst"
    });

    Employee.insert({
      "employee_number": "1dbba6f4-db38-4112-84fc-b3bea5732c26",
      "first_name": "Randy",
      "last_name": "Carter",
      "email": "rcarter3@state.gov",
      "gender": "Male",
      "company": "Awesome Tech",
      "position": "Assistant Manager"
    });

    Employee.insert({
      "employee_number": "2fda008e-929a-4050-b6a3-bba5c073ba2b",
      "first_name": "Sara",
      "last_name": "Hart",
      "email": "shart4@nhs.uk",
      "gender": "Female",
      "company": "Awesome Tech",
      "position": "Software Engineer IV"
    });
  }
});

Meteor.publish("employee", function() {
  return Employee.find();
});
