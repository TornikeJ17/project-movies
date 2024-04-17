import React, { useState } from "react";
import { ReviewsContainer, ReviewCard } from "./ReviewsStyle";
import Ratings from "../Ratings/Ratings";
const Reviews = ({ reviewData }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 2;

    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerPage);
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (startIndex < reviewData?.length - itemsPerPage) {
            setStartIndex(startIndex + itemsPerPage);
            setActiveIndex(activeIndex + 1);
        }
    };
    return (
        <ReviewsContainer>
            {reviewData
                ?.slice(startIndex, startIndex + itemsPerPage)
                .map((reviewItem, index) => (
                    <ReviewCard>
                        <div>
                            <div>{reviewItem.author}</div>
                            <div>
                                <Ratings
                                    rating={reviewItem?.author_details?.rating}
                                />
                            </div>
                        </div>
                        <span>{reviewItem.content}</span>
                    </ReviewCard>
                ))}
            <div>
                <button onClick={() => handleLeftClick()}>back</button>
                <button onClick={() => handleRightClick()}>next</button>
            </div>
        </ReviewsContainer>
    );
};

export default Reviews;
