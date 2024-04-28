import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(259px, 100%), 1fr));
    padding: 100px 162px 50px 162px;
    background: var(--Black-06, #0f0f0f);
    @media only screen and (max-width: 764px) {
        padding: 50px 16px 20px 16px;
        grid-template-columns: repeat(auto-fit, minmax(min(175px, 100%), 1fr));
    }
`;
export const FooterBlocks = styled.div`
    span {
        color: #fff;
        font-family: Manrope;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;
    }
    ul,
    li {
        list-style: none;
        padding: 0;
        color: #999;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
    }
`;

export const SecondContainer = styled.div`
    display: grid;
    padding: 0px 162px 50px 162px;
    background: var(--Black-06, #0f0f0f);
    gap: 24px;
    @media only screen and (max-width: 764px) {
        padding: 50px 16px 20px 16px;
    }
`;

export const Line = styled.div`
    height: 1px;
    background: #262626;
`;
export const Blocks = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    align-self: stretch;
    color: var(--Grey-60, #999);
    font-family: Manrope;
    gap: 24px;
`;
export const BlocksCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
`;
