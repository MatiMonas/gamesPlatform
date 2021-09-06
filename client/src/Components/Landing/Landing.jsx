import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function LandingPage() {
    return (
        <div className={style.background_image}>
            <div className={style.mainContainer}>
                <div className={style.container}>
                    <h1 className={style.title}>ONLY GAMES</h1>
                    <h2 className={style.subtitle}>WHERE GAMERS ARE BORN</h2>
                </div>
                <div className={style.buttonContainer}>
                    <Link to="/home">
                        <button className={style.boton2}>Start</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
