const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    location: String,
    link: String,
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;