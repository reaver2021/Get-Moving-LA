const mongoose = require('./connection');

const UserSchema = new mongoose.Schema({

    username: {
        type: 'string',
        required: true
    },
    passwordHash: {
        type: 'string',
        required: true,
    }
})

const Users = mongoose.model('User', UserSchema);

module.exports = Users;