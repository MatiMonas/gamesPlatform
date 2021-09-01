import axios from "axios";
import { GAMES_URL } from "../../constants";
import { GET_GAMES } from "./actionTypes";

export const getGames = () => {
    return async function (dispatch) {
        const videogames = await axios.get(GAMES_URL);
        dispatch({ type: GET_GAMES, payload: videogames });
    };
};
