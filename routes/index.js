const express = require('express');
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.get('/start', (req, res) => {
    res.json({
        isLoggedIn: req.session.isLoggedIn || false
    })
});

router.post('/login', (req, res) => {

    const SECRET_USERNAME ='Griffin123';
    const SECRET_PASSWORD = 'test123';

    if (req.body.email === SECRET_USERNAME && req.body.password === SECRET_PASSWORD) {
        req.session.isLoggedIn = true;

        res.json({

            success: true
        })
    } else {
        req.session.isLoggedIn = false;
        res.json({
            succes: false
        })
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy( () => {
        res.json({succes: true});
    });
})

router.post('/create_user', (req, res) => {
    
})

router.use('/api', apiRoutes);

router.use(function(req, res){
    res.sendFile(path.join(__dirname, '../client/build/index/html'));
});

module.exports = router;