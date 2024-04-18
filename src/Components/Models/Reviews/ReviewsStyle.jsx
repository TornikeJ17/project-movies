import styled from "styled-components";

export const ReviewsContainer = styled.div`
    display: grid;
    gap: 20px;
    padding: 50px;
    align-self: stretch;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-10, #1a1a1a);
`;
export const ReviewsContainerBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    gap: 20px;
`;
export const ReviewCard = styled.div`
    display: flex;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-06, #0f0f0f);
    max-width: 468.5px;
    height: 265px;
    overflow: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
    span {
        width: 100%;
        color: var(--Grey-60, #999);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        overflow-y: scroll;
        overflow-x: hidden;
        word-wrap: break-word;
        white-space: normal;
    }
`;

export const ReviewButtonBlock = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const ReviewIndicator = styled.div`
    display: flex;
    width: 81px;
    align-items: flex-start;
    gap: 3px;
    div {
        height: 4px;
        flex: 1 0 0;
        border-radius: 100px;
        background: ${({ active }) => (active ? "red" : "gray")};
    }
    div:nth-child(${({ activeIndex }) => activeIndex + 1}) {
        background: red;
    }
`;
export const ReviewButton = styled.div`
    display: flex;
    padding: 14px;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-08, #141414);
    cursor: pointer;
`;
export const ReviewRatingBlock = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;
