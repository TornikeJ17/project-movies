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
    fetchShowsDetails,
    //currentGet
    isMovieContext,
    isGenre,
}) => {
    return (
        <Container>
            {/* Movies */}
            <BlockContainer className="movies">
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={genres?.genres}
                    secondArray={moviesByGenre}
                    onClickFunction={movieListGenres}
                    isMovieContext={isMovieContext}
                    isGenre={!isGenre}
                />
                {console.log(moviesByGenre, "moviesByGenre")}
                <ContentWithSlider
                    HeaderTitle={`Trending Now`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getTrending}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                    fetchMovieDetails={fetchMovieDetails}
                    isMovieContext={isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Popular`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getPopular}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                    fetchMovieDetails={fetchMovieDetails}
                    isMovieContext={isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Top Rated`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getTopRated}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                    fetchMovieDetails={fetchMovieDetails}
                    isMovieContext={isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Upcoming `}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getUpcoming}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                    fetchMovieDetails={fetchMovieDetails}
                    isMovieContext={isMovieContext}
                    isGenre={isGenre}
                />
            </BlockContainer>
            {/* Shows */}
            <BlockContainer className="shows">
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getShowGenres?.genres}
                    secondArray={showsByGenre}
                    onClickFunction={showsListGenres}
                    isMovieContext={!isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Airing Today`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getShowsAiring}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                    fetchShowsDetails={fetchShowsDetails}
                    isMovieContext={!isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Trending Now`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getShowsTrending}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                    fetchShowsDetails={fetchShowsDetails}
                    isMovieContext={!isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Popular`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getShowsPopular}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                    fetchShowsDetails={fetchShowsDetails}
                    isMovieContext={!isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Top Rated`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getTopShowsRated}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                    fetchShowsDetails={fetchShowsDetails}
                    isMovieContext={!isMovieContext}
                    isGenre={isGenre}
                />
            </BlockContainer>
            <Trial />
        </Container>
    );
};

export default Movies;
