const { Videogame, GameGenre, Platform } = require("../db");
const { Op } = require("sequelize");

const getAllVideogames = async (req, res, next) => {
    const { name } = req.query;

    if (name) {
        try {
            const dataBaseGames = await Videogame.findAll(
                {
                    where: { name: { [Op.like]: `%${name}%` } },
                    include: GameGenre,
                },
                { include: Platform }
            );
            res.json(dataBaseGames);
        } catch (err) {
            next(err);
        }
    } else {
        try {
            const getDBVideogames = await Videogame.findAll(
                {
                    include: GameGenre,
                },
                { include: Platform }
            );
            res.json(getDBVideogames);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = getAllVideogames;
