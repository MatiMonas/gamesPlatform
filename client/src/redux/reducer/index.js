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
    ORDER_RATING,
    ORDER_NAMES,
    ORDER_RATING_NAMES,
    FILTER_GENRES,
    FILTER_ORIGIN,
} from "../actions/actionTypes";
import { orderRating, orderAlph } from "../../Utils/orders";

let initialState = {
    videogames: [],
    filteredVideogames: [],
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
            return { ...state, searchByName: payload, filtersByName: payload };

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
            let copyGames = [...state.videogames];

            for (let i = 0; i < payload.length; i++) {
                copyGames = copyGames?.filter((el) => {
                    let genreCheck = el.genres?.map((e) => e.name);
                    return genreCheck?.includes(payload[i]);
                });
            }
            return { ...state, filteredVideogames: [...copyGames] };

        case FILTER_ORIGIN:
            const videogames = state.filteredVideogames;
            let filteredOrigin =
                payload === "created"
                    ? videogames.filter((el) => el.id.includes("-"))
                    : videogames.filter((el) => !el.id.includes("-"));
            return {
                ...state,
                filteredVideogames:
                    payload === "All"
                        ? state.filteredVideogames
                        : filteredOrigin,
            };

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
            let result = orderAlph(state.filteredVideogames, payload);
            return { ...state, filteredVideogames: [...result] };

        case ORDER_RATING:
            let result1 = orderRating(state.filteredVideogames, payload);
            return { ...state, filteredVideogames: [...result1] };

        case ORDER_NAMES:
            let namesResult = orderAlph(state.filtersByName, payload);
            return { ...state, filtersByName: [...namesResult] };

        case ORDER_RATING_NAMES:
            let namesResult1 = orderRating(state.filtersByName, payload);
            return { ...state, filtersByName: [...namesResult1] };

        /*-------------------------*/
        default:
            return state;
    }
}
