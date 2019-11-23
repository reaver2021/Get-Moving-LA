const mongoose = require('./connection');
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({

    email: {
        type: String,
        unique: false,
        required: false
    },

    username: {
        type: String,
        unique: false,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true,
    }
});

UserSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

UserSchema.pre('save', function (next) {
    if(!this.password) {
        console.log('models/user.js No Password Given')
        next()
    } else {
        console.log('models/user.js hashPassword in pre-save');

        this.password = this.hashPassword(this.password)
        next()
    }
})

const Users = mongoose.model('User', UserSchema);

module.exports = Users;