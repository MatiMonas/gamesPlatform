import axios from "axios";
import { orderAlphFunc, orderRatingFunc } from "../../Utils/orders";
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
    ORDER_ASC,
    ORDER_DESC,
    ORDER_MORE_RATING,
    ORDER_LESS_RATING,
    FILTER_ORIGIN,
    FILTER_GENRES,
    SHOW_GAMES,
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

/*----------------BY ORDER-----------------*/

export function orderAz(payload) {
    return { type: ORDER_ASC, payload };
}
export function orderZa(payload) {
    return { type: ORDER_DESC, payload };
}

export function moreRating(payload) {
    return { type: ORDER_MORE_RATING, payload };
}
export function lessRating(payload) {
    return { type: ORDER_LESS_RATING, payload };
}

// export const orderZa = (array, order = "ZA") => {
//     const result = orderAlphFunc(array, order);
//     return { type: ORDER_DESC, payload: result };
// };

// export const mostPopular = (array, order = "asc") => {
//     const result = orderRatingFunc(array, order);
//     return { type: ORDER_ASC, payload: result };
// };
// export const lessPopular = (array, order = "des") => {
//     const result = orderRatingFunc(array, order);
//     return { type: ORDER_DESC, payload: result };
// };

/*----------------BY ORIGIN----------------*/

/*----------------BY GENRE----------------*/
