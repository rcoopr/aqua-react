import React from "react";
import { BoardTileContainer } from "./TileStyle";

const BoardTile = ({
  value,
  id,
  onMouseDown = () => {},
  onMouseOver = () => {}
}) => {
  return (
    <BoardTileContainer
      value={value}
      id={id}
      onMouseDown={() => onMouseDown(id)}
      onMouseOver={() => onMouseOver(id)}
    />
  );
};

export default BoardTile;
