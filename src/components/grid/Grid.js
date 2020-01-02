import React, { useContext } from "react";
import BoardTile from "../tile/BoardTile";
import S from "./Grid.styled";
import { ToolContext } from "../tool-context/ToolContext";

const Grid = ({
  boardState,
  setBoardState,
  dragging,
  setDragging,
  boardLayout
}) => {
  const { currentTool, setCurrentTool, temporaryTool } = useContext(
    ToolContext
  );

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
    <S.Grid length={boardLength}>
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
    </S.Grid>
  );
};

export default Grid;
