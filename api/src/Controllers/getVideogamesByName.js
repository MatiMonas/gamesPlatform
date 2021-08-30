require("dotenv").config();
const { Videogame, GameGenre, Platform } = require("../db");
const { API_KEY } = process.env;
const { SEARCH_URL } = require("../utils/config");
const { Op } = require("sequelize");
const axios = require("axios");

const getVideogamesByName = async (req, res, next) => {
    const { name } = req.query;
    console.log("entre");

    //TRAER JUEGOS TANTO DE BD COMO DE LA API Y CONCATENARLOS AL FINAL

    //--------------BBDD-----------------//
    try {
        const dataBaseGames = await Videogame.findAll(
            { where: { name: { [Op.like]: `%${name}%` } }, include: GameGenre },
            { include: Platform }
        );
        res.json(dataBaseGames);
    } catch (err) {
        next(err);
    }
    //--------------API-------------//
    // try {
    //     const getGames = await axios.get(`${SEARCH_URL}${name}?key=${API_KEY}`);
    //     const APIGames = await getGames.data.results?.map((element) => {
    //         let game = {
    //             id: element.id,
    //             name: element.name,
    //             genres: element.genres.map((genre) => genre.name),
    //         };
    //         return game;
    //     });

    //     const allGAMES = [...APIGames];
    //     res.json(allGAMES);
    // } catch (err) {
    //     next(err);
    // }
};

module.exports = getVideogamesByName;
