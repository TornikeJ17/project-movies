import React, { useEffect, useState } from "react";
import Container from "../Models/Container/Container";
import Trial from "../Models/Trial/Trial";
import { BlockContainer } from "./MoviesStyle";
import ContentWithSlider from "../Models/ContentWithSlider/ContentWithSlider";

const Movies = ({
    //movies
    genres,
    movieListGenres,
    moviesByGenre,
    getTrending,
    getPopular,
    getTopRated,
    getUpcoming,
    fetchMovieDetails,
    //shows
    showsListGenres,
    getShowGenres,
    showsByGenre,
    getShowsTrending,
    getShowsPopular,
    getTopShowsRated,
    getShowsAiring,
}) => {
    return (
        <Container>
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
                    fetchMovieDetails={fetchMovieDetails}
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
                    firstArray={getShowGenres?.genres}
                    secondArray={showsByGenre}
                    onClickFunction={showsListGenres}
                />
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getShowsTrending}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                />
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getShowsPopular}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                />
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getTopShowsRated}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                />
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getShowGenres?.genres}
                    secondArray={showsByGenre}
                    onClickFunction={showsListGenres}
                />
            </BlockContainer>
            <Trial />
        </Container>
    );
};

export default Movies;
