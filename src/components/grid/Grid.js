import React from "react";
import Tile from "../tile/Tile";
import { StyledGrid } from "./GridStyle";

// const updateState = (oldState, index, tool) => {
//   let newState = [...oldState];
//   newState[index] = tool === "air" ? 1 : tool === "water" ? 2 : 0;
// };

const Grid = ({ length, boardState, setBoardState, dragging, currentTool }) => {
  return (
    <StyledGrid length={length} onMouseOver={() => console.log(dragging)}>
      {boardState.map((value, index) => (
        <Tile
          key={`${index}`}
          value={value}
          type="cell"
          onMouseOver={() => console.log(dragging)}
          // dragging &&
          // setBoardState(updateState(boardState, index, currentTool))
        />
      ))}
    </StyledGrid>
  );
};

export default Grid;
