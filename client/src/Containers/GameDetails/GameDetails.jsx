import React from "react";
import VideogameDetail from "../../Components/VideoGameDetail/VideoGameDetail";
import NavBar from "../../Components/NavBar/NavBar";

function GameDetails() {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <VideogameDetail />
            </div>
        </>
    );
}

export default GameDetails;
