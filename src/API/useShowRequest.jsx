import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmJkZTJiMDYzN2RkMWMxOTM1ZTdmOGI2YzhmZjVlYyIsInN1YiI6IjY1ZmQ4ZTRjNzcwNzAwMDE2MzA4OWY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iy-N0kgmU2wyzEHwQR4r9sm-DyDHMlrbPsllQFEInqs";

const useShowRequest = () => {
    const [getShowGenres, setGetShowGenres] = useState([]);
    const [showsByGenre, setShowsByGenre] = useState([]);
    const [getShowsTrending, setGetShowsTrending] = useState([]);
    const [getShowsPopular, setGetShowsPopular] = useState([]);
    const [getTopShowsRated, setGetTopShowsRated] = useState([]);
    const [getShowsAiring, setGetShowsAiring] = useState([]);

    const showsGenres = async () => {
        const getGenre = await axios
            .get(API_URL + "genre/tv/list", {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            })
            .then((response) => setGetShowGenres(response.data))
            .catch(function (error) {
                console.error(error);
            });
        return getGenre;
    };
    const showsListGenres = async (genreId) => {
        try {
            const getShows = await axios.get(API_URL + "discover/tv", {
                params: {
                    with_genres: genreId,
                },
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            });
            setShowsByGenre((prevShows) => ({
                ...prevShows,
                [genreId]: getShows.data.results,
            }));
        } catch (error) {
            console.log(error);
        }
    };
    const popularShows = async () => {
        const getPopularShows = await axios
            .get(API_URL + "tv/popular", {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            })
            .then((response) => setGetShowsPopular(response.data.results))
            .catch(function (error) {
                console.log(error);
            });
        return getPopularShows;
    };
    const trendingShows = async () => {
        const getTrendingShows = await axios
            .get(API_URL + "trending/tv/day", {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            })
            .then((response) => setGetShowsTrending(response.data.results))
            .catch(function (error) {
                console.log(error);
            });
        return getTrendingShows;
    };
    const topRatedShows = async () => {
        const getTopRatedShows = await axios
            .get(API_URL + "tv/top_rated", {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            })
            .then((response) => setGetTopShowsRated(response.data.results))
            .catch(function (error) {
                console.log(error);
            });
        return getTopRatedShows;
    };
    const airingToday = async () => {
        const getAiringShows = await axios
            .get(API_URL + "tv/airing_today", {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            })
            .then((response) => setGetShowsAiring(response.data.results))
            .catch(function (error) {
                console.log(error);
            });
        return getAiringShows;
    };
    return {
        showsGenres,
        showsListGenres,
        popularShows,
        trendingShows,
        topRatedShows,
        airingToday,
        getShowGenres,
        showsByGenre,
        getShowsTrending,
        getShowsPopular,
        getTopShowsRated,
        getShowsAiring,
    };
};

export default useShowRequest;
