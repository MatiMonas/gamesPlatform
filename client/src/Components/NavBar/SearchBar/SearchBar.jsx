import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";

function SearchBar() {
    const [state, setState] = useState({
        search: "",
    });

    function handleChange(e) {
        //creacion de nuevo estado
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setState(() => ({
            search: "",
        }));
    }
    return (
        <div className={style.container}>
            <form style={{ width: "50vw" }}>
                <input
                    className={style.searchBar}
                    type="text"
                    onChange={handleChange}
                    name="search"
                    id="search"
                    autoComplete="off"
                    value={state.search}
                    placeholder="Search games"
                />
                {/* <label htmlFor="search" className={style.label}>
                    Search Game
                </label> */}
                {!state.search ? (
                    <button className={style.button} type="submit" disabled>
                        Lets Play
                    </button>
                ) : (
                    <Link to={`/search/${state.search}`}>
                        <button
                            className={style.button}
                            onSubmit={handleSubmit}
                            type="submit"
                        >
                            Lets Play
                        </button>
                    </Link>
                )}
            </form>
        </div>
    );
}

export default SearchBar;
