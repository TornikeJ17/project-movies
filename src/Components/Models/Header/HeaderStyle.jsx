import styled from "styled-components";

export const Title = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    width: ${({ isActive }) => (isActive === "home" ? "100%" : "")};
    font-family: Manrope;
    align-items: center;
    padding-top: ${({ isActive }) => (isActive === "home" ? "0px" : "50px")};
    padding-right: ${({ isActive }) => (isActive === "home" ? "0px" : "50px")};
    padding-left: ${({ isActive }) => (isActive === "home" ? "0px" : "50px")};
`;
export const H1 = styled.h1`
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 57px */
    margin: 0;
    max-width: 1297px;
`;
export const Span = styled.span`
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    width: 100%;
    max-width: 1297px;
`;
