import styled from "styled-components";

export const BlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    position: relative;
    &:after {
        position: absolute;
        width: 116px;
        height: 50px;
        background: #e50000;
        top: -25px;
        border-radius: 8px;
        left: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--Absolute-White, #fff);
        text-align: center;
        font-family: Manrope;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 30px */
    }
    &.movies:after {
        content: "Movies";
    }
    &.shows:after {
        content: "Shows";
    }
`;

export const TVContainer = styled.div``;
