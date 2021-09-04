import React from "react";
import { Link } from "react-router-dom";
import style from "./GameCard.module.css";

function GameCard(props) {
    return (
        <>
            <div className={style.cardContainer}>
                <Link to={`/details/${props.id}`}>
                    <div className={style.titleContainer}>
                        <h3>{props.name}</h3>
                    </div>

                    <div className={style.imageContainer}>
                        <div className={style.backgroundImage}>
                            <img src={props.img} alt={props.name} />
                        </div>
                    </div>
                    <div className={style.propsContainer}>
                        <div className={style.genreContainer}>
                            <ul className={style.genresList}>
                                <p className={style.gameGenres}>
                                    {props.genre}
                                </p>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default GameCard;
