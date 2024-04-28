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
            const shows = getShows.data.results;
            if (shows.length) {
                setShowsByGenre((prevShows) => ({
                    ...prevShows,
                    [genreId]: getShows.data.results,
                }));
            }
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
    const fetchShowsDetails = async (id) => {
        try {
            const response = await axios.get(`${API_URL}tv/${id}`, {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching movie details:", error);
            throw error;
        }
    };
    const fetchShowsReviews = async (id) => {
        console.log(id);
        try {
            const response = await axios.get(`${API_URL}tv/${id}/reviews`, {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            });
            console.log(response.data.results, "review response");
            return response.data.results;
        } catch (error) {
            console.log("Error fetching movie reviews:", error);
            throw error;
        }
    };
    const fetchShowsCasts = async (id) => {
        try {
            const response = await axios.get(`${API_URL}tv/${id}/credits`, {
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            });
            console.log("casts", response);
            return response.data;
        } catch (error) {
            console.log("Error fetching movie casts:", error);
            throw error;
        }
    };
    const fetchShowsById = async (id, pages) => {
        try {
            const response = await axios.get(`${API_URL}discover/tv`, {
                params: {
                    with_genres: id,
                    page: pages,
                },
                headers: {
                    accept: "application/json",
                    Authorization,
                },
            });
            return response.data;
        } catch (error) {
            console.log("Error fetching movie casts:", error);
            throw error;
        }
    };
    const fetchSeasonEpisodes = async (showId, seasonNumber) => {
        try {
            const response = await axios.get(
                `${API_URL}tv/${showId}/season/${seasonNumber}`,
                {
                    headers: {
                        accept: "application/json",
                        Authorization,
                    },
                }
            );
            return response.data.episodes; // The API returns an array of episodes for the season
        } catch (error) {
            console.error("Error fetching season episodes:", error);
            throw error;
        }
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
        fetchShowsDetails,
        fetchShowsReviews,
        fetchShowsCasts,
        fetchShowsById,
        fetchSeasonEpisodes,
    };
};

export default useShowRequest;
