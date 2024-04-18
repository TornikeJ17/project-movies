import styled from "styled-components";

export const ShowsPageContainer = styled.div`
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
export const ShowsBlock = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
`;
export const ShowsBlockCard = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
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
export const CardsBlock = styled.div`
    display: grid;
    gap: 20px;
`;
export const LanguagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
`;
export const LanguagesBlock = styled.div`
    display: grid;
    padding: 6px 12px;
    align-items: center;
    border-radius: 6px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-08, #141414);
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
`;
export const DirectorBlock = styled.div`
    display: grid;
    grid-template-columns: 0fr auto;
    gap: 10px;
    padding: 6px 12px;
    align-items: center;
    border-radius: 6px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-08, #141414);
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
`;
export const Image = styled.img`
    width: 47px;
    height: 50px;
    border-radius: 6px;
`;
