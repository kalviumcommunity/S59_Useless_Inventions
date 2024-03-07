const mongoose = require('mongoose');

const data = new mongoose.Schema({
    Invention : {
        type : String,
        required : false
    },
    Founder : {
        type : String,
        required : false
    },
    Founded : {
        type : String,
        required : false
    },
    Description : {
        type : String,
        // required : true
    },
    
})

const dataSet = mongoose.model('dataSet',data);

module.exports = dataSet