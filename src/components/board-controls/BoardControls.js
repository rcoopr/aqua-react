import React, { useContext } from "react";
import S from "./BoardControls.styled";
import { ToolContext } from "../tool-context/ToolContext";

const BoardControls = () => {
  const { currentTool, setCurrentTool, setTemporaryTool } = useContext(
    ToolContext
  );

  return (
    <S.ToolTray>
      <S.Tool
        active={currentTool === "air"}
        name="air"
        onClick={() => {
          setCurrentTool("air");
          setTemporaryTool("air");
        }}
      >
        <S.AirIcon />
      </S.Tool>
      <S.Tool
        active={currentTool === "water"}
        name="water"
        onClick={() => {
          setCurrentTool("water");
          setTemporaryTool("water");
        }}
      >
        <S.WaterIcon />
      </S.Tool>
      <S.Tool
        active={currentTool === "trash"}
        name="trash"
        onClick={() => {
          setCurrentTool("trash");
          setTemporaryTool("trash");
        }}
      >
        <S.TrashIcon />
      </S.Tool>
      <S.Selector>
        <select>
          <option value="1">Board 1</option>
          <option value="2">Board 2</option>
          <option value="3">Board 3</option>
        </select>
      </S.Selector>
    </S.ToolTray>
  );
};

export default BoardControls;
