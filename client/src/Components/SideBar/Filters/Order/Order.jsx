import React from "react";
import style from "./OrderAZInput.module.css";

function Order({ handleOrder }) {
    return (
        <>
            <div className={style.mainContainer}>
                <h2>Order</h2>
                <div
                    className={style.radioGroup}
                    onChange={(e) => handleOrder(e)}
                >
                    <label className={style.radio}>
                        <input type="radio" default name="order" value="All" />
                        Default
                        <span></span>
                    </label>
                    <label className={style.radio}>
                        <input type="radio" name="order" value="AZ" />
                        Order AZ
                        <span></span>
                    </label>
                    <label className={style.radio}>
                        <input type="radio" name="order" value="ZA" />
                        Order ZA
                        <span></span>
                    </label>

                    <label className={style.radio}>
                        <input type="radio" name="order" value="asc" />
                        Most Popular
                        <span></span>
                    </label>
                    <label className={style.radio}>
                        <input type="radio" name="order" value="des" />
                        Less Popular
                        <span></span>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Order;
