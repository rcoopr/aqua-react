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
    Array(board.board.length ** 2).fill("empty")
  );

  return (
    <GridArea length={board.board.length}>
      <LabelRow length={board.board.length}>
        {board.labels.column.map((value, index) => (
          <Tile key={`top-${value}-${index}`} value={value} type="label" />
        ))}
      </LabelRow>
      <LabelColumn length={board.board.length}>
        {board.labels.row.map((value, index) => (
          <Tile key={`left-${value}-${index}`} value={value} type="label" />
        ))}
      </LabelColumn>
      <Grid
        length={board.board.length}
        boardState={boardState}
        setBoardState={setBoardState}
        dragging={dragging}
        setDragging={setDragging}
        currentTool={currentTool}
      />
    </GridArea>
  );
};

export default Board;
