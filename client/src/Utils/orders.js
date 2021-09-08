export function order(games, order) {
    let gameInOrder;
    switch (order) {
        case "AZ":
            gameInOrder = [
                ...games?.sort((a, b) => {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                    return 0;
                }),
            ];
            return gameInOrder;

        case "ZA":
            gameInOrder = [
                ...games?.sort((a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    return 0;
                }),
            ];
            return gameInOrder;

        case "asc":
            gameInOrder = [
                ...games?.sort((a, b) => {
                    if (a.rating < b.rating) return 1;
                    if (a.rating > b.rating) return -1;
                    return 0;
                }),
            ];
            return gameInOrder;

        case "des":
            gameInOrder = [
                ...games?.sort((a, b) => {
                    if (a.rating > b.rating) return 1;
                    if (a.rating < b.rating) return -1;
                    return 0;
                }),
            ];
            return gameInOrder;

        default:
            return games;
    }
}
