import React from "react";
import style from "./index.module.css";
import GameCards from "../../Components/GameCards/GameCards";
// import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={style.mainContainer}>
            <GameCards className={style.cardContainer} />
        </div>
    );
}

export default Home;
