import React, { useState } from "react";
import {
    ReviewsContainer,
    ReviewsContainerBlock,
    ReviewCard,
    ReviewButtonBlock,
    ReviewButton,
    ReviewIndicator,
    ReviewRatingBlock,
} from "./ReviewsStyle";
import Ratings from "../Ratings/Ratings";
import { icons } from "../../../API/svgFiles";
import Titles from "../Titles/Titles";
const Reviews = ({ reviewData }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 2;
    console.log(reviewData, "reviewData", reviewData.length);
    const totalPages = Math.ceil(reviewData?.length / itemsPerPage);

    const renderIndicators = () => {
        const indicators = [];
        for (let i = 0; i < totalPages; i++) {
            indicators.push(<div key={i}></div>);
        }
        return indicators;
    };
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
            <Titles children={"Reviews"} />
            <ReviewsContainerBlock>
                {reviewData
                    ?.slice(startIndex, startIndex + itemsPerPage)
                    .map((reviewItem, index) => (
                        <ReviewCard>
                            <ReviewRatingBlock>
                                <div>{reviewItem.author}</div>
                                <div>
                                    <Ratings
                                        rating={
                                            reviewItem?.author_details?.rating
                                        }
                                    />
                                </div>
                            </ReviewRatingBlock>
                            <span>{reviewItem.content}</span>
                        </ReviewCard>
                    ))}
            </ReviewsContainerBlock>
            <ReviewButtonBlock>
                <ReviewButton onClick={() => handleLeftClick()}>
                    {icons[3].svg}
                </ReviewButton>
                <ReviewIndicator activeIndex={activeIndex}>
                    {renderIndicators()}
                </ReviewIndicator>
                <ReviewButton onClick={() => handleRightClick()}>
                    {icons[2].svg}
                </ReviewButton>
            </ReviewButtonBlock>
        </ReviewsContainer>
    );
};

export default Reviews;
