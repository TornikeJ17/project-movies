import styled from "styled-components";

export const MoviesPageContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 100px;
`;
export const Poster = styled.div`
    max-width: 1594px;
`;
export const PosterImage = styled.img`
    max-height: 835px;
    border-radius: 12px;
    border: 1px solid #262626;
    background: linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0) 100%),
        url(<path-to-image>) lightgray 50% / cover no-repeat;
    width: 100%;
`;
export const MovieBlock = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
`;
export const MovieBlockCard = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
`;
export const ReviewCard = styled.div`
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-06, #0f0f0f);
    max-width: 468.5px;
    height: 265px;
    overflow: auto;
    overflow: hidden;
    span {
        color: var(--Grey-60, #999);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 27px */
    }
`;
export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 20px;
    padding: 50px;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-10, #1a1a1a);
`;

export const MovieBlock4 = styled.div``;
export const MovieBlock5 = styled.div``;
