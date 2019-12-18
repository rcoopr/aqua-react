import styled, { css } from "styled-components";

const Tile = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.backgroundLight};
`;

const BoardTile = styled(Tile)`
  ${props =>
    props.value === "water" &&
    css`
      background: ${props => props.theme.colors.water};
    `};
  ${props =>
    props.value === "air" &&
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

const NumberTile = styled(Tile)`
  margin: 10%;
  border: none;
  border-radius: 20%;
  background: ${props =>
    props.value !== -1 && props.theme.colors.backgroundLight};
  opacity: ${props => (props.faded === true ? 0.2 : 1)};
`;

const Content = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: calc(3vmin + 10px);
`;

const S = {
  BoardTile,
  NumberTile,
  Content
};

export default S;
