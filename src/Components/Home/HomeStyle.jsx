import styled from "styled-components";

export const CategoriesSlideContainer = styled.div`
    display: grid;
    gap: 80px;
    max-width: 1597px;
`;

export const CategoriesSlideBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(292px, auto));
    gap: 30px;
    align-self: stretch;
`;
export const CategoriesSlideCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
    gap: 4px;
    padding: 30px;
    height: 284px;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-10, #1a1a1a);
`;

export const DevicesContainer = styled.div`
    display: grid;
    max-width: 1597px;
    align-items: flex-start;
    gap: 80px;
    align-self: stretch;
`;
export const DevicesBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(512px, 1fr));
    gap: 30px;
    align-self: stretch;
    @media only screen and (max-width: 764px) {
        padding: 16px;
    }
`;
export const DevicesCard = styled.div`
    display: grid;
    padding: 50px;
    gap: 30px;
    flex: 1 0 0;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: linear-gradient(
            222deg,
            rgba(229, 0, 0, 0.5) -208.03%,
            rgba(229, 0, 0, 0) 41.32%
        ),
        #0f0f0f;
`;
export const DeviceHeader = styled.div`
    display: grid;
    grid-template-columns: 0fr 1fr;
    align-items: center;
    gap: 16px;
`;
export const DeviceText = styled.div`
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    align-self: stretch;
`;
export const DeviceIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    gap: 10px;
    border-radius: 12px;
    border: 1px solid var(--Black-12, #1f1f1f);
    background: var(--Black-08, #141414);
`;
export const DeviceTitle = styled.div`
    color: #fff;
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
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
    height: 123px;
    object-fit: fill;
    border-radius: 12px;
`;
export const GenreNames = styled.div`
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 27px */
`;
