import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GameCards from "../../Components/GameCards/GameCards";
import NavBar from "../../Components/NavBar/NavBar";
import { searchByName } from "../../redux/actions";
import style from "./GamesByName.module.css";

function GamesByName() {
    const dispatch = useDispatch();
    let { name } = useParams();
    const videogameNames = useSelector((state) => state.searchByName);

    useEffect(() => {
        dispatch(searchByName(name));
    }, [dispatch, name]);

    return (
        <div>
            <NavBar />
            <div className={style.mainContainer}>
                <GameCards games={videogameNames} />
            </div>
        </div>
    );
}

export default GamesByName;
