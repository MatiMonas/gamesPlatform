const { Videogame, Platform, GameGenre } = require("../../db");
const { v4: uuidv4 } = require("uuid");

const createVideogame = async (req, res, next) => {
    const {
        name,
        description,
        background_image,
        releaseDate,
        rating,
        genres, //["miedo", "actions" ]
        platforms, //["ps5"]
    } = req.body;

    try {
        await GameGenre.findAll({ where: { name: genres } });
        await Videogame.create({
            id: uuidv4(),
            name,
            description, //en la base de datos cuando creo un juego le agrego la descripcion
            releaseDate,
            background_image,
            rating,
            platforms,
        })
            .then((response) => response.addGameGenres(genres))
            .then((response) => {
                return res.send(response);
            });
    } catch (err) {
        next(err);
    }
};

module.exports = createVideogame;
