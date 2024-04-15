import styled from "styled-components";

export const PlanBlocks = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(377px, 1fr));
    gap: 30px;
    align-self: stretch;
`;
export const PlansTab = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-06, #0f0f0f);
`;
export const PlansTabButton = styled.div`
    display: flex;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: ${({ isActive }) =>
        isActive ? "var(--Black-12, #1f1f1f)" : "transparent"};
    cursor: pointer;
`;
export const PlanCard = styled.div`
    display: flex;
    padding: 50px;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
    flex: 1 0 0;
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-10, #1a1a1a);
`;
export const PlanTitle = styled.div`
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 36px */
    align-self: stretch;
`;
export const PlanText = styled.div`
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
    align-self: stretch;
`;
export const PlanPrice = styled.div`
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 73%; /* 29.2px */
    span {
        color: var(--Grey-60, #999);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 73%; /* 13.14px */
    }
`;

export const PlanButtonBlock = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
`;
export const PlanButtonTrial = styled.div`
    display: flex;
    padding: 18px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 8px;
    background: var(--Red-45, #e50000);
    cursor: pointer;
    span {
        color: var(--Absolute-White, #fff);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 27px */
    }
`;
export const PlanButton = styled.div`
    display: flex;
    padding: 18px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    border-radius: 8px;
    border: 1px solid var(--Black-15, #262626);
    background: var(--Black-08, #141414);
    cursor: pointer;
    span {
        color: var(--Absolute-White, #fff);
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 27px */
    }
`;
