import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    margin-top: 25px;
  

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
  @media screen and (max-width: 720px) {
    padding: 0 10px
    margin: 5px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  margin-top: 25px;

  @media screen and (max-width: 720px) {
    
    font-size:7px;
    grid-row-gap:10px;
    grid-column-gap:0px;
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
`;

