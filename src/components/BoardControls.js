import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTool, setFill, selectBoard } from "../redux/actions";
import styled, { css } from "styled-components";
import { ReactComponent as AirIconSVG } from "../assets/air.svg";
import { ReactComponent as WaterIconSVG } from "../assets/water.svg";
import { ReactComponent as TrashIconSVG } from "../assets/trash.svg";

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
    props.active === props.name &&
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
  const { tool } = useSelector(state => state.controls);
  const { board } = useSelector(state => state.board);
  const dispatch = useDispatch();
  return (
    <ToolTray>
      <Tool
        active={tool}
        name="WATER"
        onClick={() => {
          dispatch(setTool("WATER"));
          dispatch(setFill("WATER"));
        }}
      >
        <WaterIcon />
      </Tool>
      <Tool
        active={tool}
        name="AIR"
        onClick={() => {
          dispatch(setTool("AIR"));
          dispatch(setFill("AIR"));
        }}
      >
        <AirIcon />
      </Tool>
      <Tool
        active={tool}
        name="EMPTY"
        onClick={() => {
          dispatch(setTool("EMPTY"));
          dispatch(setFill("EMPTY"));
        }}
      >
        <TrashIcon />
      </Tool>
      <Selector>
        <select
          value={board.id}
          onChange={e => {
            dispatch(selectBoard(e.target.value));
          }}
        >
          <option value="1">Board 1</option>
          <option value="2">Board 2</option>
          <option value="3">Board 3</option>
          <option value="4">Board 4</option>
        </select>
      </Selector>
    </ToolTray>
  );
};
