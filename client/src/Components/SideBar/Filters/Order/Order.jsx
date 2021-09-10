import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    filterByGenre,
    filterByOrigin,
    noOrder,
    order,
} from "../../../../redux/actions";
import style from "./OrderAZInput.module.css";
import { BiReset } from "react-icons/bi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import {
    FaSortAlphaDown,
    FaSortNumericUp,
    FaSortAlphaUp,
    FaSortNumericDown,
} from "react-icons/fa";

function Order({ payload }) {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);

    let [radius, setRadius] = useState("");
    let [checked, setChecked] = useState([]);
    let [origin, setOrigin] = useState("");
    let [showResults, setShowResults] = useState(false);
    let [showOrigin, setShowOrigin] = useState(false);

    const handleResults = () => {
        if (showResults) return setShowResults(false);
        return setShowResults(true);
    };
    const handleOriginDisplay = () => {
        if (showOrigin) return setShowOrigin(false);
        return setShowOrigin(true);
    };

    //MANDO LA ACTION CADA VEZ QUE CAMBIA EL ESTADO
    useEffect(() => {
        dispatch(noOrder());
        dispatch(filterByOrigin(origin));
        dispatch(filterByGenre(checked));
        dispatch(order(radius));
    }, [dispatch, checked, radius, origin, payload]);

    //ORDENAMIENTOS
    const handleOrder = (e) => {
        setRadius(e.target.value);
    };

    //FILTRO POR ORIGEN
    const handleFilterOrigin = (e) => {
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
                <div className={style.orderGroup}>
                    <h2 className={style.title}>Order and Rating</h2>
                    <button
                        name="order"
                        value="AZ"
                        onClick={(e) => handleOrder(e)}
                    >
                        <FaSortAlphaDown className={style.biSort} />
                    </button>
                    <button
                        name="order"
                        value="ZA"
                        onClick={(e) => handleOrder(e)}
                    >
                        <FaSortAlphaUp className={style.biSort} />
                    </button>
                    <button
                        name="order"
                        value="asc"
                        onClick={(e) => handleOrder(e)}
                    >
                        <FaSortNumericUp className={style.biSort} />
                    </button>
                    <button
                        name="order"
                        value="des"
                        onClick={(e) => handleOrder(e)}
                    >
                        <FaSortNumericDown className={style.biSort} />
                    </button>
                    <button
                        name="order"
                        value="All"
                        onClick={(e) => handleOrder(e)}
                    >
                        <BiReset className={style.biSort} />
                    </button>
                </div>
            </div>
            <div className={style.mainContainer}>
                <div className={style.displayContainer}>
                    <div>
                        <h2 className={style.title}>Genres</h2>
                    </div>
                    <div>
                        <button onClick={handleResults}>
                            {showResults === false ? (
                                <MdExpandMore className={style.biSort} />
                            ) : (
                                <MdExpandLess className={style.biSort} />
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`${style.radioGroup} ${
                        showResults === true ? "" : style.display
                    }`}
                    onChange={handleChange}
                >
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
                <div className={style.displayContainer}>
                    <div>
                        <h2 className={style.title}>Origin</h2>
                    </div>

                    <div>
                        <button onClick={handleOriginDisplay}>
                            {showOrigin === false ? (
                                <MdExpandMore className={style.biSort} />
                            ) : (
                                <MdExpandLess className={style.biSort} />
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className={`${style.radioGroup} ${
                        showOrigin === true ? "" : style.display
                    }`}
                    onChange={(e) => handleFilterOrigin(e)}
                >
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
