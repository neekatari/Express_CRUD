const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Employee',{ useNewUrlParser: true }, (err) => {
    if(!err){
        console.log('Connection done!')
    }else{
        console.log('connection failed!! '+ err)
    }

});

require('./employee.model');