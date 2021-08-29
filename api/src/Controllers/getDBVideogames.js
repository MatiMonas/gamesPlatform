const { Videogame, GameGenre, Platform } = require('../db');
const { Op } = require('sequelize');

const getDBVideogames = async (req, res, next) => {
  const { name } = req.query;
  if (name) {
    try {
      const getDBVideogames = await Videogame.findAll(
        {
          where: { name: { [Op.like]: `%${name}%` } },
          include: GameGenre,
        },
        { include: Platform }
      );
      return getDBVideogames.length
        ? res.json(getDBVideogames)
        : res.json({ msg: 'No games found' });
    } catch (err) {
      next(err);
    }
  }

  try {
    const getAllDBVideogames = await Videogame.findAll();
    res.json(getAllDBVideogames);
  } catch (err) {
    next(err);
  }
};

module.exports = getDBVideogames;
