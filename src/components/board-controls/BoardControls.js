import React from "react";
import "./BoardControls.css";

import {
  ToolTray,
  Tool,
  AirIcon,
  WaterIcon,
  TrashIcon
} from "./BoardControlsStyle";

const BoardControls = ({ currentTool, setCurrentTool }) => {
  return (
    <ToolTray>
      <Tool
        active={currentTool === "air"}
        onClick={() => setCurrentTool("air")}
      >
        <AirIcon />
      </Tool>
      <Tool
        active={currentTool === "water"}
        onClick={() => setCurrentTool("water")}
      >
        <WaterIcon />
      </Tool>
      <Tool
        active={currentTool === "trash"}
        onClick={() => setCurrentTool("trash")}
      >
        <TrashIcon />
      </Tool>
    </ToolTray>
  );
};

export default BoardControls;
