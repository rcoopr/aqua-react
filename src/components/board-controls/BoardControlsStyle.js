import styled, { css } from "styled-components";
import { ReactComponent as AirIconSVG } from "../../assets/air.svg";
import { ReactComponent as WaterIconSVG } from "../../assets/water.svg";
import { ReactComponent as TrashIconSVG } from "../../assets/trash.svg";

export const ToolTray = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 2em;
`;

export const Tool = styled.li`
  background: #00000033;
  margin: 0.6em;
  border-radius: 0.5em;
  border-top: 2px solid #00000044;
  border-bottom: 2px solid #ffffff22;
  ${props =>
    props.active &&
    css`
      background: ${props.color || "coral"};
    `}
`;

const svg = css`
  width: 3em;
  height: 3em;
  margin: 0.6em;
`;

export const AirIcon = styled(AirIconSVG)`
  ${svg}
`;
export const WaterIcon = styled(WaterIconSVG)`
  ${svg}
`;
export const TrashIcon = styled(TrashIconSVG)`
  ${svg}
`;
