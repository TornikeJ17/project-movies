// MoviesByGenre.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieRequest from "../../../API/useMovieRequest";
const MoviesByGenre = () => {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const { fetchMovieById } = useMovieRequest();

    useEffect(() => {
        fetchMovieById(id).then((data) => {
            console.log(data, "eh ra ginda ");
            setMovies(data.results);
        });
        console.log(id);
    }, [id]);

    return (
        <div>
            <h1>Movies by Genre</h1>
            {movies?.map((movie) => (
                <div key={movie.id}>{movie.original_title}</div>
            ))}
        </div>
    );
};

export default MoviesByGenre;
