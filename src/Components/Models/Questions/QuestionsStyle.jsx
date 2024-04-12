import styled from "styled-components";

export const ContainerQuestion = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 80px;
`;
export const QuestionButton = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 166px;
    height: 63px;
    gap: 10px;
    border-radius: 8px;
    background: var(--Red-45, #e50000);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
`;
export const QuestionBlock = styled.div`
    width: 100%;
    display: grid;
    gap: 20px;
    cursor: pointer;
`;
export const QuestionLine = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(
        90deg,
        rgba(229, 0, 0, 0) 0%,
        #e50000 16.67%,
        rgba(229, 0, 0, 0) 100%
    );
`;
export const QuestionCard = styled.div`
    display: grid;
    grid-template-columns: 0fr 1fr 0fr;
    gap: 20px;
    align-items: self-start;
`;
export const QuestionSubCard = styled.div`
    display: grid;
    gap: 20px;
`;
export const QuestionNum = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-12, #1f1f1f);
`;
export const QuestionTitle = styled.div`
    align-self: stretch;
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 33px */
`;
export const QuestionText = styled.div`
    align-self: stretch;
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
`;
export const QuestionAccordion = styled.div``;
