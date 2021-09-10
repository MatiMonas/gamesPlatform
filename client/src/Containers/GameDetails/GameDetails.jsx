import React from "react";
import VideogameDetail from "../../Components/VideoGameDetail/VideoGameDetail";
import NavBar from "../../Components/NavBar/NavBar";
import style from "./GameDetails.module.css";

function GameDetails() {
    return (
        <>
            <div className={style.gameDetailsMainContainer}>
                <div className={style.nav}>
                    <NavBar />
                </div>
                {/* <div className={style.detailContainer}> */}
                <VideogameDetail />
                {/* </div> */}
            </div>
        </>
    );
}

export default GameDetails;
