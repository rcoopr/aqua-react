import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as AirIconSVG } from "../../assets/air.svg";
import { ReactComponent as WaterIconSVG } from "../../assets/water.svg";
import { ReactComponent as TrashIconSVG } from "../../assets/trash.svg";

const ToolTray = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 2em;
  @media screen and (min-width: 800px) {
    flex-direction: column;
  }
`;

const Tool = styled.li`
  background: #00000033;
  margin: 0.6em;
  border-radius: 0.5em;
  border-top: 2px solid #00000044;
  border-bottom: 2px solid #ffffff22;
  &:active {
    background: ${props => props.theme.colors[props.name]};
  }
  ${props =>
    props.active &&
    css`
      background: ${props => props.theme.colors[props.name]};
    `}
`;

const svg = css`
  width: 3em;
  height: 3em;
  margin: 0.6em;
  fill: ${props => props.theme.colors.svgFill};
`;

const AirIcon = styled(AirIconSVG)`
  ${svg}
`;
const WaterIcon = styled(WaterIconSVG)`
  ${svg}
`;
const TrashIcon = styled(TrashIconSVG)`
  ${svg}
`;

const Selector = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardControls = () => {
  return (
    <ToolTray>
      <Tool>
        <WaterIcon />
      </Tool>
      <Tool>
        <AirIcon />
      </Tool>
      <Tool>
        <TrashIcon />
      </Tool>
      <Selector>
        <select value={1}>
          <option value="1">Board 1</option>
          <option value="2">Board 2</option>
          <option value="3">Board 3</option>
        </select>
      </Selector>
    </ToolTray>
  );
};
