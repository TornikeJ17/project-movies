import React, { useEffect, useState } from "react";
import Container from "../Models/Container/Container";
import Trial from "../Models/Trial/Trial";
import {
    BlockContainer,
    TabContainer,
    TabsBlock,
    TabsButton,
} from "./MoviesStyle";
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
    isMobile,
}) => {
    const [tabs, setTabs] = useState("Movies");
    const clickTabs = (tabName) => {
        setTabs(tabName);
    };
    return (
        <Container>
            {isMobile && (
                <TabContainer>
                    <TabsBlock>
                        <TabsButton
                            isActive={tabs === "Movies"}
                            onClick={() => clickTabs("Movies")}
                        >
                            Movies
                        </TabsButton>
                        <TabsButton
                            isActive={tabs === "Shows"}
                            onClick={() => clickTabs("Shows")}
                        >
                            Shows
                        </TabsButton>
                    </TabsBlock>
                </TabContainer>
            )}
            {/* Movies */}
            <BlockContainer
                className="movies"
                isMobile={isMobile}
                active={tabs === "Movies"}
            >
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
                <ContentWithSlider
                    HeaderTitle={`Trending Now`}
                    firstArray={getTrending}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                    fetchMovieDetails={fetchMovieDetails}
                    isMovieContext={isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Popular`}
                    firstArray={getPopular}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                    fetchMovieDetails={fetchMovieDetails}
                    isMovieContext={isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Top Rated`}
                    firstArray={getTopRated}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                    fetchMovieDetails={fetchMovieDetails}
                    isMovieContext={isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Upcoming `}
                    firstArray={getUpcoming}
                    secondArray={"-1"}
                    onClickFunction={movieListGenres}
                    fetchMovieDetails={fetchMovieDetails}
                    isMovieContext={isMovieContext}
                    isGenre={isGenre}
                />
            </BlockContainer>
            {/* Shows */}
            <BlockContainer
                className="shows"
                isMobile={isMobile}
                active={tabs === "Shows"}
            >
                <ContentWithSlider
                    HeaderTitle={`Our Genres`}
                    HeaderText={`Whether you're looking for a comedy to make you
                laugh, a drama to make you think, or a documentary
                to learn something new`}
                    firstArray={getShowGenres?.genres}
                    secondArray={showsByGenre}
                    onClickFunction={showsListGenres}
                    isMovieContext={!isMovieContext}
                    isGenre={!isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Airing Today`}
                    firstArray={getShowsAiring}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                    fetchShowsDetails={fetchShowsDetails}
                    isMovieContext={!isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Trending Now`}
                    firstArray={getShowsTrending}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                    fetchShowsDetails={fetchShowsDetails}
                    isMovieContext={!isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Popular`}
                    firstArray={getShowsPopular}
                    secondArray={"-1"}
                    onClickFunction={showsListGenres}
                    fetchShowsDetails={fetchShowsDetails}
                    isMovieContext={!isMovieContext}
                    isGenre={isGenre}
                />
                <ContentWithSlider
                    HeaderTitle={`Top Rated`}
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
