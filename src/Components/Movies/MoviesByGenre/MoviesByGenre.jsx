import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieRequest from "../../../API/useMovieRequest";
import { genres } from "../../../API/genres";
import {
    CategoriesBlock,
    CategoriesSlideCard,
    ImageBlock,
    Image,
    TitleContainer,
} from "./MoviesByGenreStyle";
const baseURL = "https://image.tmdb.org/t/p/original";

const MoviesByGenre = () => {
    const [movies, setMovies] = useState({
        results: [],
        page: 1,
        total_pages: 1,
    });
    const { id } = useParams();
    const { fetchMovieById } = useMovieRequest();
    const [currentPage, setCurrentPage] = useState(1);

    const handleLeft = () => {
        // Decrement page if greater than 1
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleRight = () => {
        // Increment page if less than total_pages
        if (currentPage < movies.total_pages) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        fetchMovieById(id, currentPage).then((data) => {
            console.log(data, "Movie data fetched");
            setMovies(data);
        });
    }, [id, currentPage]); // Add currentPage to the dependency array

    const genresResult =
        genres.find((genre) => genre.id === Number(id))?.name || "";

    return (
        <div>
            <TitleContainer>
                <h1>{genresResult}</h1>
                <span>{`Page ${currentPage} / ${movies.total_pages}`}</span>
            </TitleContainer>
            <CategoriesBlock>
                {movies.results.map((movie) => (
                    <CategoriesSlideCard key={movie.id}>
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
            <button onClick={handleLeft} disabled={currentPage <= 1}>
                Left
            </button>
            <button
                onClick={handleRight}
                disabled={currentPage >= movies.total_pages}
            >
                Right
            </button>
        </div>
    );
};

export default MoviesByGenre;
