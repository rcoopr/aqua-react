import React, { useState } from "react";
import { Container, Value } from "./TileStyle";

const Tile = ({ value, type, id }) => {
  const [faded, setFaded] = useState(false);

  return (
    <Container
      value={value}
      type={type}
      faded={faded}
      id={id}
      onClick={() => {
        if (value !== -1) setFaded(!faded);
      }}
    >
      <Value>{value !== -1 && type === "label" ? value : ""}</Value>
    </Container>
  );
};

export default Tile;
