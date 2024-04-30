import React, { useState } from "react";
import {
    ContainerSeason,
    SeasonTitle,
    EpisodeSeasonBlock,
    SeasonContainer,
    SeasonBlock,
    CircleButton,
    EpisodeBlock,
    EpisodeImage,
    EpisodeNumber,
    TitleBlock,
    ImgNumBlock,
    Overview,
    TitleEpisode,
} from "./SeasonsContainerStyle";
import { icons } from "../../../API/svgFiles";
const baseURL = "https://image.tmdb.org/t/p/original";

const SeasonsContainer = ({ showEpisode }) => {
    const [isActive, setIsActive] = useState(null);
    const handleClick = (seasonNumber) => {
        setIsActive(isActive === seasonNumber ? null : seasonNumber);
    };

    const episodeRender = () => {
        // Convert the showEpisode object into an array and map over it
        return Object.entries(showEpisode).map(([seasonNumber, episodes]) => {
            console.log("avoeeeeee asjfakfh", showEpisode[0]);

            const numbers = () => {
                const numberSeasons = Number(seasonNumber);
                if (numberSeasons === 0) {
                    return numberSeasons + 1;
                } else {
                    return numberSeasons;
                }
            };
            return (
                <EpisodeSeasonBlock
                    key={seasonNumber}
                    onClick={() => handleClick(seasonNumber)}
                >
                    {console.log(episodes, "episodes")}
                    {console.log(seasonNumber, "seasonNumber")}
                    <SeasonContainer>
                        <SeasonBlock>
                            <h3>Season {numbers()}</h3>
                            <div>{episodes.length} Episodes</div>
                        </SeasonBlock>
                        <CircleButton>
                            {isActive === seasonNumber
                                ? icons[15].svg
                                : icons[14].svg}
                        </CircleButton>
                    </SeasonContainer>
                    {isActive === seasonNumber &&
                        (episodes.length === 0 ? (
                            <p>No episodes available for this season.</p>
                        ) : (
                            <div>
                                {episodes.map((episode) => (
                                    <EpisodeBlock key={episode.id}>
                                        <ImgNumBlock>
                                            <EpisodeNumber>
                                                {episode.episode_number}
                                            </EpisodeNumber>
                                            <EpisodeImage
                                                src={
                                                    baseURL + episode.still_path
                                                }
                                            />
                                        </ImgNumBlock>
                                        <TitleBlock>
                                            <TitleEpisode>
                                                <div>{episode.name}</div>
                                                <span>
                                                    {icons[16].svg}
                                                    {episode.runtime + "min"}
                                                </span>
                                            </TitleEpisode>
                                            <Overview>
                                                {episode.overview}
                                            </Overview>
                                        </TitleBlock>
                                    </EpisodeBlock>
                                ))}
                            </div>
                        ))}
                </EpisodeSeasonBlock>
            );
        });
    };
    return (
        <ContainerSeason>
            <SeasonTitle>Seasons and Episodes</SeasonTitle>
            {episodeRender(showEpisode)}
        </ContainerSeason>
    );
};

export default SeasonsContainer;
