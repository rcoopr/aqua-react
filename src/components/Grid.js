import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDragging, setFill, fillTile } from "../redux/actions";
import { BoardTile } from "./Tile";
import styled from "styled-components";

const GridWrapper = styled.ul`
  grid-template-columns: repeat(${props => props.length}, 1fr);
  grid-template-rows: repeat(${props => props.length}, 1fr);

  display: grid;
  grid-area: 2 / 2 / 3 / 3;
  justify-content: center;
  align-content: center;
  grid-gap: 0px;
  list-style: none;
  padding: 0;
  border-top: 2px solid ${props => props.theme.colors.accent};
  border-left: 2px solid ${props => props.theme.colors.accent};
  font-size: calc(3vmin + 10px);
`;

export const Grid = () => {
  const board = useSelector(state => state.board.board); // Still stupid
  const { tool, fill, dragging } = useSelector(state => state.controls);
  const dispatch = useDispatch();

  const handleMouseDown = tileID => {
    dispatch(setDragging(true));

    if (board.playing[tileID] === tool) {
      dispatch(setFill("EMPTY"));
    }

    dispatch(fillTile(tileID));
  };

  const handleMouseOver = tileID => {
    if (!dragging) return;
    dispatch(fillTile(tileID));
  };

  const handleMouseUp = () => {
    dispatch(setDragging(false));
    dispatch(setFill(tool));
  };

  const size = board.regions.length;
  const boardLayout = board.regions.flat(1);
  const boardPlaying = board.playing;

  return (
    <GridWrapper length={size}>
      {boardLayout.map((value, index) => {
        // Current issues: it checks value out of bounds or on next row.
        // Also may double-count some boundaries.
        const valueToRight = boardLayout[index + 1];
        const valueBelow = boardLayout[index + size] || "";
        const borderRight = valueToRight !== value;
        const borderBottom = valueBelow !== value;

        return (
          <BoardTile
            key={index}
            value={boardPlaying[index]}
            id={index}
            borderRight={borderRight}
            borderBottom={borderBottom}
            onMouseDown={handleMouseDown}
            onMouseOver={handleMouseOver}
            onMouseUp={handleMouseUp}
          />
        );
      })}
    </GridWrapper>
  );
};
