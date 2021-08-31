const { Videogame, GameGenre, Platform } = require("../../db");

const getDBVideogames = async (req, res, next) => {
    try {
        const getDBVideogames = await Videogame.findAll(
            {
                include: GameGenre,
            },
            { include: Platform }
        );

        return getDBVideogames;
    } catch (err) {
        next(err);
    }
};

module.exports = getDBVideogames;
