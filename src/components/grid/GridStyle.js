import styled from "styled-components";

export const StyledGrid = styled.ul`
  grid-template-columns: repeat(${props => props.length}, 5vw);
  grid-template-rows: repeat(${props => props.length}, 5vw);

  display: grid;
  grid-area: 2 / 2 / 3 / 3;
  justify-content: center;
  align-content: center;
  grid-gap: 0px;
  list-style: none;
  margin: 0 0 2vw;
  padding: 0;
  font-size: calc(2vw + 10px);
`;
