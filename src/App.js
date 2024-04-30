import React, { useEffect, useState } from "react";
import useMovieRequest from "./API/useMovieRequest";
import { Route, Routes, useLocation } from "react-router-dom";
import { GlobalStyle, Main, AppContainer } from "./Components/Styles/Styles";

import Footer from "./Components/Models/Footer/Footer";
import Navbar from "./Components/Models/Navbar/Navbar";
import Movies from "./Components/Movies/Movies";
import Support from "./Components/Support/Support";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import Home from "./Components/Home/Home";
import useShowRequest from "./API/useShowRequest";
import MoviesPage from "./Components/Movies/MoviesPage/MoviesPage";
import ShowsPage from "./Components/Movies/ShowsPage/ShowsPage";
import MoviesByGenre from "./Components/Movies/MoviesByGenre/MoviesByGenre";
import ShowsByGenre from "./Components/Movies/ShowsByGenre/ShowsByGenre";
import MobileNavBar from "./Components/Models/Navbar/MobileNavBar/MobileNavbar";

const Mobile_BreakPoint = 764;

const App = () => {
    const {
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
    } = useMovieRequest();
    const {
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
    } = useShowRequest();
    const location = useLocation();
    const [isActive, setIsActive] = useState("");
    const [isMobile, setIsMobile] = useState(
        window.innerWidth <= Mobile_BreakPoint
    );
    const [modalOpen, setModalOpen] = useState(false);
    const handleClickModal = () => {
        setModalOpen(!modalOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= Mobile_BreakPoint);
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        setIsActive(location.pathname === "/" ? "home" : "");
    }, [location]);
    useEffect(() => {
        movieGenres();
        trendingMovies();
        popularMovies();
        topRatedMovies();
        upComingMovies();
        showsGenres();
        showsListGenres();
        popularShows();
        trendingShows();
        topRatedShows();
        airingToday();
    }, []);
    const isMovieContext = false;
    const isGenre = false;
    return (
        <AppContainer isActive={isActive} isMobile={isMobile}>
            <GlobalStyle />
            <Navbar
                isActive={isActive}
                setIsActive={setIsActive}
                isMobile={isMobile}
            />
            <Main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                movieListGenres={movieListGenres}
                                moviesByGenre={moviesByGenre}
                                genres={getGenres}
                                isActive={isActive}
                                isMovieContext={isMovieContext}
                                isGenre={isGenre}
                                isMobile={isMobile}
                            />
                        }
                    />
                    <Route
                        path="/movie-shows"
                        element={
                            <Movies
                                //movies
                                movieListGenres={movieListGenres}
                                genres={getGenres}
                                moviesByGenre={moviesByGenre}
                                getTrending={getTrending}
                                getPopular={getPopular}
                                getTopRated={getTopRated}
                                getUpcoming={getUpcoming}
                                //shows
                                showsListGenres={showsListGenres}
                                getShowGenres={getShowGenres}
                                showsByGenre={showsByGenre}
                                getShowsTrending={getShowsTrending}
                                getShowsPopular={getShowsPopular}
                                getTopShowsRated={getTopShowsRated}
                                getShowsAiring={getShowsAiring}
                                isMovieContext={isMovieContext}
                                isGenre={isGenre}
                                isMobile={isMobile}
                            />
                        }
                    />
                    <Route
                        path="/movie-shows/movie/:id"
                        element={
                            <MoviesPage
                                isMobile={isMobile}
                                handleClickModal={handleClickModal}
                                modalOpen={modalOpen}
                            />
                        }
                    />
                    <Route
                        path="/movie-shows/show/:id"
                        element={
                            <ShowsPage
                                isMobile={isMobile}
                                handleClickModal={handleClickModal}
                                modalOpen={modalOpen}
                            />
                        }
                    />
                    <Route
                        path="/movie-shows/genre/movie/:id"
                        element={
                            <MoviesByGenre isMovieContext={isMovieContext} />
                        }
                    />
                    <Route
                        path="/movie-shows/genre/show/:id"
                        element={
                            <ShowsByGenre isMovieContext={isMovieContext} />
                        }
                    />
                    <Route path="/support" element={<Support />} />
                    <Route
                        path="/subscriptions"
                        element={<Subscriptions isMobile={isMobile} />}
                    />
                </Routes>
            </Main>
            <MobileNavBar isActive={isActive} setIsActive={setIsActive} />
            <Footer />
        </AppContainer>
    );
};

export default App;
