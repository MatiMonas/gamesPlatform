import React from "react";
import { useSelector } from "react-redux";
import style from "./Genre.module.css";

function Genre({ handleOrder }) {
    const genres = useSelector((state) => state.genres);
    return (
        <>
            <div className={style.mainContainer}>
                <h4>Genres</h4>
                <div
                    className={style.radioGroup}
                    onChange={(e) => handleOrder(e)}
                >
                    {genres?.map((el) => (
                        <label key={el.id} className={style.radio}>
                            <input
                                type="radio"
                                default
                                name="genre"
                                value={el.id}
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

export default Genre;
