import { GET_GAMES } from "../actions/actionTypes";

const initialState = {
    videogames: [],
    genres: [],
    platforms: [],
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
