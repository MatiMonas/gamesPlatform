const axios = require("axios");
const { GAMES_URL } = require("../../utils/constants");

const getAPIVideogames = async (req, res, next) => {
    let APIGames = [];
    let URL = GAMES_URL;

    /* 
    SE PODRIA OPTIMIZAR UTILIZANDO PROMISE RESOLVE CON CADA PAGINA PARA EVITAR TANTO TIEMPO DE CARGA POR LOS BUCLES    
    */

    try {
        // for (let i = 0; i <= 5; i++) {
        //     let getAPIGames = (await axios.get(URL)).data;
        //     let games = getAPIGames.results.map((el) => {
        //         let gameData = {
        //             id: el.id,
        //             name: el.name,
        //             background_image: el.background_image,
        //             genres: el.genres.map((genre) => genre.name),
        //         };
        //         return gameData;
        //     });
        //     APIGames = [...APIGames, ...games];
        //     URL = getAPIGames.next;
        // }
        // return APIGames;
        // //NECESITO CONSEGUIR EL DATA.NEXT DE TODO
        // let arrayOfPromises = [];
        // let json = [];
        // let pages = [1, 2, 3, 4, 5].map((n) => {
        //     let newPage = Promise.resolve(
        //         axios.get(
        //             ` https://api.rawg.io/api/games?key=178ece2035ae486d97b97d8234643709&page=4`
        //         )
        //     );
        //     arrayOfPromises.push(newPage);
        // });
        // let promises = await Promise.all(arrayOfPromises);
        // promises.forEach((el) => {
        //     json = [...json, ...el.data];
        // });
        //  let result = json.slice(0, 1);
        // console.log("SOY RESULTADOOOOOOOOOO", result);
        // return result;
        // //   /*-------
        // //   Imagen
        // //   Nombre
        // //   Géneros------*/
        // //podria intentar pushear al arrayOfPromises el promise.resolve de cada pagina
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
                            genres: el.genres
                                .map((genre) => genre.name)
                                .join(", "),
                            platforms: el.platforms
                                .map((plat) => plat.platform.name)
                                .join(", "),
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

        return result; //[devuelve 100 juegos]
    } catch (err) {
        console.error(err);
    }
};

module.exports = getAPIVideogames;
