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
    gap: 10px;
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
