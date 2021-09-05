import React from "react";
import Logo from "../Logo";
import style from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";

function NavBar() {
    return (
        <>
            <div className={style.mainContainer}>
                <nav>
                    <Logo />
                    <SearchBar />
                </nav>
            </div>
        </>
    );
}

export default NavBar;
