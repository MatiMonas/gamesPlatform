const axios = require("axios");
const { GAMES_URL } = require("../../utils/constants");

const getAPIVideogames = async () => {
    let APIGames = [];
    let URL = GAMES_URL;

    try {
        for (let i = 0; i <= 5; i++) {
            let getAPIGames = (await axios.get(URL)).data;
            let games = getAPIGames.results.map((el) => {
                let gameData = {
                    id: el.id,
                    name: el.name,
                    background_image: el.background_image,
                    genres: el.genres.map((genre) => genre.name),
                };
                return gameData;
            });
            APIGames = [...APIGames, ...games];
            URL = getAPIGames.next;
        }
        return APIGames;
    } catch (err) {
        console.error(err);
    }
};

module.exports = getAPIVideogames;
