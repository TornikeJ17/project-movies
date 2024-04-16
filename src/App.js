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
import axios from "axios";

const App = () => {
    const location = useLocation();
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

    const getActivePage = (pathname) => {
        if (pathname === "/") return "home";
        else if (pathname === "/movie") return "movie";
        else if (pathname === "/support") return "support";
        else if (pathname === "/subscriptions") return "subscriptions";
        else return null;
    };
    const [isActive, setIsActive] = useState(getActivePage(location.pathname));
    useEffect(() => {
        movieGenres();
        trendingMovies();
        popularMovies();
        topRatedMovies();
        upComingMovies();
    }, []);
    useEffect(() => {
        setIsActive(getActivePage(location.pathname));
    }, [location]);
    return (
        <AppContainer isActive={isActive}>
            <GlobalStyle />
            <Navbar isActive={isActive} setIsActive={setIsActive} />
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
                            />
                        }
                    />
                    <Route
                        path="/movie"
                        element={
                            <Movies
                                movieListGenres={movieListGenres}
                                genres={getGenres}
                                moviesByGenre={moviesByGenre}
                                getTrending={getTrending}
                                getPopular={getPopular}
                                getTopRated={getTopRated}
                                getUpcoming={getUpcoming}
                            />
                        }
                    />
                    <Route path="/support" element={<Support />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                </Routes>
            </Main>
            <Footer />
        </AppContainer>
    );
};

export default App;
