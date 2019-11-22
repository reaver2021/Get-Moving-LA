const mongoose = require('./connection');


const jobSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    company: String,

    description: String
})

const Jobs = mongoose.model('Job', jobSchema);

module.exports = Jobs