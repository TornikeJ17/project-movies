import styled from "styled-components";

export const ContainerPlayBlock = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 0fr 0fr 0fr;
    gap: 20px;
`;
export const ContainerPlayBlockButton = styled.div`
    display: flex;
    padding: 14px 24px;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: var(--Red-45, #e50000);
    cursor: pointer;
`;
export const ContainerPlayBlockAction = styled.div`
    display: flex;
    padding: 14px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-06, #0f0f0f);
    cursor: pointer;
`;
