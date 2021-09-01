import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

function LandingPage() {
    return (
        <>
            <div>
                <div className={style.container}>SOY LANDING PAGE</div>
                <button>
                    <Link to="/home">Click</Link>
                </button>
            </div>
        </>
    );
}

export default LandingPage;
