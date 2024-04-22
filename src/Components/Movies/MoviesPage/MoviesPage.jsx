import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieRequest from "../../../API/useMovieRequest";
import {
    MoviesPageContainer,
    Poster,
    PosterImage,
    MovieBlock,
    MovieBlockCard,
    Cards,
    CardsBlock,
    LanguagesContainer,
    LanguagesBlock,
    DirectorBlock,
    Image,
} from "./MoviesPageStyle";
import Titles from "../../Models/Titles/Titles";
import Trial from "../../Models/Trial/Trial";
import Reviews from "../../Models/Reviews/Reviews";
import Casts from "../../Models/Casts/Casts";
import Description from "../../Models/Description/Description";
import { icons } from "../../../API/svgFiles";
import Ratings from "../../Models/Ratings/Ratings";
const baseURL = "https://image.tmdb.org/t/p/original";

const MoviesPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieReviews, setMovieReviews] = useState([]);
    const [movieCasts, setMovieCasts] = useState([]);
    const [movieVideos, setMovieVideos] = useState([]);
    const {
        fetchMovieDetails,
        fetchMovieReviews,
        fetchMovieCasts,
        fetchMovieVideos,
    } = useMovieRequest(); // Access the function from the hook

    useEffect(() => {
        fetchMovieDetails(id).then((data) => {
            console.log(data);
            setMovieDetails(data); // Set the movie details in state
        });
        fetchMovieReviews(id).then((data) => {
            setMovieReviews(data);
        });
        fetchMovieCasts(id).then((data) => {
            setMovieCasts(data);
        });
        fetchMovieVideos(id).then((data) => {
            console.log(data, "data moviess");
            setMovieVideos(data);
        });
    }, [id]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }
    const renderPosterWithTitle = () => {
        return (
            <Poster>
                <PosterImage src={baseURL + movieDetails.backdrop_path} />
                {console.log(movieVideos, "movieVideos")}
            </Poster>
        );
    };

    return (
        <MoviesPageContainer>
            {renderPosterWithTitle()}
            <div>
                {movieVideos.map((item) => (
                    <a
                        href={`https://www.youtube.com/watch?v=${item.key}`}
                        target="_blank"
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <MovieBlock>
                <MovieBlockCard>
                    <Description descriptionText={movieDetails.overview} />
                    <Casts castData={movieCasts.cast} CastsTitle={"Cast"} />
                    <Casts castData={movieCasts.crew} CastsTitle={"Crew"} />
                    {movieReviews.length > 0 && (
                        <Reviews reviewData={movieReviews} />
                    )}
                </MovieBlockCard>
                <MovieBlockCard>
                    <Cards>
                        <CardsBlock>
                            <Titles
                                children={"Released Year"}
                                icons={icons[7].svg}
                            />
                            {movieDetails.release_date.slice(0, 4)}
                        </CardsBlock>
                        <CardsBlock>
                            <Titles
                                children={"Available Languages"}
                                icons={icons[8].svg}
                            />
                            <LanguagesContainer>
                                {movieDetails.spoken_languages?.map((item) => (
                                    <LanguagesBlock>{item.name}</LanguagesBlock>
                                ))}
                            </LanguagesContainer>
                        </CardsBlock>
                        <CardsBlock>
                            <Titles children={"Ratings"} icons={icons[4].svg} />
                            <Ratings rating={movieDetails.vote_average} />
                        </CardsBlock>
                        <CardsBlock>
                            <Titles children={"Genres"} icons={icons[9].svg} />
                            <LanguagesContainer>
                                {movieDetails.genres?.map((item) => (
                                    <LanguagesBlock>{item.name}</LanguagesBlock>
                                ))}
                            </LanguagesContainer>
                        </CardsBlock>
                        <CardsBlock>
                            <Titles children={"Director"} />

                            <LanguagesContainer>
                                {movieCasts.crew?.slice(0, 1)?.map((item) => (
                                    <DirectorBlock>
                                        {item.profile_path && (
                                            <Image
                                                src={
                                                    baseURL + item.profile_path
                                                }
                                                alt=""
                                            />
                                        )}
                                        {item.name}
                                    </DirectorBlock>
                                ))}
                            </LanguagesContainer>
                        </CardsBlock>
                    </Cards>
                </MovieBlockCard>
            </MovieBlock>
            <Trial />
        </MoviesPageContainer>
    );
};

export default MoviesPage;
