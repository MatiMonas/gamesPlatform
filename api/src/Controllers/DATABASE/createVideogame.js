const { Videogame, Platform, GameGenre } = require("../../db");
const { v4: uuidv4 } = require("uuid");

const createVideogame = async (req, res, next) => {
    const {
        name,
        description,
        background_image,
        releaseDate,
        rating,
        genres, //["miedo", "actions" ]
        platforms, //["ps5"]
    } = req.body;

    try {
        // const newDate = new Date(releaseDate)
        await GameGenre.findAll({ where: { name: genres } });
        await Videogame.create({
            id: uuidv4(),
            name,
            description, //en la base de datos cuando creo un juego le agrego la descripcion
            releaseDate,
            background_image,
            rating,
            platforms: platforms.map((el) => el),
        })
            .then((response) => response.addGameGenres(genres))
            .then((response) => {
                return res.send(response);
            });

        // genres.forEach(async (element) => {
        //     let genre = await GameGenre.findOne({
        //         where: { name: element },
        //     });
        // });

        // platforms.forEach(async (element) => {
        //     let platform = await Platform.findOne({
        //         where: { name: element },
        //     });
        //     await newGame.addPlatform(platform);
        // });

        // res.status(200).send("ok");
    } catch (err) {
        next(err);
    }
};

module.exports = createVideogame;
