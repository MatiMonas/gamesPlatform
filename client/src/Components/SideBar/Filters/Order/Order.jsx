import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByGenre,
    filterByOrigin,
    noOrder,
    order,
} from "../../../../redux/actions";
import style from "./OrderAZInput.module.css";

function Order() {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);
    let [checked, setChecked] = useState([]);
    let [radius, setRadius] = useState("");
    let [origin, setOrigin] = useState("");

    //MANDO LA ACTION CADA VEZ QUE CAMBIA EL ESTADO
    useEffect(() => {
        dispatch(noOrder());
        dispatch(filterByOrigin(origin));
        dispatch(filterByGenre(checked));
        dispatch(order(radius));
    }, [dispatch, checked, radius, origin]);

    //ORDENAMIENTOS
    const handleOrder = (e) => {
        // dispatch(noOrder());
        // if (e.target.value === "All") dispatch(noOrder());
        dispatch(order(e.target.value));

        setRadius(e.target.value);
    };

    //FILTRO POR ORIGEN
    const handleFilterOrigin = (e) => {
        // dispatch(noOrder());
        // dispatch(filterByOrigin(e.target.value));
        setOrigin(e.target.value);
    };

    //ESCUCHA ESTADO DE CHECKBOX
    function handleChange(e) {
        const currentIndex = checked.indexOf(e.target.value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(e.target.value);
            setChecked(newChecked);
        } else {
            setChecked(
                (checked = checked.filter((el) => {
                    return e.target.value !== el;
                }))
            );
        }
    }

    return (
        <>
            <div className={style.mainContainer}>
                <div
                    className={style.radioGroup}
                    onChange={(e) => handleOrder(e)}
                >
                    <label className={style.radio}>
                        <input type="radio" name="order" value="All" />
                        Reset All Filters
                        <span></span>
                    </label>
                    <h2>Order and Rating</h2>
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
            <div className={style.mainContainer}>
                <h2>Genres</h2>
                <div className={style.radioGroup} onChange={handleChange}>
                    {genres?.map((el) => (
                        <label key={el.id} className={style.radio}>
                            <input
                                type="checkbox"
                                default
                                name="genre"
                                value={el.name}
                            />
                            {el.name}
                            <span></span>
                        </label>
                    ))}
                </div>
            </div>
            <div className={style.mainContainer}>
                <div
                    className={style.radioGroup}
                    onChange={(e) => handleFilterOrigin(e)}
                >
                    <h2>Origin</h2>
                    <label className={style.radio}>
                        <input type="radio" default name="origin" value="All" />
                        All
                        <span></span>
                    </label>
                    <label className={style.radio}>
                        <input type="radio" name="origin" value="created" />
                        Created
                        <span></span>
                    </label>
                    <label className={style.radio}>
                        <input type="radio" name="origin" value="api" />
                        Existant
                        <span></span>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Order;
