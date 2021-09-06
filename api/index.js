//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = require("./src/utils/config");
const { GENRES_URL } = require("./src/utils/constants");
const axios = require("axios");
const { GameGenre } = require("./src/db");

// Syncing all the models at once.
conn.sync({ force: true })
    .then(async () => {
        let temp = await GameGenre.findAll();
        if (temp.length === 0) {
            const URL = GENRES_URL;
            try {
                const getGenres = await axios.get(URL);
                const resultGenres = getGenres.data?.results.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });

                resultGenres &&
                    resultGenres.map(async (genre) => {
                        await GameGenre.findOrCreate({
                            where: { name: genre.name },
                        });
                    });
            } catch (err) {
                console.error(err);
            }
        }
        server.listen(PORT, () => {
            console.log(`Listening at ${PORT}`); // eslint-disable-line no-console
        });
    })
    .catch((err) => console.log(err));
