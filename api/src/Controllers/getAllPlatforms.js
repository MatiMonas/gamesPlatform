const { GAMES_URL } = require("../utils/constants");
const axios = require("axios");
const { Platform } = require("../db");

const getAllPlatforms = async (req, res) => {
    let URL = GAMES_URL;
    try {
        const getGames = await axios.get(URL);
        const gameData = getGames.data?.results;
        gameData.map(async (element) => {
            await Platform.findOrCreate({
                where: { name: element.platforms[0].platform.name },
            });
        });
        const DBPlatforms = await Platform.findAll();
        return res.json(DBPlatforms);
    } catch (err) {
        console.log(err);
    }
};

module.exports = getAllPlatforms;
