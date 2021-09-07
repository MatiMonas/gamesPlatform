export function orderAlph(games, order) {
    let gameInOrder;
    if (order === "AZ") {
        const arrayOrdered = games?.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 0;
        });
        gameInOrder = [...arrayOrdered];
        return gameInOrder;
    }
    if (order !== "AZ") {
        const arrayOrdered = games?.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            return 0;
        });
        gameInOrder = [...arrayOrdered];
        return gameInOrder;
    }
    return games;
}

export function orderRating(games, order) {
    let gameInOrder;
    if (order === "asc") {
        const arrayOrdered = games?.sort((a, b) => {
            if (a.rating < b.rating) return 1;
            if (a.rating > b.rating) return -1;
            return 0;
        });
        gameInOrder = [...arrayOrdered];
        return gameInOrder;
    }
    if (order !== "asc") {
        const arrayOrdered = games?.sort((a, b) => {
            if (a.rating > b.rating) return 1;
            if (a.rating < b.rating) return -1;
            return 0;
        });
        gameInOrder = [...arrayOrdered];
        return gameInOrder;
    }
    return games;
}
