import {
    GET_GAMES,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    GET_PLATFORMS,
    GET_GENRES,
    POST_VIDEOGAME,
    CLEAR_GAME_DETAIL,
    NO_ORDER,
    NO_ORDER_SEARCH_GAMES,
    ORDER,
    ORDER_NAMES,
    FILTER_GENRES,
    FILTER_ORIGIN,
} from "../actions/actionTypes";
import { order } from "../../Utils/orders";

let initialState = {
    videogames: [], //nunca muta
    filteredVideogames: [], //muta y renderizo
    newGame: null,
    genres: [],
    platforms: [],
    searchByName: undefined,
    filtersByName: [],
    searchById: [],
    isLoading: false,
};
export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        /*---------GETTERS---------*/
        case GET_GAMES:
            return {
                ...state,
                videogames: payload,
                filteredVideogames: payload,
            };

        case GET_GENRES:
            return { ...state, genres: payload };

        case GET_PLATFORMS:
            return { ...state, platforms: payload };

        case SEARCH_BY_NAME:
            return {
                ...state,
                filteredVideogames: payload,
                filtersByName: payload,
            };

        case SEARCH_BY_ID:
            return { ...state, searchById: payload };

        case CLEAR_GAME_DETAIL:
            return { ...state, searchById: undefined };

        case POST_VIDEOGAME:
            return { ...state, newGame: payload };

        /*---------FILTERS---------*/
        case FILTER_GENRES:
            //necesito de los juegos que tengo en videogames, solo copiarme los juego que vengan con el value
            //payload = ["1", "5" ,"6"]
            let copyGames = [...state.filteredVideogames];

            for (let i = 0; i < payload.length; i++) {
                copyGames = copyGames?.filter((el) => {
                    let genreCheck =
                        el.genres?.map((e) => e.name) ||
                        el.gameGenres?.map((e) => e.name);
                    return genreCheck?.includes(payload[i]);
                });
            }
            return { ...state, filteredVideogames: [...copyGames] };

        case FILTER_ORIGIN: // All , created, api (3 casos de payload)
            const videogames = [...state.filteredVideogames];

            if (payload === "All")
                return { ...state, filteredVideogames: [...videogames] };

            if (payload === "created") {
                let filteredDBGames = videogames?.filter(
                    (el) => typeof el.id === "string"
                );
                return { ...state, filteredVideogames: [...filteredDBGames] };
            }

            if (payload === "api") {
                let filteredAPIGames = videogames?.filter(
                    (el) => typeof el.id === "number"
                );
                return { ...state, filteredVideogames: [...filteredAPIGames] };
            }
            return { ...state, filteredVideogames: [...videogames] };

        /*---------ORDERS---------*/
        //This to functions resets to the original order
        case NO_ORDER:
            let copyOriginal = [...state.videogames];
            return {
                ...state,
                filteredVideogames: [...copyOriginal],
            };

        case NO_ORDER_SEARCH_GAMES:
            let byNameCopy = [...state.searchByName];
            return { ...state, filtersByName: [...byNameCopy] };

        /*----------------------------------*/
        case ORDER:
            let result = order(state.filteredVideogames, payload);
            return { ...state, filteredVideogames: [...result] };

        case ORDER_NAMES:
            let namesResult = order(state.filtersByName, payload);
            return { ...state, filtersByName: [...namesResult] };

        /*-------------------------*/
        default:
            return state;
    }
}
