import axios from "axios";
import {
    GAMES_URL,
    GAME_URL_NAME,
    GAME_ID_URL,
    PLATFORMS_URL,
    GENRES_URL,
    GAME_URL,
} from "../../constants.js";
import {
    GET_GAMES,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    GET_PLATFORMS,
    GET_GENRES,
    POST_VIDEOGAME,
} from "./actionTypes";

export const getGames = () => {
    return async function (dispatch) {
        const videogames = await axios.get(GAMES_URL);
        dispatch({ type: GET_GAMES, payload: videogames.data });
    };
};

export const searchByName = (name) => {
    return async function (dispatch) {
        await axios
            .get(`${GAME_URL_NAME}${name}`)
            .then((res) =>
                dispatch({ type: SEARCH_BY_NAME, payload: res.data })
            );
    };
};

export const searchById = (id) => {
    return async function (dispatch) {
        const gameID = await axios.get(`${GAME_ID_URL}${id}`);
        dispatch({ type: SEARCH_BY_ID, payload: gameID.data });
    };
};

export const getPlatforms = () => {
    return async function (dispatch) {
        const platforms = await axios.get(PLATFORMS_URL);
        dispatch({ type: GET_PLATFORMS, payload: platforms.data });
    };
};

export const getGenres = () => {
    return async function (dispatch) {
        const genres = await axios.get(GENRES_URL);
        dispatch({ type: GET_GENRES, payload: genres.data });
    };
};

export const postGame = () => {
    return async function (dispatch) {
        const newGame = await axios.post(GAME_URL);
        dispatch({ type: POST_VIDEOGAME, payload: newGame.data });
    };
};
