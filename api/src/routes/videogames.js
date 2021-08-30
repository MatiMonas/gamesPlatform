const { Router } = require("express");

const getAllVideogames = require("../Controllers/getAllVideogames");

const router = Router();

router.get("/", getAllVideogames);

module.exports = router;
