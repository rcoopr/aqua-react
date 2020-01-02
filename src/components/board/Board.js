import React, { useState } from "react";
import S from "./Board.styled";
import { boards } from "../board-data/BoardData";
import NumberTile from "../tile/NumberTile";
import Grid from "../grid/Grid";
// const labels = [...boards.content[0].labels.column, ...boards.content[0].labels.row];

const Board = ({ boardID, dragging, setDragging }) => {
  const board = boards[boardID];

  const storedBoard = localStorage.getItem("boardState")
    ? JSON.parse(localStorage.getItem("boardState"))
    : null;

  const [boardState, setBoardState] = useState(
    storedBoard || Array(board.board.length ** 2).fill("empty")
  );

  return (
    <S.GridArea length={board.board.length}>
      <S.LabelRow length={board.board.length}>
        {board.labels.column.map((value, index) => (
          <NumberTile key={`top-${value}-${index}`} value={value} id={index} />
        ))}
      </S.LabelRow>
      <S.LabelColumn length={board.board.length}>
        {board.labels.row.map((value, index) => (
          <NumberTile key={`left-${value}-${index}`} value={value} id={index} />
        ))}
      </S.LabelColumn>
      <Grid
        length={board.board.length}
        boardState={boardState}
        setBoardState={setBoardState}
        boardLayout={board.board.flat(1)}
        dragging={dragging}
        setDragging={setDragging}
      />
    </S.GridArea>
  );
};

export default Board;
