import React, { useState } from "react";
import {
    ContainerSeason,
    SeasonTitle,
    EpisodeSeasonBlock,
    SeasonContainer,
    SeasonBlock,
    CircleButton,
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
                                    <div key={episode.id}>
                                        <img
                                            width={200}
                                            src={baseURL + episode.still_path}
                                        />
                                        {episode.episode_number}. {episode.name}{" "}
                                        {episode.runtime + "min"}
                                    </div>
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
