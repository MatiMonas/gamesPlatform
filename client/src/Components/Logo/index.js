import React from "react";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
            <Link to="/home">
                <h1>LOGO</h1>
            </Link>
        </div>
    );
}

export default Logo;
