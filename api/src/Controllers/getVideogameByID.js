const { Videogame, GameGenre, Platform } = require('../db');

const getVideogameByID = async (req, res, next) => {
  const { id } = req.params;

  const validateId = id.includes('-');
  if (validateId) {
    try {
      const dataBaseGame = await Videogame.findByPk(
        id,
        { include: GameGenre },
        { include: Platform }
      );
      res.send(dataBaseGame);
    } catch (err) {
      res.send('No se encuentra un videojuego con ese ID').next(err);
    }
  }
};

module.exports = getVideogameByID;
