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
    ORDER_ASC,
    ORDER_DESC,
    ORDER_MORE_RATING,
    ORDER_LESS_RATING,
    FILTER_GENRES,

    // FILTER_ORIGIN,
} from "../actions/actionTypes";
import { orderRating, orderAlph } from "../../Utils/orders";

const initialState = {
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
                // console.log(payload);
                copyGames = copyGames?.filter((el) => {
                    let genreCheck = el.genres?.map((e) => e.name);
                    console.log("SOY GENRE CHECK", genreCheck);
                    return genreCheck?.includes(payload[i]);

                    // return ;
                });
            }
            return { ...state, filteredVideogames: [...copyGames] };

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
        case ORDER_ASC:
            if (state.searchByName !== undefined) {
                let nameCopy = [...state.searchByName];
                let result = orderAlph(nameCopy, "AZ");
                return { ...state, filtersByName: [...result] };
            } else if (state.videogames) {
                let copy = [...state.videogames];
                let result = orderAlph(copy, "AZ");
                return { ...state, filteredVideogames: [...result] };
            }
            return;

        case ORDER_DESC:
            if (state.searchByName !== undefined) {
                let nameCopy = [...state.searchByName];
                let result = orderAlph(nameCopy, "ZA");
                return { ...state, filtersByName: [...result] };
            } else if (state.videogames) {
                let copy = [...state.videogames];
                let result = orderAlph(copy, "ZA");
                return { ...state, filteredVideogames: [...result] };
            }
            return;

        case ORDER_MORE_RATING:
            if (state.searchByName !== undefined) {
                let nameCopy = [...state.searchByName];
                let result = orderRating(nameCopy, "asc");
                return { ...state, filtersByName: [...result] };
            } else if (state.videogames) {
                let copy = [...state.videogames];
                let result = orderRating(copy, "asc");
                return { ...state, filteredVideogames: [...result] };
            }
            return;

        case ORDER_LESS_RATING:
            if (state.searchByName !== undefined) {
                let nameCopy = [...state.searchByName];
                let result = orderRating(nameCopy, "des");
                return { ...state, filtersByName: [...result] };
            } else if (state.videogames) {
                let copy = [...state.videogames];
                let result = orderRating(copy, "des");
                return { ...state, filteredVideogames: [...result] };
            }
            return;
        /*-------------------------*/
        default:
            return state;
    }
}

// copy.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     return 0;
// })
// : state.videogames;
