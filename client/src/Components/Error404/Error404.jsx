import React from "react";
import { Link } from "react-router-dom";

export const Error404 = () => {
    return (
        <>
            <div>
                <h3>Error404</h3>
                <p>Not found</p>
                <Link to="/home">
                    <h1>Start Over</h1>
                </Link>
            </div>
        </>
    );
};
