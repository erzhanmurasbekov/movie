import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: var(--darkGray);
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0px;
  }
  @media screen and (max-width: 720px) {
    
      width:80%
    
  }
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  @media screen and (max-width: 720px) {
    height:100px;
  }
`;