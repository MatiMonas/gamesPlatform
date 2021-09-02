import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GameCards from "../../Components/GameCards/GameCards";
import NavBar from "../../Components/NavBar/NavBar";
import Pagination from "../../Components/Pagination/Pagination";
import { searchByName } from "../../redux/actions";
import style from "./GamesByName.module.css";

function GamesByName() {
    const dispatch = useDispatch();
    let { name } = useParams();
    const videogameNames = useSelector((state) => state.searchByName);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);

    let lastItemPerPage = currentPage * itemsPerPage;
    let firstItemPerPage = lastItemPerPage - itemsPerPage;
    let currentPageItems = videogameNames.slice(
        firstItemPerPage,
        lastItemPerPage
    );

    useEffect(() => {
        dispatch(searchByName(name));
    }, [dispatch, name]);

    function pagination(e, num) {
        e.preventDefault();
        setCurrentPage(num);
    }

    return (
        <div>
            <NavBar />
            <Pagination
                itemsPerPage={itemsPerPage}
                totalGames={videogameNames.length}
                pagination={pagination}
            />
            <div className={style.mainContainer}>
                <GameCards games={currentPageItems} />
            </div>
        </div>
    );
}

export default GamesByName;
