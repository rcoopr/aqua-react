import React from "react";

import S from "./BoardControls.styled";

const BoardControls = ({ currentTool, setCurrentTool }) => {
  return (
    <S.ToolTray>
      <S.Tool
        active={currentTool === "air"}
        color="#D8F6EF"
        onClick={() => setCurrentTool("air")}
      >
        <S.AirIcon />
      </S.Tool>
      <S.Tool
        active={currentTool === "water"}
        color="#5CCFE6"
        onClick={() => setCurrentTool("water")}
      >
        <S.WaterIcon />
      </S.Tool>
      <S.Tool
        active={currentTool === "trash"}
        color="#FF7C5C"
        onClick={() => setCurrentTool("trash")}
      >
        <S.TrashIcon />
      </S.Tool>
    </S.ToolTray>
  );
};

export default BoardControls;
