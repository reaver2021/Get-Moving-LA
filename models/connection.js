const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/GetMoving', {useNewUrlParser: true});

module.exports = mongoose;