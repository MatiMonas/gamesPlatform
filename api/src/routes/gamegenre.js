const { Router } = require('express');
const router = Router();
const getGameGenres = require('../Controllers/API/getGameGenres');

router.get('/', getGameGenres);

module.exports = router;
