import React, { useState } from "react";
import styled, { css } from "styled-components";

const Tile = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.bgLightTranslucent};
  transition: all 250ms ease-out;
`;

const StyledBoardTile = styled(Tile)`
  ${props =>
    props.value === "WATER" &&
    css`
      background: ${props => props.theme.colors.water};
    `};
  ${props =>
    props.value === "AIR" &&
    css`
      background: ${props => props.theme.colors.air};
    `};
  ${props =>
    props.borderRight &&
    css`
      border-right: 2px solid ${props => props.theme.colors.accent};
    `}
  ${props =>
    props.borderBottom &&
    css`
      border-bottom: 2px solid ${props => props.theme.colors.accent};
    `}
`;

const StyledNumberTile = styled(Tile)`
  margin: 10%;
  border: none;
  border-radius: 20%;
  background: ${props =>
    props.value !== -1 && props.theme.colors.bgLightTranslucent};
  opacity: ${props => (props.faded === true ? 0.2 : 1)};
`;

const Content = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: calc(3vmin + 10px);
`;

export const NumberTile = ({ value, id }) => {
  const [faded, setFaded] = useState(false);

  return (
    <StyledNumberTile
      value={value}
      faded={faded}
      id={id}
      onClick={() => {
        if (value !== -1) setFaded(!faded);
      }}
    >
      <Content>{value !== -1 ? value : ""}</Content>
    </StyledNumberTile>
  );
};

export const BoardTile = ({
  value,
  id,
  borderBottom,
  borderRight,
  onMouseDown = () => {},
  onMouseOver = () => {},
  onMouseUp = () => {}
}) => {
  return (
    <StyledBoardTile
      value={value}
      id={id}
      borderBottom={borderBottom}
      borderRight={borderRight}
      onMouseDown={() => onMouseDown(id)}
      onMouseOver={() => onMouseOver(id)}
      onMouseUp={() => onMouseUp()}
    />
  );
};
