const jobsApiId = process.env.JOBS_API_ID;
const jobsApiKey = process.env.JOBS_API_KEY;
const router = require('express').Router;
const axios = require('axios');

router.get('/', (req, res) => {
    axios
        .get(
            `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${jobsApiId}&app_key=${jobsApiKey}&what=""&where=losAngeles`,
            {params: req.query})
        .then(({ data: {results} }) => res.json(results))
        .catch(err => res.json(err))
})

module.exports = router;