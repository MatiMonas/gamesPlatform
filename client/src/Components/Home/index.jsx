import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterByOrigin, noOrder, order } from "../../redux/actions";
import GameCards from "../GameCards/GameCards";
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import style from "./index.module.css";
import CustomScrollDiv from "../CustomScrollDiv/CustomScrollDiv";

function Home() {
    const dispatch = useDispatch();
    const filteredVideogames = useSelector((state) => state.filteredVideogames);
    const [, setOrder] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);
    let [radius, setRadius] = useState("");

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredVideogames]);

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

    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.navContainer}>
                    <NavBar />

                    <div>
                        <Link to="/create_videogame">
                            <h2 classname={style.h2}>Agregar videojuego</h2>
                        </Link>
                    </div>
                </div>
                <div className={style.bodyContainer}>
                    <div className={style.sideBar}>
                        <SideBar />
                    </div>

                    <div className={style.body}>
                        <CustomScrollDiv>
                            {!filteredVideogames.length ? (
                                <div className={style.contentContainer}>
                                    <h1>Cargando...</h1>
                                </div>
                            ) : (
                                <div className={style.contentContainer}>
                                    <div className={style.painationContainer}>
                                        <Pagination
                                            itemsPerPage={itemsPerPage}
                                            totalGames={
                                                filteredVideogames?.length
                                            }
                                            pagination={pagination}
                                        />
                                    </div>
                                    <div className={style.gameCardsContainer}>
                                        <GameCards games={currentPageItems} />
                                    </div>
                                </div>
                            )}
                        </CustomScrollDiv>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
