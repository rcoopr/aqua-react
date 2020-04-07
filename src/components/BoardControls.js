import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTool, setFill, setLevelSelectorOpen } from "../redux/actions";
import styled, { css } from "styled-components";
import { ReactComponent as AirIconSVG } from "../assets/air.svg";
import { ReactComponent as WaterIconSVG } from "../assets/water.svg";
import { ReactComponent as TrashIconSVG } from "../assets/trash.svg";
import { ReactComponent as LevelSelectIconSVG } from "../assets/multi.svg";

const ToolTray = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 2em;
  @media screen and (min-width: 800px) {
    flex-direction: column;
  }
`;

const Tool = styled.li`
  margin: 0.6em;
  border-radius: 0.5em;
  border-top: 2px solid #ffffff22;
  border-bottom: 2px solid #00000044;
  cursor: pointer;
  transition: 300ms all cubic-bezier(0.445, 0.05, 0.55, 0.95);

  background: ${props => props.theme.colors.bgLightTranslucent};
  ${props =>
    props.active === props.name &&
    css`
      background: ${props => props.theme.colors[props.name]};
    `}
  &:active {
    background: ${props => props.theme.colors[props.name]};
  }
`;

const LevelSelector = styled(Tool)`
  background: none;
`;

const svg = css`
  font-size: calc(1.1vmin + 8px);
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
const LevelSelect = styled(LevelSelectIconSVG)`
  ${svg};
  fill: ${props => props.theme.colors.bgLight};
`;

export const BoardControls = () => {
  const { fill } = useSelector(state => state.controls);
  const dispatch = useDispatch();
  return (
    <ToolTray>
      <Tool
        active={fill}
        name="WATER"
        onClick={() => {
          dispatch(setTool("WATER"));
          dispatch(setFill("WATER"));
        }}
      >
        <WaterIcon />
      </Tool>
      <Tool
        active={fill}
        name="AIR"
        onClick={() => {
          dispatch(setTool("AIR"));
          dispatch(setFill("AIR"));
        }}
      >
        <AirIcon />
      </Tool>
      <Tool
        active={fill}
        name="EMPTY"
        onClick={() => {
          dispatch(setTool("EMPTY"));
          dispatch(setFill("EMPTY"));
        }}
      >
        <TrashIcon />
      </Tool>
      <LevelSelector onClick={() => dispatch(setLevelSelectorOpen(true))}>
        <LevelSelect />
      </LevelSelector>
    </ToolTray>
  );
};
