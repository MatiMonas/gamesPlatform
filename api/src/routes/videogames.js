const { Router } = require('express');

const getDBVideogames = require('../Controllers/getDBVideogames');

const router = Router();

router.get('/', getDBVideogames);

module.exports = router;
