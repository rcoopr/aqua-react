import styled from "styled-components";

const Grid = styled.ul`
  grid-template-columns: repeat(${props => props.length}, 1fr);
  grid-template-rows: repeat(${props => props.length}, 1fr);

  display: grid;
  grid-area: 2 / 2 / 3 / 3;
  justify-content: center;
  align-content: center;
  grid-gap: 0px;
  list-style: none;
  padding: 0;
  border-top: 2px solid white;
  border-left: 2px solid white;
  font-size: calc(3vmin + 10px);
`;

const S = {
  Grid
};

export default S;
