import styled from "styled-components";

export const RatingContainer = styled.div`
    display: flex;
    padding: 6px 10px 6px 6px;
    align-items: center;
    gap: 4px;
    border-radius: 51px;
    border: 1px solid var(--Black-15; #262626);
    background: #141414;
`;

export const StarBlock = styled.div`
    svg {
        path {
            fill: ${({ filled }) => (filled ? "#e50000" : "")};
        }
    }
`;
export const RatingText = styled.span`
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 27px */
`;
