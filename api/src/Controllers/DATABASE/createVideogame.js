const { Videogame, Platform, GameGenre } = require("../../db");

const createVideogame = async (req, res, next) => {
    const {
        id,
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
            id,
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
