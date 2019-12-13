import React from "react";
import { BoardTileContainer } from "./TileStyle";

const BoardTile = ({
  value,
  id,
  borderBottom,
  borderRight,
  onMouseDown = () => {},
  onMouseOver = () => {}
}) => {
  return (
    <BoardTileContainer
      value={value}
      id={id}
      borderBottom={borderBottom}
      borderRight={borderRight}
      onMouseDown={() => onMouseDown(id)}
      onMouseOver={() => onMouseOver(id)}
    />
  );
};

export default BoardTile;
