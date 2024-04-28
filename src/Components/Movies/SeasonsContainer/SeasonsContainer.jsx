import React, { useState } from "react";
import {
    ContainerSeason,
    SeasonTitle,
    EpisodeSeasonBlock,
} from "./SeasonsContainerStyle";
const SeasonsContainer = ({ showEpisode }) => {
    const [isActive, setIsActive] = useState(null);
    const handleClick = (seasonNumber) => {
        setIsActive(isActive === seasonNumber ? null : seasonNumber);
    };

    const episodeRender = () => {
        // Convert the showEpisode object into an array and map over it
        return Object.entries(showEpisode).map(([seasonNumber, episodes]) => (
            <EpisodeSeasonBlock
                key={seasonNumber}
                onClick={() => handleClick(seasonNumber)}
            >
                {console.log(episodes, "episodes")}
                {console.log(seasonNumber, "seasonNumber")}
                <div>
                    <h3>Season {seasonNumber}</h3>
                    <div>{episodes.length} Episodes</div>
                </div>
                {isActive === seasonNumber &&
                    (episodes.length === 0 ? (
                        <p>No episodes available for this season.</p>
                    ) : (
                        <ul>
                            {episodes.map((episode) => (
                                <li key={episode.id}>
                                    {episode.episode_number}. {episode.name}
                                </li>
                            ))}
                        </ul>
                    ))}
            </EpisodeSeasonBlock>
        ));
    };
    return (
        <ContainerSeason>
            <SeasonTitle>Seasons and Episodes</SeasonTitle>
            {episodeRender(showEpisode)}
        </ContainerSeason>
    );
};

export default SeasonsContainer;
