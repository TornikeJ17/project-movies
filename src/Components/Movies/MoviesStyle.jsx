import styled from "styled-components";

export const BlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 100px;
    align-self: stretch;
    border-radius: 12px;
    border: ${({ isMobile }) =>
        isMobile ? "none" : "1px solid var(--Black-15, #262626)"};
    position: relative;
    &:after {
        display: ${({ isMobile }) => (isMobile ? "none !important" : "")};
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
        content: ${({ isMobile }) => (isMobile ? '""' : '"Movies"')};
    }
    &.shows:after {
        content: ${({ isMobile }) => (isMobile ? '""' : '"Shows"')};
    }
`;
export const TabContainer = styled.div`
    padding: 16px;
`;
export const TabsBlock = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-06, #0f0f0f);
`;
export const TabsButton = styled.div`
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 10px;
    background: ${({ isActive }) =>
        isActive ? "var(--Black-12, #1f1f1f)" : "transparent"};
    cursor: pointer;
`;
