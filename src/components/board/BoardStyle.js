import styled from "styled-components";

export const GridArea = styled.section`
  display: grid;
  grid-template-columns: 5vw 1fr;
  grid-template-rows: 5vw 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  user-select: none;
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
