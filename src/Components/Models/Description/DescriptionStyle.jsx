import styled from "styled-components";

export const DescriptionContainer = styled.div`
    display: grid;
    background: var(--Black-10, #1a1a1a);
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    max-height: 233px;
    padding: 50px;
    gap: 20px;
`;

export const DescriptionText = styled.div`
    max-width: 941px;
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
`;
