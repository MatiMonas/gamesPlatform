import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { noOrder, order, orderRating } from "../../redux/actions";
import GameCards from "../../Components/GameCards/GameCards";
import Pagination from "../../Components/Pagination/Pagination";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import style from "./index.module.css";

function Home() {
    const dispatch = useDispatch();
    const filteredVideogames = useSelector((state) => state.filteredVideogames);
    const [, setOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);

    let lastItemPerPage = currentPage * itemsPerPage; //1 * 15 --> 15
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
        if (e.target.value === "AZ" || e.target.value === "ZA")
            dispatch(order(e.target.value));

        if (e.target.value === "asc" || e.target.value === "des")
            dispatch(orderRating(e.target.value));

        setCurrentPage(1);
        setOrder(e.target.value);
    };

    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.navContainer}>
                    <NavBar />

                    <div>
                        <Link to="/create_videogame">
                            <h2>Agregar videojuego</h2>
                        </Link>
                    </div>
                </div>
                <div className={style.bodyContainer}>
                    <div className={style.sideBar}>
                        <SideBar handleOrder={handleOrder} />
                    </div>

                    <div className={style.body}>
                        {!filteredVideogames.length ? (
                            <div className={style.contentContainer}>
                                <h1>Cargando...</h1>
                            </div>
                        ) : (
                            <div className={style.contentContainer}>
                                <div className={style.pages}>
                                    <Pagination
                                        itemsPerPage={itemsPerPage}
                                        totalGames={filteredVideogames?.length}
                                        pagination={pagination}
                                    />
                                </div>

                                <GameCards games={currentPageItems} />
                                <div className={style.pages2}>
                                    <Pagination
                                        itemsPerPage={itemsPerPage}
                                        totalGames={filteredVideogames?.length}
                                        pagination={pagination}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
