require('dotenv').config();
const { Videogame, GameGenre, Platform } = require('../db');
const { API_KEY } = process.env;
const { SEARCH_URL } = require('../utils/config');
const { Op } = require('sequelize');
const axios = require('axios');

const getDBVideogamesByName = async (req, res, next) => {};

module.exports = getDBVideogamesByName;
