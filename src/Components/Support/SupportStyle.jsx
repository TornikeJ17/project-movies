import styled from "styled-components";

export const SupportContainer = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 80px;
`;
export const SupportBlock = styled.div`
    border-radius: 12px;
    border: ${({ isForm }) =>
        isForm ? "1px solid var(--Black-15, #262626)" : null};
    background: ${({ isForm }) => (isForm ? "#0F0F0F" : null)};
`;
export const SupportTitleBlock = styled.div``;
export const SupportTitle = styled.div`
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 72px */
`;
export const SupportText = styled.div`
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
`;
