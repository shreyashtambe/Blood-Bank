const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: 'This field is required.'
        
    },
    Description: {
        type: String,
        required: 'This field is required.'
        
    },
    Completed: {
        type: String
    },
     Date: {
         type: String
     },
     Time: {
         type: String
     },
     AgeGender: {
        type: String
    },
    no: {
        type: String
    }
});

// Custom validation for email
// employeeSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

mongoose.model('Task', employeeSchema);