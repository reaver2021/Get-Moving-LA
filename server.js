require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const dbconnection = require('./db/connection')
const PORT = process.env.PORT || 3000;


const passport = require('./config/passport/passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)

app.use(bodyParser.urlencoded({ extrended: true}));
app.use(bodyParser.json());

app.use(session({
    secret: 'west wing',
    store: new MongoStore({ mongooseConnection: dbconnection }),
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes');
app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, function (){
    console.log(`API Server now listening on Port ${PORT}`)
});