import React from 'react';
import Tile from '../tile/Tile';
import { StyledGrid } from './GridStyle';

const Grid = ({ length, boardState, setBoardState, dragging, currentTool }) => {
  const handleMouseOver = tileId => {
    if (!dragging) return;

    const newBoardState = [...boardState];
    newBoardState[tileId] = currentTool;
    setBoardState(newBoardState);
  };

  return (
    <StyledGrid length={length}>
      {boardState.map((value, index) => (
        <Tile
          key={index}
          value={value}
          id={index}
          type="cell"
          onMouseOver={handleMouseOver}
        />
      ))}
    </StyledGrid>
  );
};

export default Grid;
