import {
    GET_GAMES,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    GET_PLATFORMS,
    GET_GENRES,
    POST_VIDEOGAME,
    CLEAR_GAME_DETAIL,
    NO_ORDER,
    ORDER_ASC,
    ORDER_DESC,
    ORDER_MORE_RATING,
    ORDER_LESS_RATING,

    // FILTER_ORIGIN,
    // FILTER_GENRES,
} from "../actions/actionTypes";

const initialState = {
    videogames: [],
    filteredVideogames: [],
    showDisplay: [],
    newGame: null,
    genres: [],
    platforms: [],
    searchByName: undefined,
    searchById: [],

    isLoading: false,
};
export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        /*---------GETTERS---------*/
        case GET_GAMES:
            let filtered = payload;
            return {
                ...state,
                videogames: payload,
                filteredVideogames: filtered,
            };

        case GET_GENRES:
            return { ...state, genres: payload };

        case GET_PLATFORMS:
            return { ...state, platforms: payload };

        case SEARCH_BY_NAME:
            return { ...state, searchByName: payload };

        case SEARCH_BY_ID:
            return { ...state, searchById: payload };

        case CLEAR_GAME_DETAIL:
            return { ...state, searchById: undefined };

        case POST_VIDEOGAME:
            return { ...state, newGame: payload };

        /*---------FILTERS---------*/

        /*---------ORDERS---------*/

        case NO_ORDER:
            let copyOriginal = [...state.videogames];
            return {
                ...state,
                filteredVideogames: [...copyOriginal],
            };

        case ORDER_ASC:
            let copy = [...state.filteredVideogames];
            const AZGames =
                payload === "AZ"
                    ? copy.sort((a, b) => {
                          if (a.name > b.name) {
                              return 1;
                          }
                          if (a.name < b.name) {
                              return -1;
                          }
                          return 0;
                      })
                    : state.videogames;

            return { ...state, filteredVideogames: [...AZGames] };

        case ORDER_DESC:
            let copy1 = [...state.filteredVideogames];
            const ZAgames =
                payload === "ZA"
                    ? copy1.sort((a, b) => {
                          if (a.name < b.name) {
                              return 1;
                          }
                          if (a.name > b.name) {
                              return -1;
                          }
                          return 0;
                      })
                    : state.videogames;
            return { ...state, filteredVideogames: [...ZAgames] };

        case ORDER_MORE_RATING:
            let copy2 = [...state.filteredVideogames];
            const moreRating =
                payload === "asc"
                    ? copy2.sort((a, b) => {
                          if (Number(a.rating) < Number(b.rating)) {
                              return 1;
                          }
                          if (Number(a.rating) > Number(b.rating)) {
                              return -1;
                          }
                          return 0;
                      })
                    : state.videogames;
            return { ...state, filteredVideogames: [...moreRating] };

        case ORDER_LESS_RATING:
            let copy3 = [...state.filteredVideogames];
            const lessRating =
                payload === "des"
                    ? copy3.sort((a, b) => {
                          if (Number(a.rating) > Number(b.rating)) {
                              return 1;
                          }
                          if (Number(a.rating) < Number(b.rating)) {
                              return -1;
                          }
                          return 0;
                      })
                    : state.videogames;
            return { ...state, filteredVideogames: [...lessRating] };

        default:
            return state;
    }
}
