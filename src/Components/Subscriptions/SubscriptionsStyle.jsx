import styled from "styled-components";

export const CompareContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
`;
export const CompareBlock = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: stretch;
`;

export const SubHeader = styled.div`
    display: grid;
    padding: 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    z-index: 0;
    background: var(--Black-06, #0f0f0f);
    border-radius: ${({ index }) =>
        (index === 0 && "12px 0 0 0") || (index === 1 && "0 12px 0 0")};
    span {
        color: var(--Absolute-White, #fff);
        font-family: Manrope;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 30px */
    }
    div {
        display: grid;
        grid-template-columns: 0fr 0fr;
        gap: 20px;
        height: 30px;
    }
    .popular {
        display: flex;
        padding: 6px 10px;
        align-items: flex-start;
        gap: 10px;
        border-radius: 2px;
        background: var(--Red-45, #e50000);
        color: var(--Absolute-White, #fff);
        leading-trim: both;
        text-edge: cap;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
    }
`;
export const SubRowsBlock = styled.div`
    :nth-child(2) {
        height: 82px;
    }
`;
export const SubRows = styled.div`
    display: grid;
    padding: 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 27px */
    border: 1px solid var(--Black-15, #262626);
`;
export const SubData = styled.div`
    display: grid;
    padding: 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 27px */
    border: 1px solid var(--Black-15, #262626);
`;
