import React, { useState } from "react";

import { connect } from "react-redux";
import { selectBoard } from "../../redux/actions";

// import NumberTile from "../tile/NumberTile";
// import Grid from "../grid/Grid";

import S from "./Board.styled";

const Board = ({ selectBoard }) => {
  // const [boardState, setBoardState] = useState(
  //   Array(board.board.length ** 2).fill("empty")
  // );

  return (
    <div></div>
    // <S.GridArea length={board.board.length}>
    //   <S.LabelRow length={board.board.length}>
    //     {board.labels.column.map((value, index) => (
    //       <NumberTile key={`top-${value}-${index}`} value={value} id={index} />
    //     ))}
    //   </S.LabelRow>
    //   <S.LabelColumn length={board.board.length}>
    //     {board.labels.row.map((value, index) => (
    //       <NumberTile key={`left-${value}-${index}`} value={value} id={index} />
    //     ))}
    //   </S.LabelColumn>
    //   <Grid
    //     length={board.board.length}
    //     boardState={boardState}
    //     setBoardState={setBoardState}
    //     boardLayout={board.board.flat(1)}
    //     dragging={dragging}
    //   />
    // </S.GridArea>
  );
};

export default connect(null, { selectBoard })(Board);
