require("dotenv").config();
const axios = require("axios");
const { Videogame, GameGenre, Platform } = require("../db");
const { API_KEY } = process.env;
const { BASE_URL } = require("../utils/constants");

const getGameByID = async (req, res, next) => {
    const { id } = req.params;

    const validateId = id.includes("-");
    if (validateId) {
        //busco el id en mi base de datos, en este caso ya va a tener la descripcion
        try {
            const dataBaseGame = await Videogame.findByPk(
                id,
                { include: GameGenre },
                { include: Platform }
            );
            res.send(dataBaseGame);
        } catch (err) {
            res.send("No se encuentra un videojuego con ese ID").next(err);
        }
    }
    //si no se encontro en la base de datos entonces tengo que hacer la busqueda en la API
    else {
        try {
            const getGameByID = await axios.get(
                `${BASE_URL}${id}?key=${API_KEY}`
            );
            let gameData = getGameByID.data;

            let game = {
                id: gameData.id,
                name: gameData.name,
                background_image: gameData.background_image,
                rating: gameData.rating,
                description: gameData.description,
                platforms: gameData.platforms.map((disp) => disp.platform.name),
                genres: gameData.genres.map((genre) => genre.name),
            };
            return res.json(game);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = getGameByID;
