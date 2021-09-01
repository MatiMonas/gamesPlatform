const { Router } = require("express");

const getAllPlatforms = require("../Controllers/getAllPlatforms");

const router = Router();

router.get("/", getAllPlatforms);

module.exports = router;
