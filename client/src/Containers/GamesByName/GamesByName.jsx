import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Order from "../../Components/Filters/Order/Order";
import GameCards from "../../Components/GameCards/GameCards";
import NavBar from "../../Components/NavBar/NavBar";
import {
    clearPage,
    getGames,
    lessRating,
    moreRating,
    orderAz,
    orderZa,
    searchByName,
} from "../../redux/actions";
import style from "./GamesByName.module.css";

function GamesByName() {
    const dispatch = useDispatch();
    let { name } = useParams();
    const [order, setOrder] = useState("");
    const videogameNames = useSelector((state) => state.searchByName);

    useEffect(() => {
        dispatch(searchByName(name));
        return () => dispatch(clearPage());
    }, [dispatch, name]);

    const handleOrder = (e) => {
        if (e.target.value === "All") dispatch(getGames());
        if (e.target.value === "AZ") dispatch(orderAz(e.target.value));
        if (e.target.value === "ZA") dispatch(orderZa(e.target.value));
        if (e.target.value === "asc") dispatch(moreRating(e.target.value));
        if (e.target.value === "des") dispatch(lessRating(e.target.value));
        setOrder(e.target.value);
    };

    return (
        <>
            <div>
                <NavBar />
                <Order handleOrder={handleOrder} />
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
