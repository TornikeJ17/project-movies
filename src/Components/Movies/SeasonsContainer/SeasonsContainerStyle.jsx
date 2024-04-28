import styled from "styled-components";

export const ContainerSeason = styled.div`
    display: grid;
    background: var(--Black-10, #1a1a1a);
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    max-height: 233px;
    padding: 50px;
    gap: 20px;
`;
export const SeasonTitle = styled.div`
    color: #fff;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
`;
export const EpisodeSeasonBlock = styled.div`
    display: flex;
    padding: 24px 50px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-06, #0f0f0f);
`;
