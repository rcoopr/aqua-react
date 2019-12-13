import React, { useState } from "react";
import { NumberTileContainer, Content } from "./TileStyle";

const NumberTile = ({ value, id }) => {
  const [faded, setFaded] = useState(false);

  return (
    <NumberTileContainer
      value={value}
      faded={faded}
      id={id}
      onClick={() => {
        if (value !== -1) setFaded(!faded);
      }}
    >
      <Content>{value !== -1 ? value : ""}</Content>
    </NumberTileContainer>
  );
};

export default NumberTile;
