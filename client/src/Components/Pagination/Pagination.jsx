import React from "react";
import style from "./Pagination.module.css";

export default function Pagination({ itemsPerPage, totalGames, pagination }) {
    /*----------------PAGINACION---------------*/
    const pages = []; // 120         15
    const numOfPages = Math.ceil(totalGames / itemsPerPage); // 8

    for (let i = 1; i <= numOfPages; i++) {
        pages.push(i);
    }

    return (
        <nav className={style.pag}>
            {" "}
            {pages.map((num) => (
                <div key={num} className={style.item}>
                    <button onClick={(e) => pagination(e, num)}>{num}</button>
                </div>
            ))}
        </nav>
    );
}
