import React from "react";
import BoardTile from "../tile/BoardTile";
import { StyledGrid } from "./GridStyle";

const Grid = ({
  length,
  boardState,
  setBoardState,
  dragging,
  setDragging,
  currentTool
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
      {boardState.map((value, index) => (
        <BoardTile
          key={index}
          value={value}
          id={index}
          onMouseDown={handleMouseDown}
          onMouseOver={handleMouseOver}
        />
      ))}
    </StyledGrid>
  );
};

export default Grid;
