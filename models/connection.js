const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const localURI = 'mongodb://localhose:27017/GetMoving'

mongoose.connect(process.env.MONGODB_URI || localURI, {useNewUrlParser: true})
.then( () => {
    console.log('Connected to Mongo');

    }).catch(err => {
        console.log('No Connection to Mongo:')
        console.log(err);
    });

module.exports = mongoose.connection