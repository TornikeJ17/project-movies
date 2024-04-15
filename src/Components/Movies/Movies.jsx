import React, { useEffect, useState } from "react";
import Container from "../Models/Container/Container";
import Trial from "../Models/Trial/Trial";
import { BlockContainer } from "./MoviesStyle";
import ContentWithSlider from "../Models/ContentWithSlider/ContentWithSlider";

const Movies = ({
    genres,
    movieListGenres,
    moviesByGenre,
    getTrending,
    getPopular,
    getTopRated,
    getUpcoming,
}) => {
    return (
        <Container>
            {console.log("getTopRated", getTopRated)}
            <BlockContainer className="movies">
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={genres?.genres}
                    secondArray={moviesByGenre}
                    onClickFunction={movieListGenres}
                />
                <ContentWithSlider
                    HeaderTitle={`Trending Now`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getTrending}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                />
                <ContentWithSlider
                    HeaderTitle={`Popular`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getPopular}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                />
                <ContentWithSlider
                    HeaderTitle={`Top Rated`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getTopRated}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                />
                <ContentWithSlider
                    HeaderTitle={`Upcoming `}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getUpcoming}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                />
            </BlockContainer>
            <BlockContainer className="shows">
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={genres?.genres}
                    secondArray={moviesByGenre}
                    onClickFunction={movieListGenres}
                />
            </BlockContainer>
            <Trial />
        </Container>
    );
};

export default Movies;
