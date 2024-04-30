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
    DirectorBlock,
    Image,
    ImageSvg,
    TitleBlockContainer,
    TitleContainer,
    TitleBlock,
    TagLine,
} from "./ShowsPageStyle";
import Trial from "../../Models/Trial/Trial";
import Reviews from "../../Models/Reviews/Reviews";
import Casts from "../../Models/Casts/Casts";
import Description from "../../Models/Description/Description";
import Titles from "../../Models/Titles/Titles";
import { icons } from "../../../API/svgFiles";
import SeasonsContainer from "../SeasonsContainer/SeasonsContainer";
import ContainerPlay from "../ContainerPlay/ContainerPlay";
const baseURL = "https://image.tmdb.org/t/p/original";

const ShowsPage = () => {
    const { id } = useParams();
    const [showsDetails, setShowsDetails] = useState(null);
    const [showsReviews, setShowsReviews] = useState([]);
    const [showsCasts, setShowsCasts] = useState([]);
    const [showEpisode, setShowEpisode] = useState([]);
    const {
        fetchShowsDetails,
        fetchShowsReviews,
        fetchShowsCasts,
        fetchSeasonEpisodes,
    } = useShowRequest();
    const seasonsNum = showsDetails?.seasons.map((i) => i.season_number);
    console.log(seasonsNum, "raginda vinaxar");
    useEffect(() => {
        fetchShowsDetails(id).then((data) => {
            setShowsDetails(data);
            // Fetch episodes for each season after we have the show details
            data.seasons.forEach((season) => {
                fetchSeasonEpisodes(id, season.season_number).then(
                    (episodes) => {
                        setShowEpisode((prevEpisodes) => ({
                            ...prevEpisodes,
                            [season.season_number]: episodes,
                        }));
                    }
                );
            });
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
    console.log(showEpisode, "showEpisode");
    if (!showsDetails) {
        return <div>Loading...</div>;
    }
    const renderPosterWithTitle = () => {
        return (
            <Poster>
                <PosterImage Image={baseURL + showsDetails.backdrop_path} />
                {console.log(showsDetails, "showDetails")}
                <TitleBlockContainer>
                    <TitleContainer>
                        <TitleBlock>{showsDetails.original_name}</TitleBlock>
                        <TagLine>{showsDetails.tagline}</TagLine>
                    </TitleContainer>
                    <ContainerPlay />
                </TitleBlockContainer>
            </Poster>
        );
    };

    return (
        <ShowsPageContainer>
            {renderPosterWithTitle()}

            <ShowsBlock>
                <ShowsBlockCard>
                    <SeasonsContainer showEpisode={showEpisode} />
                    <Description descriptionText={showsDetails.overview} />
                    <Casts castData={showsCasts.cast} CastsTitle={"Cast"} />
                    <Casts castData={showsCasts.crew} CastsTitle={"Crew"} />
                    {showsReviews.length > 0 && (
                        <Reviews reviewData={showsReviews} />
                    )}
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
                                {showsCasts.crew?.slice(0, 1).map((item) => (
                                    <DirectorBlock>
                                        {item.profile_path ? (
                                            <Image
                                                src={
                                                    baseURL + item.profile_path
                                                }
                                                alt=""
                                            />
                                        ) : (
                                            <ImageSvg>{icons[11].svg}</ImageSvg>
                                        )}
                                        {item.name}
                                    </DirectorBlock>
                                ))}
                            </LanguagesContainer>
                        </CardsBlock>
                    </Cards>
                </ShowsBlockCard>
            </ShowsBlock>
            <Trial />
        </ShowsPageContainer>
    );
};

export default ShowsPage;
