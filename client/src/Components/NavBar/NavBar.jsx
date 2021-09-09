import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import style from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";

function NavBar() {
    return (
        <>
            <div className={style.navbar}>
                <nav>
                    <div className={style.inputContainer}>
                        <Logo />
                        <SearchBar className={style.searchBar} />

                        <Link to="/create_videogame">
                            <h2 className={style.h2}>Agregar videojuego</h2>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;
