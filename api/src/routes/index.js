const { Router } = require("express");

const GameRoutes = require("./videogame");
const GamesRoutes = require("./videogames");
const GameGenreRoutes = require("./gamegenre");

const router = Router();

router.use("/videogame", GameRoutes);
router.use("/videogames", GamesRoutes);
router.use("/gamegenre", GameGenreRoutes);

module.exports = router;
