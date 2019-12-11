import React from "react";
import Tile from "../tile/Tile";
import { StyledGrid } from "./GridStyle";

const updateState = (oldState, index, tool) => {
  let newState = [...oldState];
  debugger;
  newState[parseInt(index)] = tool === "air" ? 1 : tool === "water" ? 2 : 0;
  console.log(newState);
};

const Grid = ({ length, boardState, setBoardState, dragging, currentTool }) => {
  return (
    <StyledGrid
      length={length}
      onMouseOver={e => {
        let hoveredTile = e.target.closest("li");
        if (dragging) {
          setBoardState(updateState(boardState, hoveredTile.id, currentTool));
        }
      }}
    >
      {boardState.map((value, index) => (
        <Tile key={index} value={value} id={index} type="cell" />
      ))}
    </StyledGrid>
  );
};

export default Grid;
