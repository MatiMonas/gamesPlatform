import React from "react";
import style from "./OrderAZInput.module.css";

function Order({ handleOrder }) {
    return (
        <>
            <div className={style.mainContainer}>
                <h4>Order</h4>
                <div
                    className={style.radioGroup}
                    onChange={(e) => handleOrder(e)}
                >
                    <label className={style.radio}>
                        <input type="radio" default name="order" value="All" />
                        No order
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
                        Most Rating
                        <span></span>
                    </label>
                    <label className={style.radio}>
                        <input type="radio" name="order" value="des" />
                        Less Rating
                        <span></span>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Order;
