import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const token = "Bearer 3fbde2b0637dd1c1935e7f8b6c8ff5ec";
const Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmJkZTJiMDYzN2RkMWMxOTM1ZTdmOGI2YzhmZjVlYyIsInN1YiI6IjY1ZmQ4ZTRjNzcwNzAwMDE2MzA4OWY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iy-N0kgmU2wyzEHwQR4r9sm-DyDHMlrbPsllQFEInqs";
// const baseURL = "https://image.tmdb.org/t/p/original";

const useRequest = () => {
    const [getGenres, setGetGenres] = useState([]);
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const [getTrending, setGetTrending] = useState([]);
    const [getPopular, setGetPopular] = useState([]);

    const movieGenres = async () => {
        const getGenre = await axios
            .get(API_URL + "genre/movie/list", {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            })
            .then((response) => setGetGenres(response.data))
            .catch(function (error) {
                console.error(error);
            });
        return getGenre;
    };
    const movieListGenres = async (genreId) => {
        console.log(genreId, "ganre");
        try {
            const getMovies = await axios.get(API_URL + "discover/movie", {
                params: {
                    with_genres: genreId,
                },
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            });
            setMoviesByGenre((prevMovies) => ({
                ...prevMovies,
                [genreId]: getMovies.data.results,
            }));
        } catch (error) {
            console.log(error);
        }
    };
    const popularMovies = async () => {
        const getPopularMovies = await axios
            .get(API_URL + "movie/popular", {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            })
            .then((response) => setGetPopular(response.data.results))
            .catch(function (error) {
                console.log(error);
            });
        return getPopularMovies;
    };
    const trendingMovies = async () => {
        const getTrendingMovies = await axios
            .get(API_URL + "trending/movie/day", {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            })
            .then((response) => setGetTrending(response.data.results))
            .catch(function (error) {
                console.log(error);
            });
        return getTrendingMovies;
    };

    return {
        // baseURL,
        movieGenres,
        movieListGenres,
        moviesByGenre,
        popularMovies,
        getGenres,
        trendingMovies,
        getTrending,
        getPopular,
    };
};

export default useRequest;
