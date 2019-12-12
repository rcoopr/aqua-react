import React from "react";
import Tile from "../tile/Tile";
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
        <Tile
          key={index}
          value={value}
          id={index}
          type="cell"
          onMouseDown={handleMouseDown}
          onMouseOver={handleMouseOver}
        />
      ))}
    </StyledGrid>
  );
};

export default Grid;
