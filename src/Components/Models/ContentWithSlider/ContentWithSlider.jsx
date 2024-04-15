import React, { useState, useEffect } from "react";
import {
    CategoriesSlideContainer,
    CategoriesSlideBlock,
    CategoriesSlideCard,
    ImageBlock,
    Image,
    GenreNames,
    BlockClick,
} from "./ContentWithSliderStyle";
import Header from "../Header/Header";
import SliderHeader from "../SliderHeader/SliderHeader";
import { icons } from "../../../API/svgFiles";
const baseURL = "https://image.tmdb.org/t/p/original";

const ContentWithSlider = ({
    isActive,
    firstArray,
    secondArray,
    HeaderTitle,
    HeaderText,
    onClickFunction,
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(firstArray?.length / itemsPerPage);
    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerPage);
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (startIndex < firstArray?.length - itemsPerPage) {
            setStartIndex(startIndex + itemsPerPage);
            setActiveIndex(activeIndex + 1);
        }
    };
    useEffect(() => {
        if (firstArray) {
            firstArray.forEach((item) => {
                onClickFunction(item.id);
            });
        }
    }, [firstArray]);
    return (
        <CategoriesSlideContainer>
            <Header title={HeaderTitle} text={HeaderText} isActive={isActive}>
                <SliderHeader
                    handleLeftClick={handleLeftClick}
                    handleRightClick={handleRightClick}
                    activeIndex={activeIndex}
                    totalPages={totalPages}
                />
            </Header>
            <CategoriesSlideBlock isActive={isActive}>
                {console.log("First", firstArray)}
                {console.log("Second", secondArray)}
                {firstArray
                    ?.slice(startIndex, startIndex + itemsPerPage)
                    .map((item, index) => (
                        <CategoriesSlideCard
                            images={secondArray.length}
                            key={index}
                            onClick={() => onClickFunction(item.id)}
                        >
                            {secondArray && secondArray[item.id] ? (
                                secondArray[item.id]
                                    .slice(0, 4)
                                    .map((itemList) => (
                                        <ImageBlock key={itemList.id}>
                                            <Image
                                                height={secondArray.length}
                                                src={
                                                    baseURL +
                                                    itemList.poster_path
                                                }
                                                alt={itemList.title}
                                            />
                                        </ImageBlock>
                                    ))
                            ) : (
                                <ImageBlock>
                                    <Image
                                        height={secondArray.length}
                                        src={baseURL + item.poster_path}
                                        alt={item.name}
                                    />
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                padding: "6px 10px 6px 6px",
                                                alignItems: "center",
                                                gap: "4px",
                                                borderRadius: "51px",
                                                border: "1px solid var(--Black-15, #262626)",
                                                background: "#141414",
                                            }}
                                        >
                                            {icons[4].svg}
                                            {Math.ceil(item.vote_average)}
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                padding: "6px 10px 6px 6px",
                                                alignItems: "center",
                                                gap: "4px",
                                                borderRadius: "51px",
                                                border: "1px solid var(--Black-15, #262626)",
                                                background: "#141414",
                                            }}
                                        >
                                            {icons[5].svg}
                                            {item.popularity >= 1000
                                                ? (
                                                      item.popularity / 1000
                                                  ).toFixed(0) + "K"
                                                : Math.floor(item.popularity)}
                                        </div>
                                    </div>
                                </ImageBlock>
                            )}
                            <BlockClick>
                                <GenreNames>{item.name}</GenreNames>

                                {secondArray && secondArray[item.id] && (
                                    <div>{icons[2].svg}</div>
                                )}
                            </BlockClick>
                        </CategoriesSlideCard>
                    ))}
            </CategoriesSlideBlock>
        </CategoriesSlideContainer>
    );
};

export default ContentWithSlider;
