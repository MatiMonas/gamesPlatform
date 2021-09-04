const orderArray = function (arr, property, order = "asc") {
    if (!arr.length) {
        return arr;
    }
    let rta = arr;
    switch (order) {
        case "asc":
            rta.sort(function (a, b) {
                if (a[property] > b[property]) {
                    return 1;
                }
                if (a[property] < b[property]) {
                    return -1;
                }
                return 0;
            });
            break;
        case "desc":
            rta.sort(function (a, b) {
                if (a[property] < b[property]) {
                    return 1;
                }
                if (a[property] > b[property]) {
                    return -1;
                }
                return 0;
            });
            break;
    }
    return rta;
};

module.exports = orderArray;
