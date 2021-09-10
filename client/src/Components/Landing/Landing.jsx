import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function LandingPage() {
    return (
        <div className={style.background_image}>
            <div className={style.filter}></div>
            <div className={style.mainContainer}>
                <div className={style.container}>
                    <div className={style.textContainer}>
                        <h1 className={style.title}>ONLY GAMES</h1>
                        <h2 className={style.subtitle}>
                            WHERE GAMERS ARE BORN
                        </h2>
                    </div>
                    <div className={style.buttonContainer}>
                        <Link to="/home">
                            <div className={style.boton2}>
                                <span>Start</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;

{
    /* <div class="box-2">
    <div class="btn btn-two">
        <span>HOVER ME</span>
    </div>
</div>; */
}
