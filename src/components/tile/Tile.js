import React, { useState } from "react";
import { Container, Value } from "./TileStyle";

const Tile = ({
  value,
  type,
  id,
  size,
  onMouseDown = () => {},
  onMouseOver = () => {}
}) => {
  const [faded, setFaded] = useState(false);

  return (
    <Container
      value={value}
      type={type}
      faded={faded}
      id={id}
      onClick={() => {
        if (type === "label" && value !== -1) setFaded(!faded);
      }}
      onMouseDown={() => onMouseDown(id)}
      onMouseOver={() => onMouseOver(id)}
    >
      <Value>{value !== -1 && type === "label" ? value : ""}</Value>
    </Container>
  );
};

export default Tile;
