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
export const SliderRangeInput = styled.input.attrs(
    ({ totalPages, activeIndex }) => ({
        type: "range",
        min: "1",
        max: totalPages.toString(), // Ensure max is a string
        value: (activeIndex + 1).toString(), // Ensure value is a string
    })
)`
    flex-grow: 1;
    margin: 0 16px;

    // Styles to reset the default appearance of the range input
    -webkit-appearance: none;
    width: 100%;
    background: transparent;

    // Custom track
    &::-webkit-slider-runnable-track {
        background: #ddd;
        border-radius: 10px;
        height: 4px;
    }

    &::-moz-range-track {
        background: #ddd;
        border-radius: 10px;
        height: 4px;
    }

    &::-ms-track {
        background: #ddd;
        border-radius: 10px;
        height: 4px;
    }

    // Custom thumb
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -6px; // Align with the track
        height: 16px;
        width: 16px;
        background: red;
        border-radius: 50%;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        height: 16px;
        width: 16px;
        background: red;
        border-radius: 50%;
        cursor: pointer;
    }

    &::-ms-thumb {
        height: 16px;
        width: 16px;
        background: red;
        border-radius: 50%;
        cursor: pointer;
    }

    // Add more styles for focus or active states if necessary
`;
