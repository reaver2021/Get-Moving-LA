const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: { type: String, required: true},
    description: String,
    location: String,
    redirect_url: String,
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;