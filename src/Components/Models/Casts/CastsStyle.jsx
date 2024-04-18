import styled from "styled-components";

export const CastsContainer = styled.div`
    display: grid;
    background: var(--Black-10, #1a1a1a);
    border-radius: 12px;
    border: 1px solid var(--Black-15, #262626);
    max-height: 233px;
    padding: 50px;
    gap: 20px;
`;
export const CastsSubContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`;
export const CastsBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
`;

export const ButtonBlock = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;
    cursor: pointer;
`;
export const CastButton = styled.div`
    display:grid;
    padding:12px;
    align-items:center;
    gap::10px;
    border-radius: 100px;
    border: 1px solid #262626;
    background: #141414;
    
`;
export const CastImage = styled.img`
    width: 100px;
    height: 139px;
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
`;
