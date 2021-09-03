import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GameCards from "../../Components/GameCards/GameCards";
import NavBar from "../../Components/NavBar/NavBar";
import { clearPage, searchByName } from "../../redux/actions";
import style from "./GamesByName.module.css";

function GamesByName() {
    const dispatch = useDispatch();
    let { name } = useParams();
    const videogameNames = useSelector((state) => state.searchByName);

    useEffect(() => {
        dispatch(searchByName(name));
        return () => dispatch(clearPage());
    }, [dispatch, name]);

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <div className={style.mainContainer}>
                    {videogameNames?.length ? (
                        <GameCards games={videogameNames} />
                    ) : videogameNames === undefined ? (
                        <h1>Cargando...</h1>
                    ) : (
                        <h1>Mario se perdio en la selva</h1>
                    )}
                </div>
            </div>
        </>
    );
}

export default GamesByName;
