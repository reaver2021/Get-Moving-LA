const router = require('express').Router();
const placeRoutes = require('./places');

router.use('/places', placeRoutes);

module.exports = router;