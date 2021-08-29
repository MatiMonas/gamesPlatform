const { Router } = require('express');

const getDBVideogames = require('../Controllers/getAllVideogames');

const router = Router();

router.get('/', getDBVideogames);

module.exports = router;
