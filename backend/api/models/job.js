const mongoose = require('mongoose');

module.exports = mongoose.model('job', {
    company : {type: String, default: ''},
    title : {type: String, default: ''},
    description : {type: String, default: ''},
    salary : {type: String, default: ''},
    
});