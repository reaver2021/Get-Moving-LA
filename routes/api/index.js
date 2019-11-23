const router = require('express').Router();
const placeRoutes = require('./places');
const jobRoutes = require('./jobs');

router.use('/jobs', jobRoutes)
router.use('/places', placeRoutes);

module.exports = router;