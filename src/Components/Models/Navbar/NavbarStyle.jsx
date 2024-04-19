import styled from "styled-components";

export const NavContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    align-self: stretch;
    padding: 40px 0px 0px 0px;
    position: absolute;
    top: 0;
    width: 100%;
`;
export const SubContainer = styled.div`
    display: grid;
    height: ${({ isActive }) => isActive === "home" && "1092px"};
    max-height: 1092px;
    background-image: ${({ isActive }) =>
        isActive === "home" &&
        `linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.5),
            rgb(0, 0, 0)
        ),
        url(assets/img/bg.jpg)`};
    position: relative;
`;
export const SubContainerBlock = styled.div`
    position: absolute;
    width: 1092px;
    bottom: -7%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    @media only screen and (max-width: 764px) {
        max-width: 550px;
    }
`;
export const SubContainerTitle = styled.div`
    color: var(--Absolute-White, #fff);
    text-align: center;
    font-family: Manrope;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 87px */
`;
export const SubContainerText = styled.div`
    color: var(--Grey-60, #999);
    text-align: center;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 27px */
`;
export const SubContainerButton = styled.div`
    display: flex;
    padding: 18px 24px;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    background: var(--Red-45, #e50000);
    cursor: pointer;
`;
export const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(195.56px, 1fr));
    align-items: flex-start;
    gap: 10px;
    flex-shrink: 0;
    position: relative;
`;
export const ImageBlock = styled.div`
    background: ${({ images }) =>
        `url('${images}') lightgray 50% / cover no-repeat`};
    flex: 1 0 0;
    align-self: stretch;
    height: 200px;
    border-radius: 12px;
    mix-blend-mode: overlay;
`;
export const NavbarLogo = styled.div`
    padding-left: 10vw;
`;

export const NavbarMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    margin: auto;
    height: 75px;
    border-radius: 12px;
    border: 4px solid #1f1f1f;
    background: #0f0f0f;
    padding-left: 10px;
    padding-right: 10px;
    gap: 30px;
    a{
        text-decoration:none;
    }
    }
    .NavLinkActive{
        background:#1a1a1a;
        border: 1px solid var(--Black-10, #1a1a1a);
        border-radius: 8px;
    }
`;

export const NavbarSearch = styled.div`
    display: grid;
    grid-template-columns: 0fr 0fr;
    gap: 30px;
    padding-right: 10vw;
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
export const HamburgerMenu = styled.div`
    display: flex;
    padding: 12px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 6px;
    border: 3px solid var(--Black-15, #262626);
    background: var(--Black-10, #1a1a1a);
`;
