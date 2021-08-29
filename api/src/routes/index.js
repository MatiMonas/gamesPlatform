const { Router } = require('express');

const GameRoutes = require('./videogame');
const GameGenreRoutes = require('./gamegenre');

const router = Router();

router.use('/videogame', GameRoutes);
router.use('/gamegenre', GameGenreRoutes);

module.exports = router;
