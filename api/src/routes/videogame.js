const { Router } = require('express');
const createVideogame = require('../Controllers/DATABASE/createVideogame');
const getVideogameByID = require('../Controllers/getVideogameByID');
const router = Router();

router.get('/:id', getVideogameByID);
router.post('/', createVideogame);

module.exports = router;
