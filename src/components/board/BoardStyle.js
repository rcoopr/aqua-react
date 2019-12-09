import styled from "styled-components";

export const GridArea = styled.section`
  display: grid;
  grid-template-columns: 5vw 1fr;
  grid-template-rows: 5vw 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export const Grid = styled.ul`
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

export const LabelRow = styled.ul`
  display: flex;
  grid-area: 1 / 2 / 2 / 3;
`;

export const LabelColumn = styled.ul`
  display: flex;
  flex-direction: column;
  grid-area: 2 / 1 / 3 / 2;
`;
