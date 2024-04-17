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
import Ratings from "../../Models/Ratings/Ratings";
const baseURL = "https://image.tmdb.org/t/p/original";

const MoviesPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [movieReviews, setMovieReviews] = useState([]);
    const { fetchMovieDetails, fetchMovieReviews } = useMovieRequest(); // Access the function from the hook
    const [startIndex, setStartIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(movieReviews?.length / itemsPerPage);
    const handleLeftClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - itemsPerPage);
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleRightClick = () => {
        if (startIndex < movieReviews?.length - itemsPerPage) {
            setStartIndex(startIndex + itemsPerPage);
            setActiveIndex(activeIndex + 1);
        }
    };
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
        return movieReviews
            ?.slice(startIndex, startIndex + itemsPerPage)
            .map((reviewItem, index) => (
                <ReviewCard>
                    <div>
                        <div>{reviewItem.author}</div>
                        <div>
                            <Ratings
                                rating={reviewItem?.author_details?.rating}
                            />
                        </div>
                    </div>
                    <span>{reviewItem.content}</span>
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
                    <Cards></Cards>
                    <Cards>
                        <img
                            style={{ width: 100, height: 100 }}
                            src={baseURL + movieDetails.backdrop_path}
                            alt=""
                        />
                    </Cards>
                    <Cards>
                        {renderReviews()}
                        <div>
                            <button onClick={() => handleLeftClick()}>
                                back
                            </button>
                            <button onClick={() => handleRightClick()}>
                                next
                            </button>
                        </div>
                    </Cards>
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
