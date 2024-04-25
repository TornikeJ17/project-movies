import styled from "styled-components";

export const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    span {
        display: grid;
        justify-content: end;
    }
`;
export const CategoriesBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    max-width: 1597px;
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
`;
export const Image = styled.img`
    width: 100%;
    height: ${({ height }) => (height > 0 ? "250px" : "270px")};
    object-fit: cover;
    border-radius: 12px;
    opacity: 0.5;
`;
export const ShowMoreButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #1f1f1f;
    background: #0f0f0f;
    cursor: pointer;
    margin: 20px auto;
    span {
        display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    border-radius: 8px;
    padding: 14px 24px;
    gap: 10px;
    cursor: pointer;
        &:hover{
            border: 1px solid var(--Black-10, #1a1a1a);
    background: var(--Black-10, #1a1a1a);
}
        
        }
    }
`;
