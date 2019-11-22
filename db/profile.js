const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String
    },

    location: {
        type: String
    },

    interests: {
        type: String,
    },

    careerInterests: {
        type: String
    }
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;