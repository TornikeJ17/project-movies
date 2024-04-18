import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useShowRequest from "../../../API/useShowRequest";
import {
    ShowsPageContainer,
    Poster,
    PosterImage,
    ShowsBlock,
    ShowsBlockCard,
    Cards,
} from "./ShowsPageStyle";
import Trial from "../../Models/Trial/Trial";
import Reviews from "../../Models/Reviews/Reviews";
import Casts from "../../Models/Casts/Casts";
import Description from "../../Models/Description/Description";
const baseURL = "https://image.tmdb.org/t/p/original";

const ShowsPage = () => {
    const { id } = useParams();
    const [showsDetails, setShowsDetails] = useState(null);
    const [showsReviews, setShowsReviews] = useState([]);
    const [showsCasts, setShowsCasts] = useState([]);
    const { fetchShowsDetails, fetchShowsReviews, fetchShowsCasts } =
        useShowRequest();

    useEffect(() => {
        fetchShowsDetails(id).then((data) => {
            console.log(data);
            setShowsDetails(data);
        });
        fetchShowsReviews(id).then((data) => {
            console.log(data);
            setShowsReviews(data);
        });
        fetchShowsCasts(id).then((data) => {
            console.log(data);
            setShowsCasts(data);
        });
    }, [id]);

    if (!showsDetails) {
        return <div>Loading...</div>;
    }
    const renderPosterWithTitle = () => {
        return (
            <Poster>
                <PosterImage src={baseURL + showsDetails.backdrop_path} />
            </Poster>
        );
    };

    return (
        <ShowsPageContainer>
            {renderPosterWithTitle()}

            <ShowsBlock>
                <ShowsBlockCard>
                    <Description descriptionText={showsDetails.overview} />
                    <Casts castData={showsCasts} />
                    <Reviews reviewData={showsReviews} />
                </ShowsBlockCard>
                <ShowsBlockCard>
                    <Cards>
                        <img
                            style={{ width: 100, height: 100 }}
                            src={baseURL + showsDetails.backdrop_path}
                            alt=""
                        />
                    </Cards>
                </ShowsBlockCard>
            </ShowsBlock>
            <Trial />
        </ShowsPageContainer>
    );
};

export default ShowsPage;
