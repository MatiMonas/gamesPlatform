export const validate = (state) => {
    let errors = {};
    if (!state.search) {
        errors.search = "Game name is required";
    }

    return errors;
};
