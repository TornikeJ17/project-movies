import React, { useState } from "react";
import {
    ContainerSeason,
    SeasonTitle,
    EpisodeSeasonBlock,
} from "./SeasonsContainerStyle";
const baseURL = "https://image.tmdb.org/t/p/original";

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
                    <h3>Season {Number(seasonNumber) + 1}</h3>
                    <div>{episodes.length} Episodes</div>
                </div>
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
