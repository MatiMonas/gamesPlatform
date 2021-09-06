import React from "react";
import Order from "./Filters/Order/Order";

function SideBar({ handleOrder }) {
    return (
        <>
            <div>
                <Order handleOrder={handleOrder} />
            </div>
        </>
    );
}

export default SideBar;
