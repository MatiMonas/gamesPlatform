const { Router } = require("express");

const getAllVideogames = require("../Controllers/getAllVideogames");
// const getVideogamesByName = require("../Controllers/getVideogamesByName");

const router = Router();

// router.get("/", getVideogamesByName);
router.get("/", getAllVideogames);

module.exports = router;
