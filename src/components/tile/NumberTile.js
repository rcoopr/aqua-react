import React, { useState } from "react";
import S from "./Tile.styled";

const NumberTile = ({ value, id }) => {
  const [faded, setFaded] = useState(false);

  return (
    <S.NumberTile
      value={value}
      faded={faded}
      id={id}
      onClick={() => {
        if (value !== -1) setFaded(!faded);
      }}
    >
      <S.Content>{value !== -1 ? value : ""}</S.Content>
    </S.NumberTile>
  );
};

export default NumberTile;
