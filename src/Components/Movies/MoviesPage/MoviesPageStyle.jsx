import styled from "styled-components";

export const MoviesPageContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 100px;
`;
export const Poster = styled.div`
    position: relative;
    max-width: 1594px;
`;
export const PosterImage = styled.div`
    height: 835px;
    max-height: 835px;
    border-radius: 12px;
    border: 1px solid #262626;
    width: 100%;
    background: ${({ Image }) =>
        `linear-gradient(to top, rgba(20, 20, 20, 0.95) 10%, rgba(20, 20, 20, 0.6) 40%, rgba(20, 20, 20, 0)), url(${Image})`};
    background-position: center top;
    background-size: cover;
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

export const TitleBlockContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 50px;
`;
export const TitleContainer = styled.div`
    display: flex;
    flex-flow: column;
    position: absolute;
    top: -150px;
`;
export const TitleBlock = styled.div`
    color: var(--Absolute-White, #fff);
    text-align: center;
    font-family: Manrope;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 57px */
`;

export const TagLine = styled.div`
    color: var(--Grey-60, #999);
    text-align: center;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
`;
