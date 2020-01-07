import React, { useState } from "react";

import { connect } from "react-redux";
import { selectBoard } from "../redux/actions";

// import NumberTile from "../tile/NumberTile";
// import Grid from "../grid/Grid";

import styled, { css } from "styled-components";

const GridArea = styled.section`
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

export const Board = ({ selectBoard }) => {
  // const [boardState, setBoardState] = useState(
  //   Array(board.board.length ** 2).fill("empty")
  // );

  return (
    <div></div>
    // <GridArea length={board.board.length}>
    //   <LabelRow length={board.board.length}>
    //     {board.labels.column.map((value, index) => (
    //       <NumberTile key={`top-${value}-${index}`} value={value} id={index} />
    //     ))}
    //   </LabelRow>
    //   <LabelColumn length={board.board.length}>
    //     {board.labels.row.map((value, index) => (
    //       <NumberTile key={`left-${value}-${index}`} value={value} id={index} />
    //     ))}
    //   </LabelColumn>
    //   <Grid
    //     length={board.board.length}
    //     boardState={boardState}
    //     setBoardState={setBoardState}
    //     boardLayout={board.board.flat(1)}
    //     dragging={dragging}
    //   />
    // </GridArea>
  );
};
