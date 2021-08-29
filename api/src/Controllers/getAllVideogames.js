const { Videogame, GameGenre, Platform } = require('../db');

const getAllVideogames = async (req, res, next) => {
  try {
    const getDBVideogames = await Videogame.findAll(
      {
        include: GameGenre,
      },
      { include: Platform }
    );
    return res.json(getDBVideogames);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllVideogames;
