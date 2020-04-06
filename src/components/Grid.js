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
  transition: 300ms all cubic-bezier(0.39, 0.575, 0.565, 1);
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 4px;
  font-size: calc(3vmin + 10px);
  cursor: pointer;
`;

export const Grid = () => {
  const board = useSelector(state => state.board.board); // Still stupid
  const { tool, dragging } = useSelector(state => state.controls);
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

  const handleTouchStart = e => {
    const currentTile = document.elementFromPoint(
      e.touches[0].clientX,
      e.touches[0].clientY
    );

    const tileID = parseInt(currentTile.id);

    if (board.playing[tileID] === tool) {
      dispatch(setFill("EMPTY"));
    }
  };
  const handleTouchEnd = () => {
    dispatch(setFill(tool));
  };

  const handleTouchDrag = e => {
    const currentTile = document.elementFromPoint(
      e.touches[0].clientX,
      e.touches[0].clientY
    );
    const tileID = parseInt(currentTile.id);

    dispatch(fillTile(tileID));
  };

  const size = board.regions.length;
  const boardLayout = board.regions.flat(1);
  const boardPlaying = board.playing;

  return (
    <GridWrapper length={size}>
      {boardLayout.map((value, index) => {
        const borders = {
          top: boardLayout[index - size] !== value,
          right: boardLayout[index + 1] !== value,
          bottom: boardLayout[index + size] !== value,
          left: boardLayout[index - 1] !== value
        };

        return (
          <BoardTile
            key={index}
            value={boardPlaying[index]}
            id={index}
            borders={borders}
            onMouseDown={handleMouseDown}
            onMouseOver={handleMouseOver}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchDrag}
            onTouchEnd={handleTouchEnd}
          />
        );
      })}
    </GridWrapper>
  );
};
