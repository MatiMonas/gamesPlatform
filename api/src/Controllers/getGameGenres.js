//traigo todos los generos de la api y me los guardo en mi database

const { GameGenre } = require('../db');
const axios = require('axios');
const { GENRES_URL } = require('../utils/constants');

const getGameGenres = async (req, res, next) => {
  const URL = GENRES_URL;

  try {
    const getGenres = await axios.get(URL);
    const resultGenres = getGenres.data.results;

    if (resultGenres)
      return resultGenres.map(async (genre) => {
        await Genres.findOrCreate({
          where: { name: genre.name },
        });
      });
  } catch (err) {
    next(err);
  }
};
