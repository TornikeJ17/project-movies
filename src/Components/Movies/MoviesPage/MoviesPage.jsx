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
        return movieReviews?.slice(0, 2).map((reviewItem, index) => (
            <ReviewCard>
                {console.log(reviewItem)}
                {reviewItem.content}
            </ReviewCard>
        ));
    };
    const renderDetailsMovie = () => {
        return <div></div>;
    };
    return (
        <MoviesPageContainer>
            {renderPosterWithTitle()}

            <MovieBlock>
                <MovieBlockCard>
                    <Cards>
                        <img
                            style={{ width: 100, height: 100 }}
                            src={baseURL + movieDetails.backdrop_path}
                            alt=""
                        />
                    </Cards>
                    <Cards>
                        <img
                            style={{ width: 100, height: 100 }}
                            src={baseURL + movieDetails.backdrop_path}
                            alt=""
                        />
                    </Cards>
                    <Cards>{renderReviews()}</Cards>
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
