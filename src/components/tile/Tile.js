import React from "react";
import { Container, Value } from "./TileStyle";

const Tile = ({ value, type }) => {
  return (
    <Container value={value} type={type}>
      <Value>{value >= 0 ? value : ""}</Value>
    </Container>
  );
};

export default Tile;
