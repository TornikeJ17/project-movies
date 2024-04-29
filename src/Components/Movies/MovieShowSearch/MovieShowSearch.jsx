import React from "react";
import useSearchRequest from "../../../API/useSearchRequest";
import { useNavigate } from "react-router-dom";
const MovieShowSearch = ({ query }) => {
    const { search, queryl, setQuery, results } = useSearchRequest();
    const navigate = useNavigate();
    const listMovies = (id) => {
        const path = results.movies
            ? `/movie-shows/movie/${id.id}`
            : `/movie-shows/show/${id.id}`;
        navigate(path);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Search for movies or TV shows..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <div>
                <h2>Movies</h2>
                <ul>
                    {results.movies.map((movie) => (
                        <li onClick={() => listMovies(movie)} key={movie.id}>
                            {movie.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>TV Shows</h2>
                <ul>
                    {results.tvShows.map((tvShow) => (
                        <li onClick={() => listMovies(tvShow)} key={tvShow.id}>
                            {tvShow.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MovieShowSearch;
