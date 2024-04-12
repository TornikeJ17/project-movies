import React, { useState } from "react";
import {
    CategoriesSlideContainer,
    CategoriesSlideBlock,
    CategoriesSlideCard,
    DevicesContainer,
    DevicesBlock,
    DevicesCard,
    DeviceHeader,
    DeviceText,
    DeviceIcon,
    DeviceTitle,
    Image,
} from "./HomeStyle";
import { devices, plans } from "../../API/svgFiles";
import Trial from "../Models/Trial/Trial";
import Container from "../Models/Container/Container";
import Header from "../Models/Header/Header";
import Plans from "../Models/Plans/Plans";
import Questions from "../Models/Questions/Questions";
import SliderHeader from "../Models/SliderHeader/SliderHeader";

const baseURL = "https://image.tmdb.org/t/p/original";

const Home = ({ genres, getTrending }) => {
    const RenderCategoriesSlide = () => {
        const [startIndex, setStartIndex] = useState(0);
        const [activeIndex, setActiveIndex] = useState(0);
        const itemsPerPage = 5;

        const totalPages = Math.ceil(genres.genres?.length / itemsPerPage);

        const handleLeftClick = () => {
            if (startIndex > 0) {
                setStartIndex(startIndex - itemsPerPage);
                setActiveIndex(activeIndex - 1);
            }
        };

        const handleRightClick = () => {
            if (startIndex < genres.genres?.length - itemsPerPage) {
                setStartIndex(startIndex + itemsPerPage);
                setActiveIndex(activeIndex + 1);
            }
        };
        return (
            <CategoriesSlideContainer>
                <Header
                    title={`Explore our wide variety of categories`}
                    text={`Whether you're looking for a comedy to make you
                        laugh, a drama to make you think, or a documentary
                        to learn something new`}
                >
                    <SliderHeader
                        handleLeftClick={handleLeftClick}
                        handleRightClick={handleRightClick}
                        activeIndex={activeIndex}
                        totalPages={totalPages}
                    />
                </Header>
                <CategoriesSlideBlock>
                    {genres.genres
                        ?.slice(startIndex, startIndex + itemsPerPage)
                        .map((item, index) => (
                            <CategoriesSlideCard key={index}>
                                {item.name}
                            </CategoriesSlideCard>
                        ))}
                    {console.log("some", getTrending)}
                    {getTrending
                        .slice(startIndex, startIndex + itemsPerPage)
                        .map((item, index) => (
                            <CategoriesSlideCard>
                                <Image
                                    src={baseURL + item.poster_path}
                                    alt={item.title}
                                />
                            </CategoriesSlideCard>
                        ))}
                </CategoriesSlideBlock>
            </CategoriesSlideContainer>
        );
    };

    const RenderDevices = () => {
        return (
            <DevicesContainer>
                <Header
                    title={`We Provide you streaming experience across various
                    devices.`}
                    text={`With StreamVibe, you can enjoy your favorite movies
                        and TV shows anytime, anywhere. Our platform is
                        designed to be compatible with a wide range of
                        devices, ensuring that you never miss a moment of
                        entertainment.`}
                />
                <DevicesBlock>
                    {devices.map((item, index) => (
                        <DevicesCard key={index}>
                            <DeviceHeader>
                                <DeviceIcon>{item.svg}</DeviceIcon>
                                <DeviceTitle>{item.title}</DeviceTitle>
                            </DeviceHeader>
                            <DeviceText>{item.text}</DeviceText>
                        </DevicesCard>
                    ))}
                </DevicesBlock>
            </DevicesContainer>
        );
    };

    return (
        <Container>
            {RenderCategoriesSlide()}
            {RenderDevices()}
            <Questions />
            <Plans />
            <Trial />
        </Container>
    );
};

export default Home;
