import React from "react";
import { Link } from "react-router-dom";
import style from "./GameCard.module.css";

function GameCard(props) {
    return (
        <>
            <Link to={`/details/${props.id}`}>
                <div className={style.cardContainer}>
                    <div className={style.imgContainer}>
                        <img
                            className={style.img}
                            src={props.img}
                            alt={props.name}
                        />
                    </div>
                    <div className={style.cardInfo}>
                        <div className={style.titleContainer}>
                            <h3>{props.name}</h3>
                        </div>

                        <div className={style.genresList}>
                            <div>
                                <h5>Genres</h5>
                            </div>
                            <div className={style.propsContainer}>
                                <ul className={style.gameGenres}>
                                    {props.genre}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default GameCard;
// /details/${props.id}
