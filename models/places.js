const mongoose = require('./connection');

const PlacesSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Places = mongoose.model("Places", PlacesSchema);

module.exports = Places;