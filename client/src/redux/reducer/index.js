import {
    GET_GAMES,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    GET_PLATFORMS,
    GET_GENRES,
    POST_VIDEOGAME,
    CLEAR_GAME_DETAIL,
} from "../actions/actionTypes";

const initialState = {
    videogames: [],
    newGame: null,
    genres: [],
    platforms: [],
    searchByName: undefined,
    searchById: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_GAMES:
            return {
                ...state,
                videogames: payload,
            };

        case GET_GENRES:
            return {
                ...state,
                genres: payload,
            };

        case GET_PLATFORMS:
            return {
                ...state,
                platforms: payload,
            };

        case SEARCH_BY_NAME:
            return {
                ...state,
                searchByName: payload,
            };
        case SEARCH_BY_ID:
            return {
                ...state,
                searchById: payload,
            };
        case CLEAR_GAME_DETAIL:
            return {
                ...state,
                searchById: undefined,
            };
        case POST_VIDEOGAME:
            return {
                ...state,
                newGame: payload,
            };
        default:
            return state;
    }
}
