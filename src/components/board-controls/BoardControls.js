import React from "react";
import S from "./BoardControls.styled";

const BoardControls = () => {
  return (
    <S.ToolTray>
      <S.Tool>
        <S.WaterIcon />
      </S.Tool>
      <S.Tool>
        <S.AirIcon />
      </S.Tool>
      <S.Tool>
        <S.TrashIcon />
      </S.Tool>
      <S.Selector>
        <select value={1}>
          <option value="1">Board 1</option>
          <option value="2">Board 2</option>
          <option value="3">Board 3</option>
        </select>
      </S.Selector>
    </S.ToolTray>
  );
};

export default BoardControls;
