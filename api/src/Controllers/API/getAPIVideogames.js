const axios = require("axios");
const { GAMES_URL } = require("../../utils/constants");

const getAPIVideogames = async (req, res, next) => {
    let APIGames = [];
    let URL = GAMES_URL;

    /* 
    SE PODRIA OPTIMIZAR UTILIZANDO PROMISE RESOLVE CON CADA PAGINA PARA EVITAR TANTO TIEMPO DE CARGA POR LOS BUCLES    
    */

    try {
        let page1 = (await axios.get(`${URL}&page_size=40`)).data;
        let page2 = (await axios.get(page1.next)).data;
        let page3 = (await axios.get(page2.next)).data;

        let result = Promise.all([page1, page2, page3])
            .then((resolve) => {
                let [p1, p2, p3] = resolve;
                APIGames = [...p1.results, ...p2.results, ...p3.results].map(
                    (el) => {
                        let gameData = {
                            id: el.id,
                            name: el.name,
                            background_image: el.background_image,

                            genres: el.genres.map((genre) => {
                                return {
                                    name: genre.name,
                                    id: genre.id,
                                };
                            }),
                            platforms: el.platforms.map(
                                (el) => el.platform.name
                            ),
                        };
                        return gameData;
                    }
                );
                // console.log(APIGames);
                return APIGames;
            })
            .then((resolve) => {
                return resolve;
            })
            .catch((err) => console.err(err));

        return result; //[devuelve 120 juegos]
    } catch (err) {
        console.error(err);
    }
};

module.exports = getAPIVideogames;
