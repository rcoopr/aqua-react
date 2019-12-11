import React, { useState } from "react";
import { GridArea, LabelRow, LabelColumn } from "./BoardStyle";
import boards from "../board-data/BoardData";
import Tile from "../tile/Tile";
import Grid from "../grid/Grid";

const board = boards.content[0];
// const labels = [...boards.content[0].labels.column, ...boards.content[0].labels.row];

const Board = ({ currentTool, dragging, setDragging }) => {
  // TODO: add board logic including selecting a board

  const [boardState, setBoardState] = useState(
    Array(board.board.length ** 2).fill(0)
  );

  return (
    <GridArea
      onMouseDown={() => {
        setDragging(true);
      }}
    >
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
        dragging={dragging}
        currentTool={currentTool}
      />
    </GridArea>
  );
};

export default Board;
