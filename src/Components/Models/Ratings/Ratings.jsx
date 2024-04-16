import React from "react";
import { RatingContainer } from "./RatingsStyle";
import StarIcon from "./StarIcon";
const Ratings = ({ rating }) => {
    const indexRating = 5;
    const handleRating = () => {
        const ratingArr = [];
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 !== 0;

        for (let i = 0; i < indexRating; i++) {
            if (i < fullStars) {
                ratingArr.push(<StarIcon key={i} filled />);
            } else if (i === fullStars && halfStar > 0) {
                ratingArr.push(<StarIcon key={i} filled />);
            } else {
                ratingArr.push(<StarIcon key={i} />);
            }
        }
        return ratingArr;
    };
    return <RatingContainer>{handleRating()}</RatingContainer>;
};

export default Ratings;
