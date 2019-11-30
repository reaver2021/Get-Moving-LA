const router = require('express').Router();
const jobController = require('../../controllers/jobsController');

router.route('/')
    .get(jobController.findAll)
    .post(jobController.create)
    .put(jobController.update)
    .delete(jobController.remove)

module.exports = router;