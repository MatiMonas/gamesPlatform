import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar";
import style from "./CreateGame.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { GENRES_URL } from "../../constants";
import { PLATFORMS_URL } from "../../constants";
import { useDispatch } from "react-redux";
import { getGames, postGame } from "../../redux/actions";
import starRating from "../../Utils/Functions/starRating";
import Logo from "../../Components/Logo";
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
        genres: [],
        platforms: [],
    });

    const [error, setError] = useState({
        background_image_error: "",
    });

    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [stars, setStars] = useState([]);
    const [button, setButton] = useState(true);

    /*----------------USE EFFECTS---------------*/

    //Listens the change on the stars state to map that number
    useEffect(() => setStars(starRating(videogame.rating)), [videogame.rating]);

    useEffect(() => {
        axios
            .get(GENRES_URL)
            .then((response) => {
                setGenres(response.data);
            })
            .catch((err) => {
                throw new Error(err);
            });

        axios
            .get(PLATFORMS_URL)
            .then((response) => {
                setPlatforms(response.data);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, []);

    //If videogame state has some fakse values, submit button will be disabled
    useEffect(() => {
        if (
            videogame.name &&
            videogame.description &&
            videogame.background_image &&
            videogame.releaseDate &&
            videogame.rating &&
            videogame.genres.length &&
            videogame.platforms.length &&
            !error.background_image_error
        )
            setButton(false);
        // if (error.background_image_error) setButton(true);
        else setButton(true);
    }, [videogame, error]);

    /*----------------FUNCTIONS---------------*/

    function addGenreToVideogame(id) {
        setVideogame({
            ...videogame,
            genres: [...videogame.genres, id],
        });
    }
    function addPlatformToVideogame(name) {
        setVideogame({
            ...videogame,
            platforms: [...videogame.platforms, name],
        });
    }

    /*----------------TRANSFORMATIONS---------------*/

    //Converting the array of number(ids) to an array of string
    let genresResult = Array.from(videogame.genres.toString()).filter(
        (el) => el !== ","
    );

    //Doing a map from platforms, filtering the repeated values with a set and making it an array to iterate the values
    let otherPlatforms = ["iOs", "PlayStation 3", "Xbox Series"];
    const platformNames = platforms.map((e) => e.name);
    const data = new Set(platformNames);
    let result = [...data, ...otherPlatforms].sort();

    /*----------------HANDLERS---------------*/

    function validateImage(state) {
        let validateUrl =
            /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

        let error = {};

        if (!validateUrl.test(state.background_image)) {
            error.background_image_error = "Insert a valid URL";
        }

        return error;
    }

    function handleChange(e) {
        if (e.target.name === "genres" || e.target.name === "platforms") {
            let concatValues = videogame[e.target.name];
            setVideogame((prevState) => ({
                ...prevState,
                [e.target.name]: [...concatValues, ...e.target.value],
            }));
        } else {
            setVideogame((prevState) => {
                let newState = {
                    ...prevState,
                    [e.target.name]: e.target.value,
                };
                setError(validateImage(newState));
                return newState;
            });
            //Converting the first letter of videogameName to uppercase
            if (videogame.name) {
                videogame.name =
                    videogame.name[0].toUpperCase() +
                    videogame.name.substring(1);
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newGame = {
            name: videogame.name,
            description: videogame.description,
            background_image: videogame.background_image,
            releaseDate: videogame.releaseDate,
            rating: videogame.rating,
            genres: genresResult,
            platforms: videogame.platforms,
        };

        //posting the game
        dispatch(postGame(newGame));
        dispatch(getGames());
        push(`/home`);
    }

    return (
        <>
            <div className={style.mainContainer}>
                <Logo />
                <div>
                    <h1>CREA TU VIDEOJUEGO</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label>Videogame Name*</label>
                                <div>
                                    <input
                                        style={{ color: "black" }}
                                        type="text"
                                        name="name"
                                        value={videogame.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Release date*</label>
                                    <div>
                                        <input
                                            style={{ color: "black" }}
                                            name="releaseDate"
                                            type="date"
                                            value={videogame.releaseDate}
                                            onChange={handleChange}
                                            required
                                        ></input>
                                    </div>
                                </div>
                                <label>Description*</label>
                                <div>
                                    <textarea
                                        style={{ color: "black" }}
                                        name="description"
                                        value={videogame.description}
                                        onChange={handleChange}
                                        cols="30"
                                        rows="10"
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div>
                                <label>URL Image*</label>
                                <div>
                                    <input
                                        style={{ color: "black" }}
                                        type="text"
                                        name="background_image"
                                        value={videogame.background_image}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={style.rating}>
                                <label> Rating*</label>
                                <div>
                                    <input
                                        style={{ color: "black" }}
                                        type="range"
                                        min="0"
                                        max="5"
                                        step="0.5"
                                        name="rating"
                                        value={videogame.rating}
                                        onChange={handleChange}
                                        required
                                    />
                                    {stars?.map((p) => (
                                        <FontAwesomeIcon icon={p} />
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: "flex" }}>
                                <label>
                                    <b>Genres*</b>
                                </label>
                                {genres.map((genre) => {
                                    return (
                                        <div
                                            key={genre.id}
                                            style={{ display: "flex" }}
                                        >
                                            <p>{genre.name}</p>
                                            <button
                                                disabled={videogame?.genres?.find(
                                                    (element) =>
                                                        element === genre.id
                                                )}
                                                onClick={() =>
                                                    addGenreToVideogame(
                                                        genre.id
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                            <div style={{ display: "flex" }}>
                                <label>
                                    <b>Platforms*</b>
                                </label>
                                {result.map((plat) => {
                                    return (
                                        <div
                                            key={plat}
                                            style={{ display: "flex" }}
                                        >
                                            <p>{plat}</p>
                                            <button
                                                disabled={videogame?.platforms?.find(
                                                    (element) =>
                                                        element === plat
                                                )}
                                                onClick={() =>
                                                    addPlatformToVideogame(plat)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                            <button disabled={button} type="submit">
                                CREAR VIDEOJUEGO
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateGame;
