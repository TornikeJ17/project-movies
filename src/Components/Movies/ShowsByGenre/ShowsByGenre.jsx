import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useShowRequest from "../../../API/useShowRequest";
import { showGenre } from "../../../API/genres";
import {
    CategoriesBlock,
    CategoriesSlideCard,
    ImageBlock,
    Image,
    TitleContainer,
    ShowMoreButton,
} from "./ShowsByGenreStyle";
const baseURL = "https://image.tmdb.org/t/p/original";

const ShowsByGenre = ({ isMovieContext }) => {
    const [shows, setShows] = useState({
        results: [],
        page: 1,
        total_pages: 1,
    });
    const { id } = useParams();
    const { fetchShowsById } = useShowRequest();
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleShowMore = () => {
        const nextPage = shows.page + 1;
        if (nextPage <= shows.total_pages) {
            fetchShowsById(id, nextPage).then((data) => {
                setShows((prevShows) => ({
                    ...data,
                    results: [...prevShows.results, ...data.results],
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
        fetchShowsById(id, currentPage).then((data) => {
            console.log(data, "Movie data fetched");
            setShows(data);
        });
    }, [id, currentPage]); // Add currentPage to the dependency array

    const genresResult =
        showGenre.find((genre) => genre.id === Number(id))?.name || "";

    return (
        <>
            <TitleContainer>
                <h1>{genresResult}</h1>
                <span>{`Page ${currentPage} / ${shows.total_pages}`}</span>
            </TitleContainer>
            <CategoriesBlock>
                {shows.results.map((show) => (
                    <CategoriesSlideCard
                        key={show.id}
                        onClick={() => listMovies(show)}
                    >
                        <ImageBlock key={show.id}>
                            <Image
                                // height={secondArray.length}
                                src={baseURL + show.poster_path}
                                alt={show.title}
                            />
                        </ImageBlock>
                    </CategoriesSlideCard>
                ))}
            </CategoriesBlock>
            {shows.page < shows.total_pages && (
                <ShowMoreButton onClick={() => handleShowMore()}>
                    <span>Show More</span>
                </ShowMoreButton>
            )}
        </>
    );
};

export default ShowsByGenre;
