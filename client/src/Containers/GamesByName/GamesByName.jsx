import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomScrollDiv from "../../Components/CustomScrollDiv/CustomScrollDiv";
import GameCards from "../../Components/GameCards/GameCards";
import NavBar from "../../Components/NavBar/NavBar";
import SideBar from "../../Components/SideBar/SideBar";
import { clearPage, orderNames, searchByName } from "../../redux/actions";
import style from "./GamesByName.module.css";

function GamesByName() {
    const dispatch = useDispatch();
    let { name } = useParams();
    const [, setOrder] = useState("");
    const videogameNames = useSelector((state) => state.filtersByName);

    useEffect(() => {
        dispatch(searchByName(name));
        return () => dispatch(clearPage());
    }, [dispatch, name]);

    const handleOrder = (e) => {
        if (e.target.value === "All") dispatch(orderNames());
        if (
            e.target.value === "AZ" ||
            e.target.value === "ZA" ||
            e.target.value === "asc" ||
            e.target.value === "des"
        )
            dispatch(orderNames(e.target.value));

        setOrder(e.target.value);
    };

    return (
        <div className={style.mainContainer}>
            <div className={style.navContainer}>
                <NavBar />
            </div>
            <div className={style.bodyContainer}>
                <div className={style.sideBar}>
                    <SideBar payload={handleOrder} />
                </div>

                <div className={style.body}>
                    <CustomScrollDiv>
                        <div className={style.contentContainer}>
                            {videogameNames?.length ? (
                                <GameCards games={videogameNames} />
                            ) : videogameNames === undefined ? (
                                <h1>Cargando...</h1>
                            ) : (
                                <h1>Mario se perdio en la selva</h1>
                            )}
                        </div>
                    </CustomScrollDiv>
                </div>
            </div>
        </div>
    );
}

export default GamesByName;

//     <div className={style.body}>
//
//         <CustomScrollDiv>
//             {!filteredVideogames.length ? (
//                 <div className={style.contentContainer}>
//                     <h1>Cargando...</h1>
//                 </div>
//             ) : (
//                 <div className={style.contentContainer}>
//                     <div className={style.gameCardsContainer}>
//                         <GameCards games={currentPageItems} />
//                     </div>
//                 </div>
//             )}
//         </CustomScrollDiv>
//     </div>
// </div>
// </div> /*
