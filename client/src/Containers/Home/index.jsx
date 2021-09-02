import React, { useState } from "react";
import style from "./index.module.css";
import GameCards from "../../Components/GameCards/GameCards";
import SearchBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";

function Home() {
    const allVideogames = useSelector((state) => state.videogames);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    function pagination(e, num) {
        e.preventDefault();
        setCurrentPage(num);
    }

    let lastItemPerPage = currentPage * itemsPerPage;
    let firstItemPerPage = lastItemPerPage - itemsPerPage;
    let currentPageItems = allVideogames.slice(
        firstItemPerPage,
        lastItemPerPage
    );
    console.log(itemsPerPage, allVideogames.length);
    return (
        <>
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
