import React from 'react';

import {
  ToolTray,
  Tool,
  AirIcon,
  WaterIcon,
  TrashIcon,
} from './BoardControlsStyle';

const BoardControls = ({ currentTool, setCurrentTool }) => {
  return (
    <ToolTray>
      <Tool
        active={currentTool === 'air'}
        color="#D8F6EF"
        onClick={() => setCurrentTool('air')}
      >
        <AirIcon />
      </Tool>
      <Tool
        active={currentTool === 'water'}
        color="#5CCFE6"
        onClick={() => setCurrentTool('water')}
      >
        <WaterIcon />
      </Tool>
      <Tool
        active={currentTool === 'empty'}
        color="#FF7C5C"
        onClick={() => setCurrentTool('empty')}
      >
        <TrashIcon />
      </Tool>
    </ToolTray>
  );
};

export default BoardControls;
