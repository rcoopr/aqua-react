import React from "react";
import BoardTile from "../tile/BoardTile";
import S from "./Grid.styled";

const Grid = ({
  length,
  boardState,
  setBoardState,
  dragging,
  setDragging,
  currentTool,
  boardLayout
}) => {
  const updateBoardState = tileID => {
    const newBoardState = [...boardState];
    newBoardState[tileID] = currentTool;
    setBoardState(newBoardState);
    localStorage.setItem("boardState", JSON.stringify(newBoardState));
  };
  const handleMouseDown = tileID => {
    setDragging(true);
    updateBoardState(tileID);
  };

  const handleMouseOver = tileID => {
    if (!dragging) return;
    updateBoardState(tileID);
  };

  return (
    <S.Grid length={length}>
      {boardState.map((value, index) => {
        // Current issues: it checks value out of bounds or on next row.
        // Also may double-count some boundaries.
        const valueToRight = boardLayout[index + 1];
        const valueBelow = boardLayout[index + length] || "";
        const borderRight = valueToRight !== boardLayout[index];
        const borderBottom = valueBelow !== boardLayout[index];

        return (
          <BoardTile
            key={index}
            value={value}
            id={index}
            borderRight={borderRight}
            borderBottom={borderBottom}
            onMouseDown={handleMouseDown}
            onMouseOver={handleMouseOver}
          />
        );
      })}
    </S.Grid>
  );
};

export default Grid;
