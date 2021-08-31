require("dotenv").config();
const { Videogame, GameGenre, Platform } = require("../db");
const { API_KEY } = process.env;
const { SEARCH_URL } = require("../utils/constants");
const { Op } = require("sequelize");
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
            console.log(getGames.data);
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
            res.json(allGAMES.slice(0, 15));
        } catch (err) {
            next(err);
        }
    } else {
        /*--------------------------GET ALL VIDEOGAMES-----------------------------*/
        try {
            const getDBVideogames = await Videogame.findAll(
                {
                    include: GameGenre,
                },
                { include: Platform }
            );
            res.json(getDBVideogames);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = getAllVideogames;
