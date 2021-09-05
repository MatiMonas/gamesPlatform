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
} from "../actions/actionTypes";

const initialState = {
    videogames: [],
    allVideogames: [],
    showDisplay: [],
    newGame: null,
    genres: [],
    platforms: [],
    searchByName: undefined,
    searchById: [],
    filterBy: "All",
    orderBy: "Select",
    isLoading: false,
};
export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        /*---------GETTERS---------*/
        case GET_GAMES:
            return {
                ...state,
                videogames: payload,
                allVideogames: payload,
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
        case ORDER_ASC:
            const games = state.allVideogames;
            const AZGames =
                payload === "AZ"
                    ? games.sort((a, b) => {
                          if (a.name > b.name) {
                              return 1;
                          }
                          if (a.name < b.name) {
                              return -1;
                          }
                          return 0;
                      })
                    : games;
            return { ...state, videogames: AZGames };

        case ORDER_DESC:
            let games1 = state.allVideogames;
            const ZAgames =
                payload === "ZA"
                    ? games1.sort((a, b) => {
                          if (a.name < b.name) {
                              return 1;
                          }
                          if (a.name > b.name) {
                              return -1;
                          }
                          return 0;
                      })
                    : games1;
            return { ...state, videogames: ZAgames };

        case ORDER_MORE_RATING:
            const moreRating =
                payload === "asc"
                    ? state.allVideogames.sort((a, b) => {
                          if (Number(a.rating) < Number(b.rating)) {
                              return 1;
                          }
                          if (Number(a.rating) > Number(b.rating)) {
                              return -1;
                          }
                          return 0;
                      })
                    : state.allVideogames;
            return { ...state, videogames: moreRating };

        case ORDER_LESS_RATING:
            const lessRating =
                payload === "des"
                    ? state.allVideogames.sort((a, b) => {
                          if (Number(a.rating) > Number(b.rating)) {
                              return 1;
                          }
                          if (Number(a.rating) < Number(b.rating)) {
                              return -1;
                          }
                          return 0;
                      })
                    : state.allVideogames;
            return { ...state, videogames: lessRating };

        default:
            return state;
    }
}
