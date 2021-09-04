import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../Components/NavBar/NavBar";
import style from "./CreateGame.module.css";
import { GENRES_URL } from "../../constants";
import { PLATFORMS_URL } from "../../constants";
import { useDispatch } from "react-redux";
import { getGames, postGame } from "../../redux/actions";

// const {
//     name,
//     description,
//     background_image,
//     releaseDate,
//     rating,
//     genres, //["miedo", "actions" ]
//     platforms, //["ps5"]
// } = req.body;

function CreateGame() {
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
    const [genres, setGenres] = useState([]);
    const [platforms, setPlatforms] = useState([]);

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

    //convierto en un array filtrado (sin repeticiones) mis plataformas y las ordeno alfabeticamente
    const platformNames = platforms.map((e) => e.name);
    const data = new Set(platformNames);
    let result = [...data].sort();

    // const platform = [...new Set(platforms)];

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

    /*----------------HANDLERS---------------*/
    function handleChange(e) {
        if (e.target.name === "genres" || e.target.name === "platforms") {
            let concatValues = videogame[e.target.name];
            setVideogame((prevState) => ({
                ...prevState,
                [e.target.name]: [...concatValues, ...e.target.value],
            }));
        } else {
            setVideogame((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        }
    }

    let convert = videogame.genres.toString();
    let toArray = Array.from(convert);
    let genresResult = toArray.filter((el) => el !== ",");

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
        console.log(newGame);
        dispatch(postGame(newGame));
        dispatch(getGames());
    }
    return (
        <>
            <NavBar />
            <div className={style.mainContainer}>
                <div>
                    <h1>CREA TU VIDEOJUEGO</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label>Videogame Name</label>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={videogame.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Release date</label>
                                    <div>
                                        <input
                                            name="releaseDate"
                                            type="date"
                                            value={videogame.releaseDate}
                                            onChange={handleChange}
                                        ></input>
                                    </div>
                                </div>
                                <label>Description</label>
                                <div>
                                    <textarea
                                        name="description"
                                        value={videogame.description}
                                        onChange={handleChange}
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                </div>
                            </div>

                            <div>
                                <label>URL Image </label>
                                <div>
                                    <input
                                        type="text"
                                        name="background_image"
                                        value={videogame.background_image}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label> Rating </label>
                                <div>
                                    <input
                                        type="number"
                                        min="0"
                                        max="5"
                                        name="rating"
                                        value={videogame.rating}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div style={{ display: "flex" }}>
                                <label>
                                    <b>Genres</b>
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
                                    <b>Platforms</b>
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
                            <button type="submit">CREAR VIDEOJUEGO</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateGame;
