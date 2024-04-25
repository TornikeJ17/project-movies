import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    border-radius: 12px;
    position: relative;

    font-family: Manrope;
    max-width: 1597px;
    @media only screen and (max-width: 764px) {
        padding: 16px;
    }
`;
export const BackgroundImage = styled.div`
    display: flex;
    flex-flow: wrap;
    border-radius: 12px;
    gap: 20px;
    width: 100%;
    position: relative;
    max-height: 395px;
    overflow: hidden;
    background: linear-gradient(
        90deg,
        #0f0f0f 2.42%,
        rgba(20, 15, 15, 0.97) 25.46%,
        rgba(34, 14, 14, 0.91) 46.72%,
        rgb(229 0 0) 168.98%
    );
    border: 1px solid #262626;
`;
export const Block = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(146px, 1fr));
    gap: 20px;
    flex: 1 0 0;
    z-index: 0;
    align-self: stretch;
    overflow: hidden;

    div {
        width: 146px;
        height: 83.75px;
        border-radius: 12px;
        mix-blend-mode: overlay;
        opacity: 0.09;
    }
`;
export const SecondBlock = styled.div`
    position: absolute;
    width: 100%;
    display: grid;
    grid-template-columns: 0.9fr 0fr;
    align-items: center;
    justify-content: center;
    top: 37.5%;
    gap: 20px;

    @media only screen and (max-width: 764px) {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        top: 25%;
    }
    div {
        max-width: 1597px;
        display: flex;
        flex-flow: column;
        gap: 20px;
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
    @media only screen and (max-width: 764px) {
        display: flex;
        justify-content: center;
        font-size: 24px;
        max-width: 298px !important;
        text-align: center;
    }
`;
export const Text = styled.div`
    align-self: stretch;
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */

    @media only screen and (max-width: 764px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        max-width: 298px !important;
        text-align: center;
    }
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
