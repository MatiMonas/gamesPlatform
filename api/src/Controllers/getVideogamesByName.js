require('dotenv').config();
const { Videogame, GameGenre, Platform } = require('../db');
const { API_KEY } = process.env;
const { SEARCH_URL } = require('../utils/config');
const { Op } = require('sequelize');
const axios = require('axios');

const getDBVideogamesByName = async (req, res, next) => {
  const { name } = req.query;

  //TRAER JUEGOS TANTO DE BD COMO DE LA API Y CONCATENARLOS AL FINAL

  const dataBaseGames = Videogame.findAll(
    {
      where: {
        name: { [Op.like]: `%${name}` },
      },
      include: GameGenre,
    },
    { include: Platform }
  );

  const allGames = [...dataBaseGames, apiGames];
};

module.exports = getDBVideogamesByName;
