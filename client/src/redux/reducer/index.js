import {
    GET_GAMES,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    GET_PLATFORMS,
    GET_GENRES,
    POST_VIDEOGAME,
} from "../actions/actionTypes";

const initialState = {
    videogames: [],
    genres: [],
    platforms: [],
    searchByName: [],
    searchById: [],
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_GAMES:
            return {
                ...state,
                videogames: payload,
            };

        default:
            return state;
    }
}
