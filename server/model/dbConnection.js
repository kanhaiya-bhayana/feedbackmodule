const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ERPfeedback', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Conccection Succeeded') }
    else { console.log('Error in Connection: + err')}
});

require('./ERPfbresponses.model');
