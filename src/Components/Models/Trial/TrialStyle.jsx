import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border: 1px solid #262626;
    border-radius: 12px;
    position: relative;
    background: linear-gradient(
        90deg,
        #0f0f0f 2.42%,
        rgba(20, 15, 15, 0.97) 25.46%,
        rgba(34, 14, 14, 0.91) 46.72%,
        rgb(229 0 0) 168.98%
    );
    font-family: Manrope;
    max-width: 1597px;
`;
export const BackgroundImage = styled.div`
    display: flex;
    flex-flow: wrap;
    border-radius: 12px;
    gap: 20px;
`;
export const Block = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex: 1 0 0;
    z-index: -3;
    align-self: stretch;
    div {
        width: 160.11px;
        height: 83.75px;
        border-radius: 12px;
    }
`;
export const SecondBlock = styled.div`
    position: absolute;
    width: 100%;
    display: grid;
    grid-template-columns: 0.9fr 0fr;
    align-items: center;
    justify-content: center;
    top: 40%;
    div {
        max-width: 1597px;
    }
`;
export const Title = styled.div`
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 72px */
    align-self: stretch;
`;
export const Text = styled.div`
    align-self: stretch;
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
`;
export const Button = styled.div`
    width: 188px;
    height: 63px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: var(--Red-45, #e50000);
    cursor: pointer;
`;
