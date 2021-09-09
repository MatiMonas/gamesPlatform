import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function Logo() {
    return (
        <Link to="/home">
            <h1 className={style.logo}>OG</h1>
        </Link>
    );
}

export default Logo;
