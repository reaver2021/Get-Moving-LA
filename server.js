const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const sessionRoutes = require('./routes/session')
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extrended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'west wing',
    resave: false,
    saveUninitialized: true,
}))

app.use('/api/sessions', sessionRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/GetMoving');

app.listen(PORT, function (){
    console.log(`API Server now listening on Port ${PORT}`)
});