import React from "react";
import styled from "styled-components";

const Cell = styled.li`
  background: #999;
`;

const Label = styled(Cell)`
  background: #444;
`;

const Row = styled.ul`
  display: flex;
  flex-direction: row;
  li {
    position: relative;
    flex-basis: 100%;
    margin: 1px;
    border: 1px solid;
    border-radius: 4px;
  }
  li::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  li > * {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`;

const LabelRow = ({ rowData }) => {
  const cells = rowData.map((cell, index) => (
    <Label key={index}>
      <span>{cell}</span>
    </Label>
  ));

  return (
    <Row length={rowData.length}>
      <Label />
      {cells}
    </Row>
  );
};

const GridRow = ({ rowData, column }) => {
  const cells = rowData.map((cell, index) => {
    const key = index + column * rowData.length;

    return <Cell key={key} value={cell} />;
  });

  return (
    <Row length={rowData.length}>
      <Label />
      {cells}
    </Row>
  );
};

const Board = ({ boardData }) => {
  // const boardWidth = boardData.board[0].length;
  // const boardHeight = boardData.board.length;

  const rows = boardData.board.map((row, index) => (
    <GridRow key={index} rowData={row} column={index} />
  ));

  return (
    <>
      <LabelRow rowData={boardData.labels.row} />
      {rows}
    </>
  );
};

export default Board;
