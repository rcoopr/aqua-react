import React from "react";
import boards from "../board-data/BoardData";
import Tile from "../tile/Tile";
import { GridArea, Grid, LabelRow, LabelColumn } from "./BoardStyle";

const Board = () => {
  const board = boards.content[0];
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
      <Grid length={board.board.length}>
        {board.board.flat(1).map((value, index) => (
          <Tile key={`${index}`} value={value} type="fill" />
        ))}
      </Grid>
    </GridArea>
  );
};

export default Board;
