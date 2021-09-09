import React from "react";
import style from "./Pagination.module.css";

export default function Pagination({
    itemsPerPage,
    totalGames,
    pagination,
    setCurrentPage,
    currentPage,
    maxPageNumberLimit,
    setMaxPageNumberLimit,
    pagesNumberLimit,
    setMinPageNumberLimit,
    minPageNumberLimit,
}) {
    /*----------------PAGINACION---------------*/
    const pages = []; // 120         15
    const numOfPages = Math.ceil(totalGames / itemsPerPage); // 8

    for (let i = 1; i <= numOfPages; i++) {
        pages.push(i);
    }

    function handlePrevClick() {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pagesNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pagesNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pagesNumberLimit);
        }
    }
    function handleNextClick() {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pagesNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pagesNumberLimit);
        }
    }

    const renderPage = pages.map((num) => {
        if (num < maxPageNumberLimit + 1 && num > minPageNumberLimit) {
            return (
                <li className={style.li}>
                    <div key={num} className={style.item}>
                        <button
                            onClick={(e) => pagination(e, num)}
                            className={currentPage === num ? style.active : ""}
                        >
                            {num}
                        </button>
                    </div>
                </li>
            );
        }
        return null;
    });

    return (
        <div className={style.pag}>
            <div className={style.liContainer}>
                <div>
                    <button
                        onClick={handlePrevClick}
                        disabled={currentPage === pages[0] ? true : false}
                        className={
                            currentPage === pages[0] ? style.display : ""
                        }
                    >
                        Prev
                    </button>
                </div>
                <ul>{renderPage}</ul>
                <div>
                    <button
                        onClick={handleNextClick}
                        disabled={
                            currentPage === pages[pages.length - 1]
                                ? true
                                : false
                        }
                        className={
                            currentPage === pages[pages.length - 1]
                                ? style.display
                                : ""
                        }
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
