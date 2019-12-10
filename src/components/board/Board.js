import React, { useState } from "react";
import boards from "../board-data/BoardData";
import Tile from "../tile/Tile";
import { GridArea, Grid, LabelRow, LabelColumn } from "./BoardStyle";

const board = boards.content[0];
const initialState = Array(board.board.length ** 2).fill(0);
const updateState = (state, tile, value) => {
  let newState = [...state];
  newState[tile] = value;

  return newState;
};

const Board = ({ draggingType }) => {
  // TODO: add board logic including selecting a board

  const [boardState, setBoardState] = useState(initialState);

  return (
    <GridArea>
      <LabelRow>
        {board.labels.column.map((value, index) => (
          <Tile key={`top-${value}-${index}`} value={value} type="label" />
        ))}
      </LabelRow>
      <LabelColumn>
        {board.labels.row.map((value, index) => (
          <Tile key={`left-${value}-${index}`} value={value} type="label" />
        ))}
      </LabelColumn>
      <Grid
        length={board.board.length}
        boardState={boardState}
        setBoardState={setBoardState}
        updateState={updateState}
        draggingType={draggingType}
      />
    </GridArea>
  );
};

export default Board;
