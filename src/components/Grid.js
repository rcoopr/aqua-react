import React, { useContext } from "react";
import BoardTile from "./Tile";
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
  const updateBoardState = (tileID, fill = currentTool) => {
    const newBoardState = [...boardState];
    newBoardState[tileID] = fill;
    setBoardState(newBoardState);
    localStorage.setItem("boardState", JSON.stringify(newBoardState));
  };

  const handleMouseDown = tileID => {
    setDragging(true);

    if (boardState[tileID] === currentTool) {
      setCurrentTool("trash", updateBoardState(tileID, "trash"));
    } else {
      updateBoardState(tileID);
    }

    // Above, setCurrentTool to "trash",  but on click it registers the previous state
    // console.log("mousedown", currentTool, "state", boardState[tileID]);
  };

  const handleMouseOver = tileID => {
    if (!dragging) return;
    updateBoardState(tileID);
  };

  const handleMouseUp = () => setCurrentTool(temporaryTool);

  const boardLength = boardState.length ** 0.5;

  return (
    <GridWrapper length={boardLength}>
      {boardState.map((value, index) => {
        // Current issues: it checks value out of bounds or on next row.
        // Also may double-count some boundaries.
        const valueToRight = boardLayout[index + 1];
        const valueBelow = boardLayout[index + boardLength] || "";
        const borderRight = valueToRight !== boardLayout[index];
        const borderBottom = valueBelow !== boardLayout[index];

        return (
          <BoardTile
            key={index}
            value={value}
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
