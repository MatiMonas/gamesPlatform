import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

export default function starRating(rating) {
    let stars = [];
    if (rating >= 1) {
        for (let i = 0; i < Math.floor(rating); i++) {
            stars.push(faStar);
        }
    }
    if (rating % 1 > 0) {
        stars.push(faStarHalf);
    }

    return stars;
}
