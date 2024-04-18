import styled from "styled-components";

export const SupportContainer = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 80px;
`;
export const SupportBlock = styled.div`
    padding: ${({ isForm }) => (isForm ? "50px" : "0px")};
    border-radius: 12px;
    border: ${({ isForm }) =>
        isForm ? "1px solid var(--Black-15, #262626)" : null};
    background: ${({ isForm }) => (isForm ? "#0F0F0F" : null)};
    form {
        input {
            display: flex;
            padding: 20px;
            align-items: center;
            gap: 77px;
            align-self: stretch;
            border-radius: 8px;
            border: 1px solid var(--Black-15, #262626);
            background: var(--Black-08, #141414);
        }
    }
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
