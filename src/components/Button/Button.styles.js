import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  /* background: var(--darkGray); */
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--darkGray);
  border: 0;
  font-size: var(--fontBig);
  margin: 30px auto;
  transform: all 0.3s;
  outline: none;
  cursor: pointer;
  margin-top:-500px;
  
  :hover {
    opacity: 0.8;
  }
`;
