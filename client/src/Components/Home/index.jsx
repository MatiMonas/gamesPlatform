import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GameCards from "../GameCards/GameCards";
import Pagination from "../Pagination/Pagination";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import style from "./index.module.css";
import CustomScrollDiv from "../CustomScrollDiv/CustomScrollDiv";
import Loading from "../Loading/Loading";

function Home() {
    const filteredVideogames = useSelector((state) => state.filteredVideogames);
    const games = useSelector((state) => state.videogames);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(15);
    const [pagesNumberLimit] = useState(5);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    let lastItemPerPage = currentPage * itemsPerPage; //1 * 15 --> 15
    let firstItemPerPage = lastItemPerPage - itemsPerPage; //30 - 15 --> 15
    let currentPageItems = filteredVideogames?.slice(
        firstItemPerPage,
        lastItemPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredVideogames]);

    function pagination(e, num) {
        e.preventDefault();
        setCurrentPage(num);
    }

    return (
        <>
            <div className={style.mainContainer}>
                <div className={style.navContainer}>
                    <NavBar />
                </div>
                <div className={style.bodyContainer}>
                    <div className={style.sideBar}>
                        <SideBar />
                    </div>

                    <div className={style.body}>
                        <div className={style.painationContainer}>
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                totalGames={filteredVideogames?.length}
                                pagination={pagination}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                pagesNumberLimit={pagesNumberLimit}
                                maxPageNumberLimit={maxPageNumberLimit}
                                setMaxPageNumberLimit={setMaxPageNumberLimit}
                                minPageNumberLimit={minPageNumberLimit}
                                setMinPageNumberLimit={setMinPageNumberLimit}
                            />
                        </div>
                        {!games.length ? (
                            <div className={style.contentContainer}>
                                <Loading />
                            </div>
                        ) : !filteredVideogames.length ? (
                            <div className={style.contentContainer}>
                                <h1>No games found with that</h1>
                            </div>
                        ) : (
                            <CustomScrollDiv>
                                <div className={style.contentContainer}>
                                    <div className={style.gameCardsContainer}>
                                        <GameCards games={currentPageItems} />
                                    </div>
                                </div>
                            </CustomScrollDiv>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
