//traigo todos los generos de la api y me los guardo en mi database

const { GENRES_URL } = require("../../utils/constants");
const axios = require("axios");
const { GameGenre } = require("../../db");

const getGameGenres = async (_req, res) => {
    try {
        //muestro todos los generos que tenga en mi base de datos
        const getDBGenres = await GameGenre.findAll();
        res.json(getDBGenres).status(200);
    } catch (err) {
        res.sendStatus(404);
        next(err);
    }
};

module.exports = getGameGenres;
