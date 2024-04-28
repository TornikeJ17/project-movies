import React from "react";
import {
    ContainerSeason,
    SeasonTitle,
    EpisodeSeasonBlock,
} from "./SeasonsContainerStyle";
const SeasonsContainer = ({ showEpisode }) => {
    const episodeRender = () => {
        // Convert the showEpisode object into an array and map over it
        return Object.entries(showEpisode).map(([seasonNumber, episodes]) => (
            <div key={seasonNumber}>
                {console.log(episodes, "episodes")}
                {console.log(seasonNumber, "seasonNumber")}
                <h3>Season {seasonNumber}</h3>
                {episodes.length === 0 ? (
                    <p>No episodes available for this season.</p>
                ) : (
                    <ul>
                        {episodes.map((episode) => (
                            <li key={episode.id}>
                                {episode.episode_number}. {episode.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
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
