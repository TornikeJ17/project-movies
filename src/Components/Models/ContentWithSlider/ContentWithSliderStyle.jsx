import styled from "styled-components";
export const CategoriesSlideContainer = styled.div`
    display: flex;
    flex-flow: column;
    gap: 80px;
    max-width: 1597px;
    width: 100%;
`;

export const CategoriesSlideBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(292px, auto));
    gap: 30px;
    align-self: stretch;
    padding-left: ${({ isActive }) => (isActive === "home" ? "" : "50px")};
    padding-right: ${({ isActive }) => (isActive === "home" ? "" : "50px")};
    padding-bottom: ${({ isActive }) => (isActive === "home" ? "" : "50px")};
    @media only screen and (max-width: 764px) {
        grid-template-columns: repeat(auto-fill, 455px);
        grid-auto-flow: column;
        padding: 16px;
        overflow-x: scroll;
        width: 512px;
    }
`;
export const CategoriesSlideCard = styled.div`
    display: grid;
    grid-template-columns: ${({ images, isActive }) =>
        images > 0
            ? "repeat(auto-fit, minmax(230px, 1fr))"
            : isActive === "home"
            ? "repeat(auto-fit, minmax(150px, 1fr))"
            : "repeat(auto-fit, minmax(115px, 1fr))"};
    gap: 4px;
    padding: 27px;
    height: 287px;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-10, #1a1a1a);
    cursor: pointer;
    @media only screen and (max-width: 764px) {
        grid-template-columns: ${({ images }) =>
            images > 0
                ? "repeat(auto-fit, minmax(230px, 1fr))"
                : "repeat(auto-fit, minmax(195px, 1fr))"};
    }
`;
export const ImageBlock = styled.div`
    background: linear-gradient(
        180deg,
        rgba(26, 26, 26, 0) 0%,
        #1a1a1a 101.79%
    );
    @media only screen and (max-width: 764px) {
        width: 154px;
    }
`;
export const Image = styled.img`
    width: 100%;
    height: ${({ height }) => (height > 0 ? "250px" : "123px")};
    object-fit: cover;
    border-radius: 12px;
    opacity: 0.5;
`;
export const GenreNames = styled.div`
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 27px */
`;
export const BlockClick = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    width: 200%;
`;
