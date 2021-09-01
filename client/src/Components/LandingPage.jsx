// import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <>
            <div>SOY LANDING PAGE</div>
            <button>
                <Link to="/home">Click</Link>
            </button>
        </>
    );
}

export default LandingPage;
