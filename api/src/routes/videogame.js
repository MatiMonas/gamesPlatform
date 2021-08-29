const { Router } = require('express');
const createVideogame = require('../Controllers/DATABASE/createVideogame');
const getVideogameByID = require('../Controllers/getVideogameByID');
const router = Router();

router.post('/', createVideogame);
router.get('/:id', getVideogameByID);

module.exports = router;
