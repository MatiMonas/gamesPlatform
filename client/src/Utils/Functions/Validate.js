export const validate = (state) => {
    let error = {};

    if (!state.name) error.name = "Game name is required";

    if (!state.description) error.description = "Game description is required";

    if (!state.background_image)
        error.background_image = "Game image is required";

    //solo fechas validas (YYYY-MM-DD || YYYY-M-D || YYYY-MM-D || YYYY-M-DD)
    if (!state.releaseDate) error.releaseDate = "Game relase date is required";
    else if (
        !/^(?:(?:19[0-9]{2}|200[0-9]|2010)([-/.]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:19(?:0[48]|[2648][048]|[13579][26])|2000|200[48])([-/.]?)0?2\2(?:29))$/.test(
            state.releaseDate
        )
    )
        error.releaseDate = "Date not valid";

    //solo numeros del 0-5
    if (!state.rating) {
        error.rating = "Game rating is required";
    } else if (!/^([0-5])$/.test(state.rating)) {
        error.rating = "Rating must be only numbers from 0 star to 5 stars";
    }
    if (!state.genres.length) {
        error.genres = "At least one genre is required";
    }
    if (!state.platforms.length) {
        error.platforms = "At least one platform is required";
    }
    return error;
};
