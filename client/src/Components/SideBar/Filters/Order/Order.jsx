import React from "react";
import style from "./OrderAZInput.module.css";

function Order({ handleOrder }) {
    return (
        <>
            <div className={style.mainContainer}>
                <h4>Order by</h4>
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
                </div>

                <div
                    className={style.radioGroup}
                    onChange={(e) => handleOrder(e)}
                >
                    {" "}
                    <h5>Rating</h5>
                    <label className={style.radio}>
                        <input type="radio" name="rating" value="asc" />
                        Most Rating
                        <span></span>
                    </label>
                    <label className={style.radio}>
                        <input type="radio" name="rating" value="des" />
                        Less Rating
                        <span></span>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Order;
