const { Router } = require('express');
const createVideogame = require('../Controllers/createVideogame');
const getVideogameByID = require('../Controllers/getVideogameByID');
const router = Router();

router.post('/', createVideogame);
router.get('/:id', getVideogameByID);

module.exports = router;
