import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByGenre, noOrder } from "../../../../redux/actions";
import style from "./OrderAZInput.module.css";

function Order({ handleOrder }) {
    const dispatch = useDispatch();
    // const videoGames = useSelector((state) => state.videogames);
    const genres = useSelector((state) => state.genres);
    // let [videogames, setVideogames] = useState([]);
    let [checked, setChecked] = useState([]);

    //MANDO LA ACTION CADA VEZ QUE CAMBIA EL ESTADO
    useEffect(() => {
        dispatch(noOrder());
        dispatch(filterByGenre(checked));
        // setVideogames(videoGames);
    }, [dispatch, checked]);

    //SETEO LOS CHECKED

    function handleClick(e) {
        e.preventDefault();
        dispatch(noOrder());
    }

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
                <button onClick={handleClick} name="order" value="All">
                    Reset
                </button>
                <div
                    className={style.radioGroup}
                    onChange={(e) => handleOrder(e)}
                >
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
        </>
    );
}

export default Order;
