const router = require('express').Router();
const placesController = require('../../controllers/placesController');

router.route('/')
    .get(placesController.findAll)
    .post(placesController.create);

router
    route('/:id')
    .get(placesController.findById)
    .put(placesController.update)
    .delete(jobController.remove);

module.exports = router;