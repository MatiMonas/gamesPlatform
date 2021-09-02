import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";

function NavBar() {
    return (
        <>
            <div className={style.mainContainer}>
                <nav>
                    <div>
                        <Link to="/home">
                            <h1>LOGO</h1>
                        </Link>
                    </div>
                    <div>
                        <SearchBar />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
