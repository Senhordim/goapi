const router = require('express').Router();

const { PersonController } = require('../app/controllers/');

router.post('/', PersonController.store);

router.get('/', PersonController.all);

module.exports = router;
