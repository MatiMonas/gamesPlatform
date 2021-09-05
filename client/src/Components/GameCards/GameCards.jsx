import React from "react";
import style from "./GameCards.module.css";
import GameCard from "../GameCard/GameCard.jsx";
import { DEFAULT_IMG } from "../../constants";

function GameCards({ games }) {
    return (
        <>
            <div className={style.container}>
                {games?.map((game) => (
                    <GameCard
                        id={game.id}
                        key={game.id}
                        img={
                            game.background_image
                                ? game.background_image
                                : DEFAULT_IMG
                        }
                        name={game.name}
                        genre={
                            game.genres
                                ? game.genres?.map((el) => {
                                      return <li key={el.id}>{el.name}</li>;
                                  })
                                : game.gameGenres?.map((el) => {
                                      return <li key={el.id}>{el.name}</li>;
                                  })
                        }
                    />
                ))}
            </div>
        </>
    );
}

export default GameCards;
