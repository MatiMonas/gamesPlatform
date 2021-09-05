import React, { useEffect, useState } from "react";
import style from "./OrderAZInput.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, orderAz, orderZa } from "../../../redux/actions";

function Order() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    const handleOrder = (e) => {
        if (e.target.value === "AZ") {
            dispatch(orderAz(e.target.value));
        } else if (e.target.value === "ZA") {
            dispatch(orderZa(e.target.value));
        }
    };

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
                    <label className={style.radio} l>
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
