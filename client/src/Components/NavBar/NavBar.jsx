import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import style from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";

function NavBar() {
    return (
        <>
            <div className={style.mainContainer}>
                <nav>
                    <div>
                        <Logo />
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
