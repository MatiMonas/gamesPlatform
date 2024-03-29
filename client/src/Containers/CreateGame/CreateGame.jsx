import React, { useEffect, useState } from "react";
import style from "./CreateGame.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGames, postGame } from "../../redux/actions";
import starRating from "../../Utils/Functions/starRating";
import Logo from "../../Components/Logo";
import { v4 as uuid_v4 } from "uuid";
// import { Link } from "react-router-dom";

function CreateGame() {
    const { push } = useHistory();
    const dispatch = useDispatch();

    const [videogame, setVideogame] = useState({
        name: "",
        description: "",
        background_image: "",
        releaseDate: "",
        rating: 0,
    });

    const [error, setError] = useState({
        name_error: "",
        background_image_error: "",
        description_error: "",
        releaseDate_error: "",
    });

    let [checkedGenres, setCheckedGenres] = useState([]);
    let [checkedPlatforms, setCheckedPlatforms] = useState([]);
    let [showResults] = useState(false);
    const [stars, setStars] = useState([]);
    const [button, setButton] = useState(true);
    const genres = useSelector((state) => state.genres);

    /*----------------USE EFFECTS---------------*/

    //Listens the change on the stars state to map that number
    useEffect(() => setStars(starRating(videogame.rating)), [videogame.rating]);

    //If videogame state has some fake values, submit button will be disabled
    useEffect(() => {
        if (
            videogame.name &&
            videogame.description &&
            videogame.background_image &&
            videogame.releaseDate &&
            videogame.rating &&
            checkedGenres.length &&
            checkedPlatforms.length &&
            !error.background_image_error
        )
            setButton(false);
        // if (error.background_image_error) setButton(true);
        else setButton(true);
    }, [videogame, error, checkedGenres, checkedPlatforms]);

    /*-------------------------------------------*/

    //Converting the array of number(ids) to an array of string
    let genresResult = Array.from(checkedGenres.toString()).filter(
        (el) => el !== ","
    );

    let otherPlatforms = [
        "Android",
        "Nintendo Switch",
        "PC",
        "PlayStation 3",
        "PlayStation 4",
        "PlayStation 5",
        "Xbox 360",
        "Xbox Series",
        "iOs",
        "Nintendo Wii",
    ];
    let result = [...otherPlatforms];

    /*----------------VALIDATION---------------*/

    function formValidation(state) {
        let validateUrl =
            /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

        let error = {};

        if (!validateUrl.test(state.background_image)) {
            error.background_image_error = "Insert a valid URL.";
        }

        // if (!videogame.name.length) {
        //     error.name_error = "Videogame name is required.";
        // }
        // if (!videogame.description) {
        //     error.description_error = "Videogame description is required.";
        // }
        // if (!videogame.releaseDate) {
        //     error.releaseDate_error = "Videogame release date is required.";
        // }
        // if (!videogame.rating) {
        //     error.rating_error = "Videogame rating is required.";
        // }

        return error;
    }

    /*----------------HANDLERS---------------*/

    function handleChange(e) {
        setVideogame((prevState) => {
            let newState = {
                ...prevState,
                [e.target.name]: e.target.value,
            };
            setError(formValidation(newState));
            return newState;
        });
        //Converting the first letter of videogameName to uppercase
        if (videogame.name) {
            videogame.name =
                videogame.name[0].toUpperCase() + videogame.name.substring(1);
        }
    }

    function handleCheckboxGenres(e) {
        const currentIndex = checkedGenres.indexOf(e.target.value);
        const newChecked = [...checkedGenres];

        if (currentIndex === -1) {
            newChecked.push(e.target.value);
            setCheckedGenres(newChecked);
        } else {
            setCheckedGenres(
                (checkedGenres = checkedGenres.filter((el) => {
                    return e.target.value !== el;
                }))
            );
        }
    }
    function handleCheckboxPlatforms(e) {
        const currentIndex = checkedPlatforms.indexOf(e.target.value);
        const newChecked = [...checkedPlatforms];

        if (currentIndex === -1) {
            newChecked.push(e.target.value);
            setCheckedPlatforms(newChecked);
        } else {
            setCheckedPlatforms(
                (checkedPlatforms = checkedPlatforms.filter((el) => {
                    return e.target.value !== el;
                }))
            );
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newGame = {
            id: uuid_v4(),
            name: videogame.name,
            description: videogame.description,
            background_image: videogame.background_image,
            releaseDate: videogame.releaseDate,
            rating: videogame.rating,
            genres: genresResult,
            platforms: checkedPlatforms,
        };

        //posting the game
        dispatch(postGame(newGame));
        dispatch(getGames());
        alert("Game created with success");
        setTimeout(() => push(`/details/${newGame.id}`), 1000);
    }

    return (
        <>
            <div className={style.mainContainer}>
                <Logo />

                <div className={style.container}>
                    <div className={style.h1}>
                        <h1>Create videogame</h1>
                    </div>
                    <div className={style.formContainer}>
                        <p className={style.required}>*required</p>
                        <form className={style.form} onSubmit={handleSubmit}>
                            <div className={style.imgContainer}>
                                <p>Image Preview</p>
                                <img
                                    className={`${style.img} || ${
                                        !videogame.background_image
                                            ? style.disabled
                                            : ""
                                    }`}
                                    src={videogame.background_image}
                                    alt=""
                                />
                            </div>

                            <div className={style.division}>
                                <div className={style.inputContainer}>
                                    <div className={style.dateNameContainer}>
                                        <div className={style.nameContainer}>
                                            <h2 className={style.title}>
                                                Videogame Name*
                                            </h2>
                                            <div>
                                                <input
                                                    style={{ color: "black" }}
                                                    type="text"
                                                    name="name"
                                                    autoComplete="off"
                                                    value={videogame.name}
                                                    onChange={handleChange}
                                                    required
                                                    className={style.inputs}
                                                />
                                            </div>
                                            {/* <p className={style.error}>
                                                {error.name_error}
                                            </p> */}
                                        </div>
                                        <div className={style.dateContainer}>
                                            <div>
                                                <h2 className={style.title}>
                                                    Release date*
                                                </h2>
                                                <div>
                                                    <input
                                                        style={{
                                                            color: "black",
                                                        }}
                                                        name="releaseDate"
                                                        type="date"
                                                        value={
                                                            videogame.releaseDate
                                                        }
                                                        onChange={handleChange}
                                                        required
                                                        className={style.inputs}
                                                    ></input>
                                                </div>
                                            </div>
                                            {/* <p className={style.error}>
                                                {error.releaseDate_error}
                                            </p> */}
                                        </div>
                                    </div>
                                    <div className={style.descrImageContainer}>
                                        <div
                                            className={
                                                style.descriptionContainer
                                            }
                                        >
                                            <h2 className={style.title}>
                                                Description*
                                            </h2>
                                            <div>
                                                <textarea
                                                    style={{ color: "black" }}
                                                    name="description"
                                                    value={
                                                        videogame.description
                                                    }
                                                    maxLength="1000"
                                                    onChange={handleChange}
                                                    rows="5"
                                                    required
                                                    className={style}
                                                ></textarea>
                                            </div>
                                            {/* <p className={style.error}>
                                                {error.description_error}
                                            </p> */}
                                        </div>
                                        <div className={style.imageContainer}>
                                            <h2 className={style.title}>
                                                URL Image*
                                            </h2>
                                            <div>
                                                <input
                                                    style={{ color: "black" }}
                                                    type="text"
                                                    autoComplete="off"
                                                    name="background_image"
                                                    value={
                                                        videogame.background_image
                                                    }
                                                    onChange={handleChange}
                                                    required
                                                    className={style.inputs}
                                                />
                                            </div>
                                            <p className={style.error}>
                                                {error.background_image_error}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.rating}>
                                        <h2 className={style.title}>
                                            {" "}
                                            Rating*
                                        </h2>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignContent: "center",
                                                paddingBottom: "1em",
                                            }}
                                        >
                                            <input
                                                type="range"
                                                min="0"
                                                max="5"
                                                step="0.5"
                                                name="rating"
                                                value={videogame.rating}
                                                onChange={handleChange}
                                                required
                                            />
                                            {stars?.map((p, i) => (
                                                <FontAwesomeIcon
                                                    icon={p}
                                                    key={i}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={style.checkContainer}>
                                    <div className={style.displayContainer}>
                                        <div>
                                            <h2 className={style.title}>
                                                Genres*
                                            </h2>
                                        </div>
                                    </div>
                                    <div
                                        className={`${style.radioGroup} ${
                                            showResults === true
                                                ? ""
                                                : style.display
                                        }`}
                                        onChange={handleCheckboxGenres}
                                    >
                                        {genres?.map((el) => (
                                            <label
                                                key={el.id}
                                                className={style.radio}
                                            >
                                                <input
                                                    type="checkbox"
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
                                <div className={style.checkContainer}>
                                    <div className={style.displayContainer}>
                                        <div>
                                            <h2 className={style.title}>
                                                Platforms*
                                            </h2>
                                        </div>
                                    </div>
                                    <div
                                        className={`${style.radioGroup}
                                           `}
                                        onChange={handleCheckboxPlatforms}
                                    >
                                        {result?.map((el) => (
                                            <label
                                                key={el}
                                                className={style.radio}
                                            >
                                                <input
                                                    type="checkbox"
                                                    default
                                                    name="platforms"
                                                    value={el}
                                                />
                                                {el}
                                                <span></span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${style.buttonContainer} ${
                                    button === true ? style.hide : ""
                                }`}
                                onClick={handleSubmit}
                            >
                                <div className={`${style.button} `}>
                                    <span>Create Videogame</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateGame;
