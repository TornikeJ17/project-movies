import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = "https://api.themoviedb.org/3/";
const Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmJkZTJiMDYzN2RkMWMxOTM1ZTdmOGI2YzhmZjVlYyIsInN1YiI6IjY1ZmQ4ZTRjNzcwNzAwMDE2MzA4OWY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iy-N0kgmU2wyzEHwQR4r9sm-DyDHMlrbPsllQFEInqs";

const UseSearchRequest = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState({ movies: [], tvShows: [] });
    const navigate = useNavigate();
    const search = async () => {
        if (query.trim()) {
            // Search for movies
            const responseMovies = await axios.get(`${API_URL}search/movie`, {
                params: {
                    query: query,
                },
                headers: {
                    Accept: "application/json",
                    Authorization,
                },
            });
            // Search for TV shows
            const responseTVShows = await axios.get(`${API_URL}search/tv`, {
                params: {
                    query: query,
                },
                headers: {
                    Accept: "application/json",
                    Authorization,
                },
            });
            // Update state with results
            setResults({
                movies: responseMovies.data.results,
                tvShows: responseTVShows.data.results,
            });
        } else {
            // Clear results if the query is empty
            setResults({ movies: [], tvShows: [] });
        }
    };
    useEffect(() => {
        // Debounce the search for better performance
        const timeoutId = setTimeout(() => {
            search();
        }, 500);

        // Cleanup function to cancel the timeout if the component unmounts
        return () => clearTimeout(timeoutId);
    }, [query]);
    const listMovies = (id) => {
        console.log(id, "search");
        const path = results.movies
            ? `/movie-shows/movie/${id.id}`
            : `/movie-shows/show/${id.id}`;
        navigate(path);
    };
    return {
        search,
        setQuery,
        query,
        results,
    };
};

export default UseSearchRequest;
