const router = require('express').Router();

const { HomeController } = require('../app/controllers');

router.get('/', HomeController.index);

module.exports = router;