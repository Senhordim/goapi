const router = require('express').Router();

const { PersonController } = require('../app/controllers/');

router.post('/', PersonController.store);

router.get('/', PersonController.all);

router.get('/:id', PersonController.show);

router.patch('/:id', PersonController.update)

module.exports = router;
