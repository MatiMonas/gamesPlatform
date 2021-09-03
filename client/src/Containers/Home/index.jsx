import React, { useState } from "react";
import style from "./index.module.css";
import GameCards from "../../Components/GameCards/GameCards";
import { useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";
import NavBar from "../../Components/NavBar/NavBar";

function Home() {
    const allVideogames = useSelector((state) => state.videogames);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);

    function pagination(e, num) {
        e.preventDefault();
        setCurrentPage(num);
    }

    let lastItemPerPage = currentPage * itemsPerPage; //2 * 15 --> 30
    let firstItemPerPage = lastItemPerPage - itemsPerPage; //30 - 15 --> 15
    let currentPageItems = allVideogames.slice(
        firstItemPerPage,
        lastItemPerPage
    );

    return (
        <>
            <div>
                <NavBar />
            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalGames={allVideogames.length}
                pagination={pagination}
            />

            <div className={style.mainContainer}>
                <GameCards games={currentPageItems} />
            </div>
        </>
    );
}

export default Home;
