import React from "react";
import { useSelector } from "react-redux";
import style from "./GameCards.module.css";

function GameCards() {
    const videogames = useSelector((state) => state.videogames);

    return (
        <>
            <div className={style.cardContainer}>
                <div className={style.imageContainer}>
                    <div className={style.backgroundImage}></div>
                </div>
            </div>
        </>
    );
}

export default GameCards;
