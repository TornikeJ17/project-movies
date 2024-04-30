import styled from "styled-components";

export const ContainerSeason = styled.div`
    display: grid;
    background: var(--Black-10, #1a1a1a);
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    max-height: 100%;
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
    display: grid;
    padding: 24px 50px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-06, #0f0f0f);
    cursor: pointer;
    max-width: 840px;
`;
export const SeasonContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    width: 840px;
`;
export const SeasonBlock = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
    h3 {
        color: var(--Absolute-White, #fff);
        font-family: Manrope;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 36px */
    }
    div {
        color: var(--Grey-60, #999);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 27px */
    }
`;
export const CircleButton = styled.div`
    display: grid;
    align-items: center;
    svg {
        display: flex;
        padding: 14px;
        align-items: center;
        border-radius: 100px;
        border: 1px solid var(--Black-15, #262626);
        background: var(--Black-08, #141414);
    }
`;
export const EpisodeBlock = styled.div`
    display: flex;
    padding: 30px 0px 40px 0px;
    align-items: center;
    gap: 18px;
    align-self: stretch;
    border-top: 1px solid var(--Black-15, #262626);
    border-bottom: 1px solid var(--Black-15, #262626);
`;
export const EpisodeImage = styled.img`
    display: flex;
    width: 172px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0.5) 100%
        ),
        url(<path-to-image>) lightgray 50% / cover no-repeat;
`;
export const EpisodeNumber = styled.span`
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
`;
export const TitleBlock = styled.div`
    display: grid;
    gap: 10px;
`;
export const ImgNumBlock = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 18px;
`;
export const Overview = styled.div`
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
`;
export const TitleEpisode = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    span {
        display: flex;
        padding: 6px;
        align-items: center;
        gap: 4px;
        border-radius: 6px;
        border: 1px solid var(--Black-15, #262626);
        background: var(--Black-08, #141414);
    }
`;
