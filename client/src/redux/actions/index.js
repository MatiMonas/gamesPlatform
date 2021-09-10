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
    CLEAR_GAME_DETAIL,
    ORDER,
    NO_ORDER,
    FILTER_GENRES,
    FILTER_ORIGIN,
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
export function clearPage() {
    return { type: SEARCH_BY_NAME, payload: undefined };
}

export const searchById = (id) => {
    if (id) {
        return async function (dispatch) {
            const gameID = await axios.get(`${GAME_ID_URL}${id}`);
            dispatch({ type: SEARCH_BY_ID, payload: gameID.data });
        };
    }
    return { type: CLEAR_GAME_DETAIL };
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

export const postGame = (game) => {
    return async function (dispatch) {
        const newGame = await axios.post(GAME_URL, game);
        dispatch({ type: POST_VIDEOGAME, payload: newGame.data });
    };
};

/*----------------------------FILTERING------------------------------*/

export const filterByGenre = (payload) => {
    return { type: FILTER_GENRES, payload };
};

export const filterByOrigin = (payload) => {
    return { type: FILTER_ORIGIN, payload };
};

/*----------------BY ORDER-----------------*/
export function noOrder(payload) {
    return { type: NO_ORDER, payload };
}

export function order(payload) {
    return { type: ORDER, payload };
}

/*----------------BY ORIGIN----------------*/
