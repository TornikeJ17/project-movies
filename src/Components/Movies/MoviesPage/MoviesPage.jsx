import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieRequest from "../../../API/useMovieRequest";
import {
    MoviesPageContainer,
    Poster,
    PosterImage,
    MovieBlock,
    MovieBlockCard,
} from "./MoviesPageStyle";
import Trial from "../../Models/Trial/Trial";
const baseURL = "https://image.tmdb.org/t/p/original";

const MoviesPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieReviews, setMovieReviews] = useState([]);
    const { fetchMovieDetails, fetchMovieReviews } = useMovieRequest(); // Access the function from the hook

    useEffect(() => {
        fetchMovieDetails(id).then((data) => {
            console.log(data);
            setMovieDetails(data); // Set the movie details in state
        });
        fetchMovieReviews(id).then((data) => {
            setMovieReviews(data);
        });
        console.log(movieDetails);
        console.log(movieReviews, "movieReviews");
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
    const renderReviews = () => {
        return movieReviews?.map((reviewItem, index) => (
            <div>
                {console.log(reviewItem)}
                {reviewItem.content}
            </div>
        ));
    };
    const renderDetailsMovie = () => {
        return <div></div>;
    };
    return (
        <MoviesPageContainer>
            {renderPosterWithTitle()}
            {renderReviews()}

            <MovieBlock>
                <MovieBlockCard>
                    <div>
                        <img
                            style={{ width: 100, height: 100 }}
                            src={baseURL + movieDetails.backdrop_path}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            style={{ width: 100, height: 100 }}
                            src={baseURL + movieDetails.backdrop_path}
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            style={{ width: 100, height: 100 }}
                            src={baseURL + movieDetails.backdrop_path}
                            alt=""
                        />
                    </div>
                </MovieBlockCard>
                <MovieBlockCard>
                    <img
                        style={{ width: 100, height: 100 }}
                        src={baseURL + movieDetails.backdrop_path}
                        alt=""
                    />
                </MovieBlockCard>
            </MovieBlock>
            <Trial />
        </MoviesPageContainer>
    );
};

export default MoviesPage;
