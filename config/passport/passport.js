const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../db/user');

passport.serializeUser((user, done) => {
    console.log('***serializeUser called, user:')
    console.log(user)
    console.log('--------')
    done(null, { _id: user._id})
})

passport.deserializeUser((id, done) => {

    User.findOne(
        {_id: id },
        "username",
        (err, user) => {
            done(null, user)
        }
    )
})

passport.use( new LocalStrategy(
    {
        usernameField: 'email'

    },
    function(username, password, done){
        User.findOne({ email: username }, (err, user) =>{
            if(err) {
                return done(err)
            }
            if(!user) {
                return done(null, false, { message: 'Incorrect username'})
            }
            if(!user.checkPassword(password)) {
                return done(null, false, {message: 'Incorrect password' })
            }
            return done(null, user)
        })
    }
))

module.exports = passport;