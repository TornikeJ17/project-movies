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
    form {
        input {
            display: flex;
            padding: 20px;
            align-items: center;
            gap: 77px;
            align-self: stretch;
            border-radius: 8px;
            border: 1px solid var(--Black-15, #262626);
            background: var(--Black-08, #141414);
        }
    }
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
`;
export const SubContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
    gap: 40px;
    position: relative;
    overflow: hidden;
    div {
        display: flex;
        align-items: flex-start;
        flex: 1 0 0;
        align-self: stretch;
    }
`;
export const ImageBlock = styled.div`
    position: absolute;
    top: ${({ index }) =>
        (index === 0 && "-140px") ||
        (index === 1 && "-140px") ||
        (index === 2 && "-140px") ||
        (index === 3 && "-140px") ||
        (index === 4 && "40px") ||
        (index === 5 && "40px") ||
        (index === 6 && "40px") ||
        (index === 7 && "40px") ||
        (index === 8 && "220px") ||
        (index === 9 && "220px") ||
        (index === 10 && "220px") ||
        (index === 11 && "220px") ||
        (index === 12 && "420px") ||
        (index === 13 && "420px") ||
        (index === 14 && "420px") ||
        (index === 15 && "420px")};
    left: ${({ index }) =>
        (index === 0 && "-45px") ||
        (index === 1 && "105px") ||
        (index === 2 && "255px") ||
        (index === 3 && "405px") ||
        (index === 4 && "-45px") ||
        (index === 5 && "105px") ||
        (index === 6 && "255px") ||
        (index === 7 && "405px") ||
        (index === 8 && "405px") ||
        (index === 9 && "255px") ||
        (index === 10 && "105px") ||
        (index === 11 && "-45px") ||
        (index === 12 && "405px") ||
        (index === 13 && "255px") ||
        (index === 14 && "105px") ||
        (index === 15 && "-45px")};
    width: 135.25px;
    height: 168.25px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 12px;
    background: ${({ image }) =>
        `url(${image}) lightgray 50% / cover no-repeat`};
`;