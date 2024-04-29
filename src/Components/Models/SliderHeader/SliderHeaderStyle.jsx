import styled from "styled-components";

export const SliderContainer = styled.div`
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 16px;
    border-radius: 12px;
    border: 1px solid var(--Black-12, #1f1f1f);
    background: var(--Black-06, #0f0f0f);
    @media only screen and (max-width: 764px) {
        max-width: 229px;
        display: none;
    }
`;
export const SliderButton = styled.div`
    display: flex;
    padding: 14px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid var(--Black-12, #1f1f1f);
    background: var(--Black-10, #1a1a1a);
    cursor: pointer;
`;
export const SliderIndicator = styled.div`
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
