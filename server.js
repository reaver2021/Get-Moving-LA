require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 3000;
const dbconnection = require('./models')


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

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})


const localURI = 'mongodb://localhose:27017/GetMoving'

mongoose.connect(process.env.MONGODB_URI || localURI, {useNewUrlParser: true})


app.listen(PORT, () => {
    console.log(`API Server now listening on Port ${PORT}`)
});

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });