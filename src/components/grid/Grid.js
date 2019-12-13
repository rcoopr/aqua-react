import React from "react";
import BoardTile from "../tile/BoardTile";
import { StyledGrid } from "./GridStyle";

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
    <StyledGrid length={length}>
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
    </StyledGrid>
  );
};

export default Grid;
