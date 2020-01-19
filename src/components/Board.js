import React from "react";
import { useSelector } from "react-redux";

import { NumberTile } from "./Tile";
import { Grid } from "./Grid";

import styled, { css } from "styled-components";

const GridArea = styled.section`
  ${props => css`
    grid-template-columns: 1fr ${props.length}fr;
    grid-template-rows: 1fr ${props.length}fr;
  `}
  max-width: 90vmin;
  max-height: 90vmin;
  height: 65vmin;
  width: 65vmin;
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  user-select: none;
  @media (max-width: 700px) {
    width: calc(65vmin + (700px - 100vmin) * 7 / 8);
    height: calc(65vmin + (700px - 100vmin) * 7 / 8);
  }
`;

const LabelRow = styled.ul`
  ${props => css`
    grid-template-columns: repeat(${props.length}, 1fr);
    grid-template-rows: 1fr;
  `}
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-area: 1 / 2 / 2 / 3;
`;

const LabelColumn = styled.ul`
  ${props => css`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(${props.length}, 1fr);
  `}
  display: grid;
  flex-direction: column;
  grid-area: 2 / 1 / 3 / 2;
`;

export const Board = () => {
  const board = useSelector(state => state.board.board); // Stupid names
  const labels = useSelector(state => state.board.labels);

  const size = board.regions.length;

  return (
    <GridArea length={size}>
      <LabelRow length={size}>
        {labels.top.map((value, index) => (
          <NumberTile key={`top-${value}-${index}`} value={value} />
        ))}
      </LabelRow>
      <LabelColumn length={size}>
        {labels.left.map((value, index) => (
          <NumberTile key={`left-${value}-${index}`} value={value} />
        ))}
      </LabelColumn>
      <Grid />
    </GridArea>
  );
};
