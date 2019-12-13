import styled, { css } from "styled-components";

export const GridArea = styled.section`
  ${props => css`
    grid-template-columns: 1fr ${props.length}fr;
    grid-template-rows: 1fr ${props.length}fr;
  `}
  width: 65vmin;
  height: 65vmin;
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  user-select: none;
`;

export const LabelRow = styled.ul`
  ${props => css`
    grid-template-columns: repeat(${props.length}, 1fr);
    grid-template-rows: 1fr;
  `}
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-area: 1 / 2 / 2 / 3;
`;

export const LabelColumn = styled.ul`
  ${props => css`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(${props.length}, 1fr);
  `}
  display: grid;
  flex-direction: column;
  grid-area: 2 / 1 / 3 / 2;
`;
