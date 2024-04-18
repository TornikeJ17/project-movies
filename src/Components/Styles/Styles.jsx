import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     html,body {
        margin: 0;
        background: var(--Black-08, #141414);;
        color: #FFFFFF;
        max-width:1920px;
        font-family: Manrope;
    }
  
  .main-content{
    flex:1
  }
`;
export const AppContainer = styled.div`
    height: 100%;
    display: grid;
    position: relative;
    gap: ${({ isActive }) => (isActive === "home" ? "180px" : "180px")};
`;
export const Main = styled.main`
    flex: 1;
    display: grid;
    justify-content: center;
`;
