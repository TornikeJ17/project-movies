import React, { useEffect, useState } from "react";
import {
    DevicesContainer,
    DevicesBlock,
    DevicesCard,
    DeviceHeader,
    DeviceText,
    DeviceIcon,
    DeviceTitle,
} from "./HomeStyle";
import { devices } from "../../API/svgFiles";
import Trial from "../Models/Trial/Trial";
import Container from "../Models/Container/Container";
import Header from "../Models/Header/Header";
import Plans from "../Models/Plans/Plans";
import Questions from "../Models/Questions/Questions";
import ContentWithSlider from "../Models/ContentWithSlider/ContentWithSlider";

const Home = ({ genres, movieListGenres, moviesByGenre, isActive }) => {
    const RenderCategoriesSlide = () => {
        const [startIndex, setStartIndex] = useState(0);
        const [activeIndex, setActiveIndex] = useState(0);
        const itemsPerPage = 4;
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
        useEffect(() => {
            if (genres.genres) {
                genres.genres.forEach((item) => {
                    movieListGenres(item.id);
                });
            }
        }, [genres.genres]);
        return (
            <ContentWithSlider
                HeaderTitle={`Explore our wide variety of categories`}
                HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                isActive={isActive}
                firstArray={genres.genres}
                secondArray={moviesByGenre}
                handleLeftClick={handleLeftClick}
                handleRightClick={handleRightClick}
                activeIndex={activeIndex}
                totalPages={totalPages}
                startIndex={startIndex}
                itemsPerPage={itemsPerPage}
                onClickFunction={movieListGenres}
            />
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
