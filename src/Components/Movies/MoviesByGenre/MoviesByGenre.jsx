import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovieRequest from "../../../API/useMovieRequest";
import { movieGenre } from "../../../API/genres";
import {
    CategoriesBlock,
    CategoriesSlideCard,
    ImageBlock,
    Image,
    TitleContainer,
    ShowMoreButton,
} from "./MoviesByGenreStyle";
const baseURL = "https://image.tmdb.org/t/p/original";

const MoviesByGenre = ({ isMovieContext }) => {
    const [movies, setMovies] = useState({
        results: [],
        page: 1,
        total_pages: 1,
    });
    const { id } = useParams();
    const { fetchMovieById } = useMovieRequest();
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleShowMore = () => {
        const nextPage = movies.page + 1;
        if (nextPage <= movies.total_pages) {
            fetchMovieById(id, nextPage).then((data) => {
                setMovies((prevMovies) => ({
                    ...data,
                    results: [...prevMovies.results, ...data.results],
                    page: data.page,
                }));
            });
        }
    };

    const listMovies = (id, name) => {
        const path = !isMovieContext
            ? `/movie-shows/movie/${id.id}`
            : `/movie-shows/show/${id.id}`;
        navigate(path);
    };
    useEffect(() => {
        fetchMovieById(id, currentPage).then((data) => {
            setMovies(data);
        });
    }, [id, currentPage]); // Add currentPage to the dependency array

    const genresResult =
        movieGenre.find((genre) => genre.id === Number(id))?.name || "";

    return (
        <>
            <TitleContainer>
                <h1>{genresResult}</h1>
                <span>{`Page ${currentPage} / ${movies.total_pages}`}</span>
            </TitleContainer>
            <CategoriesBlock>
                {movies.results.map((movie) => (
                    <CategoriesSlideCard
                        key={movie.id}
                        onClick={() => listMovies(movie)}
                    >
                        <ImageBlock key={movie.id}>
                            <Image
                                // height={secondArray.length}
                                src={baseURL + movie.poster_path}
                                alt={movie.title}
                            />
                        </ImageBlock>
                    </CategoriesSlideCard>
                ))}
            </CategoriesBlock>
            {movies.page < movies.total_pages && (
                <ShowMoreButton onClick={() => handleShowMore()}>
                    <span>Show More</span>
                </ShowMoreButton>
            )}
        </>
    );
};

export default MoviesByGenre;
