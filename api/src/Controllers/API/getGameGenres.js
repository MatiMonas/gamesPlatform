//traigo todos los generos de la api y me los guardo en mi database

const { GENRES_URL } = require("../../utils/constants");
const axios = require("axios");
const { GameGenre } = require("../../db");

const getGameGenres = async (_req, res) => {
    const URL = GENRES_URL;

    try {
        const getGenres = await axios.get(URL);
        const resultGenres = getGenres.data?.results;

        //si existe un genero en la api lo voy a agregar a mi base de datos

        resultGenres &&
            resultGenres.map(async (genre) => {
                await GameGenre.findOrCreate({
                    where: { name: genre.name },
                });
            });

        //muestro todos los generos que tenga en mi base de datos
        const getDBGenres = await GameGenre.findAll();
        return res.json(getDBGenres).status(200);
    } catch (err) {
        console.error(err);
    }
};

module.exports = getGameGenres;
