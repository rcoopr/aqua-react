import React from "react";
import S from "./Tile.styled";

const BoardTile = ({
  value,
  id,
  borderBottom,
  borderRight,
  onMouseDown = () => {},
  onMouseOver = () => {},
  onMouseUp = () => {}
}) => {
  return (
    <S.BoardTile
      value={value}
      id={id}
      borderBottom={borderBottom}
      borderRight={borderRight}
      onMouseDown={() => onMouseDown(id)}
      onMouseOver={() => onMouseOver(id)}
      onMouseUp={() => onMouseUp()}
    />
  );
};

export default BoardTile;
