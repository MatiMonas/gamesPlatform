import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchById } from "../../redux/actions";

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
            {videoGameDetail?.msg ? (
                <h1>{videoGameDetail.msg}</h1>
            ) : videoGameDetail ? (
                <>
                    <div>
                        <div>
                            <div>
                                <h1>Title</h1> {videoGameDetail.name}
                            </div>
                            <div>
                                {" "}
                                <img
                                    src={videoGameDetail.background_image}
                                    alt=""
                                />
                            </div>
                            <div>
                                <h4>Rating</h4>
                                {videoGameDetail.rating}
                            </div>
                            <div>
                                <p>Description:</p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: videoGameDetail.description,
                                    }}
                                ></div>
                            </div>
                            <p>Release date:{videoGameDetail.releaseDate} </p>
                            <p>
                                Genres:
                                {videoGameDetail.genres
                                    ?.map((el) => el?.name)
                                    .join(", ")}
                            </p>
                            <p>
                                {videoGameDetail.platforms
                                    ?.map((el) => el)
                                    .join(", ")}
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <h1>Cargando...</h1>
            )}
        </>
    );
}

export default VideogameDetail;
