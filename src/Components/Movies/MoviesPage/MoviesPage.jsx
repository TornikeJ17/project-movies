import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieRequest from "../../../API/useMovieRequest";
const baseURL = "https://image.tmdb.org/t/p/original";

const MoviesPage = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const { fetchMovieDetails } = useMovieRequest(); // Access the function from the hook

    useEffect(() => {
        fetchMovieDetails(id).then((data) => {
            console.log(data);
            setMovieDetails(data); // Set the movie details in state
        });
        console.log(movieDetails);
    }, [id, fetchMovieDetails]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movieDetails.title}</h1>
            <img
                style={{
                    width: 300,
                    height: 300,
                }}
                src={baseURL + movieDetails.poster_path}
                alt=""
            />
            {/* Render the rest of the movie details */}
        </div>
    );
};

export default MoviesPage;
