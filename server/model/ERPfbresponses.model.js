const mongoose = require('mongoose');
const dbConn = require('./dbConnection')


var erpFbRespSchema = new mongoose.Schema({
    activityName: {
        type: String,
        required: 'This field is required.'
    },
    question1: {
        type: String
    },
    question2: {
        type: String
    },
    question3: {
        type: String
    },
    question4:{
        type: String
    },
    question5:{
        type: String
    },
    question6:{
        type: String
    }
});



// responses is the collection name in the database.
module.exports = mongoose.model('responses', erpFbRespSchema);