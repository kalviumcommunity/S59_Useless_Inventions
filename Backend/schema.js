const mongoose = require('mongoose');

const data = new mongoose.Schema({
    User : {
        type : String,
        // required : true
    },
    Invention : {
        type : String,
        // required : true
    },
    Founder : {
        type : String,
        // required : true
    },
    Founded : {
        type : String,
        // required : true
    },
    Description : {
        type : String,
        // required : true
    },
    Image:{
        type: String,
        // required: true
    }
    
})

const dataSet = mongoose.model('Useless',data);

module.exports = dataSet