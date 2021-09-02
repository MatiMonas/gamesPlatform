import React from "react";
import { useSelector } from "react-redux";
import style from "./GameCards.module.css";
import GameCard from "../GameCard/GameCard.jsx";

function GameCards() {
    const videogames = useSelector((state) => state.videogames);

    return (
        <>
            <div className={style.container}>
                {videogames?.map((game) => (
                    <GameCard
                        key={game.id}
                        img={game.background_image}
                        name={game.name}
                        genre={game.genres.map((el) => {
                            return <li key={el.id}>{el.name}</li>;
                        })}
                    />
                ))}
            </div>
        </>
    );
}

export default GameCards;
