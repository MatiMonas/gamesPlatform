import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import GameCards from "../../Components/GameCards/GameCards";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";
import NavBar from "../../Components/NavBar/NavBar";
import { Link } from "react-router-dom";
import Order from "../../Components/Filters/Order/Order";
import {
    getGames,
    getGenres,
    orderAz,
    orderZa,
    moreRating,
    lessRating,
} from "../../redux/actions";
// import OrderRating from "../../Components/Filters/OrderRating/OrderRating";

function Home() {
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.videogames);
    // const genres = useSelector((state) => state.genres);
    const [order, setOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);

    let lastItemPerPage = currentPage * itemsPerPage; //2 * 15 --> 30
    let firstItemPerPage = lastItemPerPage - itemsPerPage; //30 - 15 --> 15
    let currentPageItems = videogames.slice(firstItemPerPage, lastItemPerPage);

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    function pagination(e, num) {
        e.preventDefault();
        setCurrentPage(num);
    }
    const handleOrder = (e) => {
        if (e.target.value === "All") dispatch(getGames());
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
                <NavBar />
                <Order handleOrder={handleOrder} />
                <div>
                    <Link to="/create_videogame">
                        <h1>Agregar videojuego</h1>
                    </Link>
                </div>
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalGames={videogames.length}
                    pagination={pagination}
                />

                <GameCards games={currentPageItems} />
            </div>
        </>
    );
}

export default Home;
