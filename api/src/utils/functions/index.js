const axios = require('axios');

const getAPIGames = async (URL) => {
  const APIGames = await axios.get(URL);
  return APIGames.data;
};

module.exports = {
  getAPIGames,
};
