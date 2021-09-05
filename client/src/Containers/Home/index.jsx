import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    orderAz,
    orderZa,
    moreRating,
    lessRating,
    noOrder,
} from "../../redux/actions";
import GameCards from "../../Components/GameCards/GameCards";
import Pagination from "../../Components/Pagination/Pagination";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import style from "./index.module.css";
// import OrderRating from "../../Components/Filters/OrderRating/OrderRating";

function Home() {
    const dispatch = useDispatch();
    const filteredVideogames = useSelector((state) => state.filteredVideogames);
    // const genres = useSelector((state) => state.genres);
    const [, setOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);

    let lastItemPerPage = currentPage * itemsPerPage; //2 * 15 --> 30
    let firstItemPerPage = lastItemPerPage - itemsPerPage; //30 - 15 --> 15
    let currentPageItems = filteredVideogames?.slice(
        firstItemPerPage,
        lastItemPerPage
    );

    function pagination(e, num) {
        e.preventDefault();
        setCurrentPage(num);
    }
    const handleOrder = (e) => {
        if (e.target.value === "All") dispatch(noOrder());
        if (e.target.value === "AZ") dispatch(orderAz(e.target.value));
        if (e.target.value === "ZA") dispatch(orderZa(e.target.value));
        if (e.target.value === "asc") dispatch(moreRating(e.target.value));
        if (e.target.value === "des") dispatch(lessRating(e.target.value));

        setCurrentPage(1);
        setOrder(e.target.value);
    };

    return (
        <>
            <div className={style.mainContainer}>
                <div>
                    <NavBar />
                    <SideBar handleOrder={handleOrder} />
                    <div>
                        <Link to="/create_videogame">
                            <h1>Agregar videojuego</h1>
                        </Link>
                    </div>
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalGames={filteredVideogames?.length}
                        pagination={pagination}
                    />

                    <GameCards games={currentPageItems} />
                </div>
            </div>
        </>
    );
}

export default Home;
