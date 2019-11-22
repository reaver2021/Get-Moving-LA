
const mapsApiKey = process.env.MAPS_API_KEY;
const router = require('express').Router;
const axios = require('axios');

router.get('/', (req, res) => {
    axios
        .get(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=""&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${mapsApiKey}`,
            {params: req.query})
        .then(({ data: {results} }) => res.json(results))
        .catch(err => res.json(err))
})

module.exports = router;