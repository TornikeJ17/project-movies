import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieRequest from "../../../API/useMovieRequest";
import {
    MoviesPageContainer,
    Poster,
    PosterImage,
    MovieBlock,
    MovieBlockCard,
    ReviewCard,
    Cards,
} from "./MoviesPageStyle";
import Trial from "../../Models/Trial/Trial";
import Reviews from "../../Models/Reviews/Reviews";
import Casts from "../../Models/Casts/Casts";
import Description from "../../Models/Description/Description";
const baseURL = "https://image.tmdb.org/t/p/original";

const MoviesPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieReviews, setMovieReviews] = useState([]);
    const [movieCasts, setMovieCasts] = useState([]);
    const { fetchMovieDetails, fetchMovieReviews, fetchMovieCasts } =
        useMovieRequest(); // Access the function from the hook

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
        console.log(movieReviews, "movieReviews");
        console.log(movieCasts, "movieCasts");
    }, [id]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }
    const renderPosterWithTitle = () => {
        return (
            <Poster>
                <PosterImage src={baseURL + movieDetails.backdrop_path} />
            </Poster>
        );
    };
    const renderDescription = () => {
        return <div></div>;
    };
    const renderCast = () => {
        return <div></div>;
    };

    const renderDetailsMovie = () => {
        return <div></div>;
    };
    return (
        <MoviesPageContainer>
            {renderPosterWithTitle()}

            <MovieBlock>
                <MovieBlockCard>
                    <Description descriptionText={movieDetails.overview} />
                    <Casts castData={movieCasts} />
                    <Reviews reviewData={movieReviews} />
                </MovieBlockCard>
                <MovieBlockCard>
                    <Cards>
                        <img
                            style={{ width: 100, height: 100 }}
                            src={baseURL + movieDetails.backdrop_path}
                            alt=""
                        />
                    </Cards>
                </MovieBlockCard>
            </MovieBlock>
            <Trial />
        </MoviesPageContainer>
    );
};

export default MoviesPage;
