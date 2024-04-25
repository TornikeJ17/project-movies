import styled from "styled-components";

export const SupportContainer = styled.div`
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    gap: 80px;
`;
export const SupportBlock = styled.div`
    padding: ${({ isForm }) => (isForm ? "50px" : "0px")};
    border-radius: 12px;
    border: ${({ isForm }) =>
        isForm ? "1px solid var(--Black-15, #262626)" : null};
    background: ${({ isForm }) => (isForm ? "#0F0F0F" : null)};
    display: grid;
    gap: 20px;
`;
export const SupportTitleBlock = styled.div``;
export const SupportTitle = styled.div`
    color: var(--Absolute-White, #fff);
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 72px */
`;
export const SupportText = styled.div`
    color: var(--Grey-60, #999);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 6px;
    border: 6px solid var(--Black-15, #262626);
    background: var(--Black-06, #0f0f0f);
    position: relative;
    height: 477px;
    overflow: hidden;
`;
export const SubContainerBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    top: -80px;
    left: -50px;
    gap: 10px;
`;
export const ImageBlock = styled.div`
    width: 150px;
    height: 150px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 12px;
    background: ${({ image }) =>
        `url(${image}) lightgray 50% / cover no-repeat`};
`;
export const Form = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
`;
