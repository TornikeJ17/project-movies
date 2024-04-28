import { useState } from "react";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/";
const Authorization =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmJkZTJiMDYzN2RkMWMxOTM1ZTdmOGI2YzhmZjVlYyIsInN1YiI6IjY1ZmQ4ZTRjNzcwNzAwMDE2MzA4OWY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iy-N0kgmU2wyzEHwQR4r9sm-DyDHMlrbPsllQFEInqs";

const useMovieRequest = () => {
  const [getGenres, setGetGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [getTrending, setGetTrending] = useState([]);
  const [getPopular, setGetPopular] = useState([]);
  const [getTopRated, setGetTopRated] = useState([]);
  const [getUpcoming, setGetUpcoming] = useState([]);

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
      const movies = getMovies.data.results;
      if (movies.length) {
        setMoviesByGenre((prevMovies) => ({
          ...prevMovies,
          [genreId]: getMovies.data.results,
        }));
      }
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
  const topRatedMovies = async () => {
    const getTopRatedMovies = await axios
      .get(API_URL + "movie/top_rated", {
        headers: {
          accept: "application/json",
          Authorization,
        },
      })
      .then((response) => setGetTopRated(response.data.results))
      .catch(function (error) {
        console.log(error);
      });
    return getTopRatedMovies;
  };
  const upComingMovies = async () => {
    const getUpcomingMovies = await axios
      .get(API_URL + "movie/upcoming", {
        headers: {
          accept: "application/json",
          Authorization,
        },
      })
      .then((response) => setGetUpcoming(response.data.results))
      .catch(function (error) {
        console.log(error);
      });
    return getUpcomingMovies;
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await axios.get(`${API_URL}movie/${id}`, {
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
  const fetchMovieReviews = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(`${API_URL}movie/${id}/reviews`, {
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
  const fetchMovieCasts = async (id) => {
    try {
      const response = await axios.get(`${API_URL}movie/${id}/credits`, {
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
  const fetchMovieVideos = async (id) => {
    try {
      const response = await axios.get(`${API_URL}movie/${id}/videos`, {
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization,
        },
      });
      console.log("movie videos", response);
      return response.data.results;
    } catch (error) {
      console.log("Error fetching movie casts:", error);
      throw error;
    }
  };
  const fetchMovieById = async (id, pages) => {
    try {
      const response = await axios.get(`${API_URL}discover/movie`, {
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

  return {
    movieGenres,
    movieListGenres,
    moviesByGenre,
    popularMovies,
    getGenres,
    trendingMovies,
    getTrending,
    getPopular,
    topRatedMovies,
    getTopRated,
    upComingMovies,
    getUpcoming,
    fetchMovieDetails,
    fetchMovieReviews,
    fetchMovieCasts,
    fetchMovieVideos,
    fetchMovieById,
  };
};

export default useMovieRequest;
