import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function LandingPage() {
    return (
        <>
            <div>
                <div className={style.container}>SOY LANDING PAGE</div>
                <Link to="/home">
                    <button>Click</button>
                </Link>
            </div>
        </>
    );
}

export default LandingPage;
