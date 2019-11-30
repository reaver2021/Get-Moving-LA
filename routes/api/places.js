const router = require('express').Router();
const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/explore',
  method: 'GET',
  qs: {
    client_id: 'CLIENT_ID',
    client_secret: 'CLIENT_SECRET',
    ll: '40.7243,-74.0018',
    query: 'coffee',
    v: '20180323',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});

module.exports = router;