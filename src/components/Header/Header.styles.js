import styled from "styled-components";

export const Wrapper = styled.div`

  position: absolute;
  top:0;
  left:0;
  z-index: 100;
  width: 100%;
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const LogoImg = styled.img`
    width: 200px;
    @media screen and (max-width: 500px){
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px){
        width: 80px;
    }
`;

