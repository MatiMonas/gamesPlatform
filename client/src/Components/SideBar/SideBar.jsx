import React from "react";
import Genre from "./Filters/Genre/Genre";
import Order from "./Filters/Order/Order";

function SideBar({ handleOrder }) {
    return (
        <>
            <div>
                <Order handleOrder={handleOrder} />
            </div>
            <div>{/* <Genre /> */}</div>
            <div>{/* order por genero */}</div>
            <div>{/* orden por origen */}</div>
        </>
    );
}

export default SideBar;
