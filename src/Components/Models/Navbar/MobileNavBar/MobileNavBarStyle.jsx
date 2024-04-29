import styled from "styled-components";

export const MobileNavBarContainer = styled.div`
    display: none;
    @media only screen and (max-width: 764px) {
        display: flex;
        position: fixed;
        bottom: 0;
        background: #0f0f0f;
        max-width: 515px;
        width: 100%;
        padding: 16px;
        justify-content: space-between;
    }
`;
export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    border-radius: 8px;
    padding: 14px 24px;
    gap: 10px;
    cursor: pointer; // To indicate it's clickable
    border: 1px solid
        ${({ isActive }) =>
            isActive ? "var(--Black-10, #1a1a1a)" : "transparent"};
    background: ${({ isActive }) =>
        isActive ? "var(--Black-10, #1a1a1a)" : "transparent"};

    // Hover styles
    &:hover {
        border: 1px solid var(--Black-10, #1a1a1a);
        background: var(--Black-10, #1a1a1a);
    }
`;
