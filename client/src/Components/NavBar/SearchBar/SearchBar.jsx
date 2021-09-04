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
        <div className={style.formContainer}>
            <form>
                <input
                    type="text"
                    onChange={handleChange}
                    name="search"
                    value={state.search}
                    placeholder="Search game..."
                />
                {!state.search ? (
                    <button type="submit" disabled>
                        Lets Play
                    </button>
                ) : (
                    <Link to={`/search/${state.search}`}>
                        <button onSubmit={handleSubmit} type="submit">
                            Lets Play
                        </button>
                    </Link>
                )}
            </form>
        </div>
    );
}

export default SearchBar;
