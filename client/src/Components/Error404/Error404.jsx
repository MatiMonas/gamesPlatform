import React from "react";
import { Link } from "react-router-dom";
import gif from "./gif.gif";
import style from "./Error404.module.css";

export const Error404 = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.infoContainer}>
                    <div className={style.textContainer}>
                        <h1>
                            Error 404: the page you are looking for is lost in
                            the oblivion.
                        </h1>
                    </div>

                    <div className={style.gifContainer}>
                        <img src={gif} alt="No found gif" />
                    </div>

                    <div className={style.buttonContainer}>
                        <Link to="/home">
                            <div className={style.boton2}>
                                <span>Go to Start</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
