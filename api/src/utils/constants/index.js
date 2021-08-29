require('dotenv').config();
const { API_KEY } = process.env;

const GAMES_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
const GENRES_URL = `https://api.rawg.io/api/genres?key=${API_KEY}`;
const BASE_ID = `https://api.rawg.io/api/games/`;
const SEARCH_URL = `https://api.rawg.io/api/games?search=`;

module.exports = {
  GAMES_URL,
  GENRES_URL,
  BASE_ID,
  SEARCH_URL,
};
