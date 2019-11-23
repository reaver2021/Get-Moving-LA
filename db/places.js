const mongoose = require('mongoose');


const placeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    address: String,
    city: String
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;