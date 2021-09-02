import React from "react";

import style from "./GameCards.module.css";
import GameCard from "../GameCard/GameCard.jsx";

function GameCards({ games }) {
    return (
        <>
            <div className={style.container}>
                {games?.map((game) => (
                    <GameCard
                        key={game.id}
                        img={game.background_image}
                        name={game.name}
                        genre={game.genres?.map((el) => {
                            return <li key={el.id}>{el.name}</li>;
                        })}
                    />
                ))}
            </div>
        </>
    );
}

export default GameCards;
