const { Videogame } = require('../../db');
const { v4: uuidv4 } = require('uuid');

const createVideogame = async (req, res, next) => {
  const {
    name,
    description,
    background_image,
    background_image_additional,
    releaseDate,
    rating,
    platforms,
  } = req.body;

  try {
    const addGame = await Videogame.create({
      name,
      description,
      background_image,
      background_image_additional,
      releaseDate,
      rating,
      platforms,
      id: uuidv4(),
    });

    res.status(200).send(addGame);
    console.log(addGame);
  } catch (err) {
    next(err);
  }
};

module.exports = createVideogame;
