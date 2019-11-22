const placesApiId = process.env.PLACES_API_ID;
const placesApiKey = process.env.PLACES_API_KEY;
const router = require('express').Router;
const axios = require('axios');

router.get('/', (req, res) => {
    axios
        .get(
            `https://api.foursquare.com/v2/venues/search?near=Los Angeles, CA&query=tacos&client_id=${PLACES_API_ID}&client_secret=${PLACES_API_KEY}`,
            {params: req.query})
        .then(({ data: {results} }) => res.json(results))
        .catch(err => res.json(err))
})

module.exports = router;