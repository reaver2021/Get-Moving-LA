const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    address: String,
    city: String
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;