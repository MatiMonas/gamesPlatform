import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchById } from "../../redux/actions";
import Loading from "../Loading/Loading";
import style from "./VideoGameDetail.module.css";
import { TiStar } from "react-icons/ti";

function VideogameDetail() {
    const videoGameDetail = useSelector((state) => state.searchById);
    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchById(id));
        return () => dispatch(searchById());
    }, [dispatch, id]);

    return (
        <>
            {!videoGameDetail?.length ? (
                <div className={style.loading}>
                    <Loading />
                </div>
            ) : videoGameDetail ? (
                <div className={style.mainContainer}>
                    <div className={style.bkImgContainer}>
                        <img
                            className={style.bkimg}
                            src={videoGameDetail[0].background_image}
                            alt=""
                        />
                    </div>
                    <div className={style.infoContainer}>
                        <div className={style.textContainer}>
                            <div className={style.titleContainer}>
                                <h1>{videoGameDetail[0].name}</h1>
                                <h4 style={{ display: "flex", gap: "5px" }}>
                                    {videoGameDetail[0].rating}
                                    <TiStar className={style.star} />
                                </h4>
                            </div>
                            <div>
                                <h3>Description:</h3>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: videoGameDetail[0].description,
                                    }}
                                ></div>
                            </div>
                            <div>
                                <h4>Release date</h4>
                                <p>{videoGameDetail[0].releaseDate} </p>
                            </div>

                            <div>
                                <h4>Genres</h4>
                                <p>
                                    {videoGameDetail[0].genres
                                        ?.map((el) => el?.name)
                                        .join(", ") ||
                                        videoGameDetail[0].gameGenres
                                            ?.map((el) => el?.name)
                                            .join(", ")}
                                    .
                                </p>
                            </div>
                            <div>
                                <h4>Platforms</h4>
                                <p>
                                    {videoGameDetail[0].platforms
                                        ?.map((el) => el)
                                        .join(", ")}
                                    .
                                </p>
                            </div>
                        </div>

                        <div className={style.imgContainer}>
                            <img
                                className={style.img}
                                src={videoGameDetail[0].background_image}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default VideogameDetail;
