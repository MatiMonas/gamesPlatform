// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function LandingPage() {
    return (
        <>
            <div className={style.container}>
                <div>SOY LANDING PAGE</div>
                <button>
                    <Link to="/home">Click</Link>
                </button>
            </div>
        </>
    );
}

export default LandingPage;
