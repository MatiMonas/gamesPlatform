import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions/index";
import { Link } from "react-router-dom";

import style from "./NavBar.module.css";

function NavBar() {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        search: "",
    });

    function handleChange(e) {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        return await dispatch(searchByName(state.search));
    }
    return (
        <>
            <div className={style.formContainer}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="search"
                        value={state.search}
                    />
                    <Link to={`/search/${state.search}`}>
                        <button type="submit">Lets Play</button>
                    </Link>
                </form>
            </div>
        </>
    );
}

export default NavBar;
