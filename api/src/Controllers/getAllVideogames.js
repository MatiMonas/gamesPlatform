require("dotenv").config();
const { Videogame, GameGenre, Platform } = require("../db");
const { API_KEY } = process.env;
const { SEARCH_URL } = require("../utils/constants");
const { Op } = require("sequelize");
const getDBVideogames = require("./DATABASE/getDBVideogames");
const getAPIVideogames = require("./API/getAPIVideogames");
const axios = require("axios");

const getAllVideogames = async (req, res, next) => {
    const { name } = req.query;

    /*---------------------SEARCH BY QUERY--------------------------*/
    if (name) {
        let dataBaseGames = [];
        try {
            dataBaseGames = await Videogame.findAll(
                {
                    where: { name: { [Op.like]: `%${name}%` } },
                    include: GameGenre,
                },
                { include: Platform }
            );
        } catch (err) {
            next(err);
        }
        try {
            const getGames = await axios.get(
                `${SEARCH_URL}${name}&key=${API_KEY}`
            );

            const APIGames = await getGames.data.results?.map((element) => {
                let game = {
                    id: element.id,
                    name: element.name,
                    genres: element.genres.map((genre) => genre.name),
                };
                return game;
            });

            /*-------------CONCAT VIDEOGAMES, DB FIRST-----------------------*/
            const allGAMES = [...dataBaseGames, ...APIGames];
            res.json(allGAMES.splice(0, 15));
        } catch (err) {
            next(err);
        }
    } else {
        /*--------------------------GET ALL VIDEOGAMES-----------------------------*/
        try {
            const APIGames = await getAPIVideogames();
            const DBGames = await getDBVideogames();
            Promise.all([APIGames, DBGames]).then((response) => {
                let [DATABASE, API] = response;
                return res.json([...API, ...DATABASE]).status(200);
            });
        } catch (err) {
            next(err);
        }
    }
};

module.exports = getAllVideogames;
