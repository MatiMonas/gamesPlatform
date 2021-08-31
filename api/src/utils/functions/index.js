const axios = require("axios");

const getData = async (URL) => {
    let getData = await axios.get(URL);
    return getData.data;
};

module.exports = getData;
