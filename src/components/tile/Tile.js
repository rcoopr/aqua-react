import React from "react";
import { Container, Value } from "./TileStyle";

const Tile = ({ value, type, fill }) => {
  return (
    <Container value={value} type={type}>
      <Value>{value !== -1 && type === "label" ? value : ""}</Value>
    </Container>
  );
};

export default Tile;
