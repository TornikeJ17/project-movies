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
    CardsBlock,
    LanguagesContainer,
    LanguagesBlock,
} from "./ShowsPageStyle";
import Trial from "../../Models/Trial/Trial";
import Reviews from "../../Models/Reviews/Reviews";
import Casts from "../../Models/Casts/Casts";
import Description from "../../Models/Description/Description";
import Titles from "../../Models/Titles/Titles";
import { icons } from "../../../API/svgFiles";
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
                        <CardsBlock>
                            <Titles
                                children={"Released Year"}
                                icons={icons[7].svg}
                            />
                            {showsDetails.first_air_date.slice(0, 4)}
                        </CardsBlock>
                        <CardsBlock>
                            <Titles
                                children={"Available Languages"}
                                icons={icons[8].svg}
                            />
                            <LanguagesContainer>
                                {showsDetails.spoken_languages.map((item) => (
                                    <LanguagesBlock>{item.name}</LanguagesBlock>
                                ))}
                            </LanguagesContainer>
                        </CardsBlock>
                        <CardsBlock>
                            <Titles children={"Ratings"} icons={icons[4].svg} />
                        </CardsBlock>
                        <CardsBlock>
                            <Titles children={"Genres"} icons={icons[9].svg} />
                            <LanguagesContainer>
                                {showsDetails.genres.map((item) => (
                                    <LanguagesBlock>{item.name}</LanguagesBlock>
                                ))}
                            </LanguagesContainer>
                        </CardsBlock>
                        <CardsBlock>
                            <Titles children={"Director"} />
                            <LanguagesContainer>
                                {showsDetails.created_by.map((item) => (
                                    <LanguagesBlock>
                                        <img
                                            style={{
                                                width: 100,
                                                height: 100,
                                            }}
                                            src={baseURL + item.profile_path}
                                            alt=""
                                        />
                                        {item.name}
                                    </LanguagesBlock>
                                ))}
                            </LanguagesContainer>
                        </CardsBlock>
                        <CardsBlock>
                            <Titles children={"Music"} />
                        </CardsBlock>
                    </Cards>
                </ShowsBlockCard>
            </ShowsBlock>
            <Trial />
        </ShowsPageContainer>
    );
};

export default ShowsPage;
