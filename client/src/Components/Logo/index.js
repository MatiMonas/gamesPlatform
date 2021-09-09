import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { noOrder } from "../../redux/actions";
import style from "./index.module.css";

function Logo() {
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(noOrder());
    }

    return (
        <Link to="/home">
            <h1 onClick={handleClick} className={style.logo}>
                OG
            </h1>
        </Link>
    );
}

export default Logo;
