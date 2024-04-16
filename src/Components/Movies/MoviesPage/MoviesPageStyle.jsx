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
`;
export const MovieBlock = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
`;
export const MovieBlockCard = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 30px;
    div {
        border-radius: 12px;
        border: 1px solid var(--Black-15, #262626);
        background: var(--Black-10, #1a1a1a);
    }
`;
export const MovieBlock2 = styled.div``;
export const MovieBlock3 = styled.div``;
export const MovieBlock4 = styled.div``;
export const MovieBlock5 = styled.div``;
