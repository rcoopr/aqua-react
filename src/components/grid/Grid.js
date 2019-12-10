import React from "react";
import Tile from "../tile/Tile";

const Grid = ({ boardState, setBoardState, updateState }) => {
  return (
    <ul>
      {boardState.map((value, index) => (
        <Tile
          key={`${index}`}
          value={value}
          type="cell"
          onMouseOver={() => setBoardState(updateState(boardState, index, 1))}
        />
      ))}
    </ul>
  );
};

export default Grid;
