const mongoose =require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required: 'This field is required'
    },
    email : {
        type: String,
        required: 'This field is required'
    },
    mobile : {
        type: String,
        required: 'This field is required'
    },
    city : {
        type: String,
        required: 'This field is required'
    },
});

mongoose.model('Employee',employeeSchema);